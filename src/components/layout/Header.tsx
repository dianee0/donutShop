import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "MENU", href: "/menu" },
    { name: "OUR STORY", href: "/#story" },
    { name: "LOCATIONS", href: "/#locations" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="bg-[#FFF9F0] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Going to replace coffee icon with my own... */}
            <div className="text-4xl text-gray-700">☕︎ </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 tracking-tight leading-tight">
                JIM&apos;S DONUTS
              </span>
              <span className="text-sm text-gray-600 tracking-wide leading-tight">
                & BAGELS
              </span>
            </div>
          </Link>

          {/* Navigation bar */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#C84B6B] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Collapsible menu button */}
          <button className="md:hidden p-2 text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
