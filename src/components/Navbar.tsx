
import { useState } from "react";
import GlassSurface from "./ui/GlassSurface.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-center">

        {/* Desktop Glass Navbar */}
        <div className="hidden md:block">
          <GlassSurface
            width={520}
            height={64}
            borderRadius={999}
            className="stardust-navbar"
            
          >
            <div className="flex h-full w-full items-center justify-center gap-8 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium text-alabaster/80 transition-colors duration-300 hover:text-pumpkin"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </GlassSurface>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-cosmic-border bg-surface px-4 py-2 text-alabaster md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 flex max-w-6xl flex-col gap-4 rounded-2xl border border-cosmic-border bg-surface/95 p-6 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-alabaster transition-colors hover:text-pumpkin"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
