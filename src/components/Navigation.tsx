import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "events", "sponsors", "organizers", "faq"];
      const scrollPos = window.scrollY + 100;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", id: "" },
    { name: "About", href: "#about", id: "about" },
    { name: "Events", href: "#events", id: "events" },
    { name: "Sponsors", href: "#sponsors", id: "sponsors" },
    { name: "Team", href: "#organizers", id: "organizers" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full font-squid z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-dark/95 backdrop-blur-md shadow-lg border-b border-white/5"
          : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white font-orbitron font-bold text-2xl tracking-widest group">
            <span className="text-squidPink group-hover:text-red-400 transition-colors duration-200">Hack</span>
            <span className="text-white">Sprint</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 py-1",
                  activeSection === link.id
                    ? "text-squidPink"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-squidPink rounded-full" />
                )}
              </a>
            ))}
            <a
              href="#register"
              className="bg-squidPink text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600 hover:shadow-[0_0_20px_rgba(224,16,16,0.5)] transition-all duration-300"
            >
              Register Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-dark/98 backdrop-blur-xl z-40 flex flex-col p-8 md:hidden transition-all duration-300 ease-in-out pt-24",
          isMenuOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200",
                activeSection === link.id
                  ? "bg-squidPink/10 text-squidPink border-l-2 border-squidPink pl-5"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="mt-4 bg-squidPink text-white px-5 py-3 rounded-full hover:bg-red-600 transition-colors duration-300 text-center font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </a>
        </div>

        <div className="mt-auto pb-4 text-white/30 text-sm text-center">
          March 23–25, 2026 · Reva University
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
