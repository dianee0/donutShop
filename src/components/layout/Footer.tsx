import Link from "next/link";
import { getPrisma } from "@/lib/prisma";
import { getRequestContext } from "@cloudflare/next-on-pages";

export default async function Footer() {
  // Get D1 binding on Cloudflare, undefined locally
  let env;
  try {
    env = getRequestContext().env;
  } catch {
    env = undefined;
  }

  const prisma = getPrisma(env);

  // Fetch latest website update info (exclude expired)
  // Wrapped in try-catch for build-time when DB may not exist
  let latestUpdate = null;
  try {
    const now = new Date();
    latestUpdate = await prisma.announcement.findFirst({
      where: {
        isActive: true,
        type: "info",
        OR: [
          { expiresAt: null }, // Never expires
          { expiresAt: { gt: now } }, // Not yet expired
        ],
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  } catch {
    // Database not available during build - skip
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/blue-coffee-mug.png"
                alt="Coffee"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-white">
                JIM&apos;S DONUTS & BAGELS
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Serving fresh donuts and bagels daily since 1998.
            </p>
            {latestUpdate && (
              <div className="mt-4 text-xs text-gray-500">
                <p>Last Updated: {latestUpdate.message}</p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/#locations"
                  className="hover:text-white transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/#story"
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <p className="text-sm">Hours vary by location</p>
            <p className="text-xs text-gray-400 mt-2">
              See{" "}
              <Link href="/#locations" className="underline hover:text-white">
                locations
              </Link>{" "}
              for details
            </p>
            <p className="text-xs text-gray-500 mt-1">*Holidays excluded</p>
          </div>
        </div>

        {/* Google Review CTA */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm mb-3">
            Like our shop?{" "}
            <Link
              href="/reviews"
              className="text-[#C84B6B] hover:text-[#d15a7a] font-semibold transition-colors underline"
            >
              Leave us a review on Google
            </Link>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Jim&apos;s Donuts & Bagels. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
