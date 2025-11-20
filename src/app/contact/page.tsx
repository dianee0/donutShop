import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-[#FFF9F0] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#C84B6B] tracking-widest uppercase bg-white px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contact <span className="text-[#C84B6B]">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Send us your feedback, questions, or
            suggestions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact Info */}
          <ContactInfo />

          {/* Right side - Contact Form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

