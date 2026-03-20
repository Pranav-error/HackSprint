
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#organizers" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full font-squid z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-dark/90 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white font-orbitron font-bold text-2xl tracking-widest">
            <span className="text-squidPink">Hack</span><span className="text-white">Sprint</span>
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 hover:text-squidPink transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-squidPink text-white px-5 py-2 rounded-full hover:bg-squidPink/90 transition-colors duration-300"
            >
              Register Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-dark z-40 flex flex-col p-10 md:hidden transition-transform duration-300 ease-in-out pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/80 hover:text-squidPink transition-colors duration-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="bg-squidPink text-white px-5 py-3 rounded-full hover:bg-squidPink/90 transition-colors duration-300 text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
