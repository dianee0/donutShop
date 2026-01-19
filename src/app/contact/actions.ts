"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPrisma } from "@/lib/prisma";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || null;
  const message = formData.get("message") as string;

  // Validate required fields
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    // Get the Cloudflare context for D1 access
    let prisma;
    try {
      const { env } = getRequestContext();
      prisma = getPrisma(env);
    } catch {
      // Local development fallback
      prisma = getPrisma();
    }

    // Save to D1 database
    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    // Send email notification (don't block on failure)
    await sendEmailNotification({ name, email, phone, message });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured, skipping email notification");
    return;
  }

  // Email to receive notifications
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "jimsdonutsandbagels@gmail.com";
  
  // Sender email
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "contact@jimsdonutsandbagels.com";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Jim's Donuts Contact Form <${fromEmail}>`,
        to: [notificationEmail],
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <hr />
          <h3>Message:</h3>
          <p>${data.message.replace(/\n/g, "<br />")}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the contact form on jimsdonutsandbagels.com
          </p>
        `,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Resend API error:", errorData);
    }
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
}
