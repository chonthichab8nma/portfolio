
import GlassSurface from "./ui/GlassSurface.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 py-3 sm:px-5 sm:py-5">
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

        {/* Persistent Mobile Navbar */}
        <div
          id="mobile-navigation"
          className="stardust-navbar flex h-12 w-full max-w-[390px] items-center justify-between rounded-full border border-white/15 bg-surface/75 px-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 min-w-0 flex-1 items-center justify-center whitespace-nowrap px-1 text-[10px] font-medium text-alabaster/80 transition-colors duration-300 hover:text-pumpkin min-[360px]:text-[11px] min-[400px]:text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
