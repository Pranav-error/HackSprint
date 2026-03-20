import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkAccent pt-16 pb-0 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-squidGreen/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-orbitron text-white mb-4">
              <span className="text-squidPink">Hack</span>Sprint
            </h3>
            <p className="text-white/60 mb-6 max-w-xs text-sm leading-relaxed">
              The ultimate test of skill, strategy, and code. Do you have what it takes to emerge victorious?
            </p>
            <div className="flex space-x-3">
              <a
                href="https://x.com/Pritam_P20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-squidPink hover:border-squidPink/50 hover:bg-squidPink/5 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://www.instagram.com/dev.track"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-squidPink hover:border-squidPink/50 hover:bg-squidPink/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/dev-track"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-squidPink hover:border-squidPink/50 hover:bg-squidPink/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Events", href: "#events" },
                { label: "Sponsors", href: "#sponsors" },
                { label: "Organizers", href: "#organizers" },
                { label: "FAQ", href: "#faq" },
                { label: "Register — 1st Year", href: "https://forms.gle/8CUv6bcg8mefw3fN7" },
                { label: "Register — 2nd & 3rd Year", href: "https://forms.gle/qwNtEGLEibr9BzDCA" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/55 hover:text-squidPink text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-squidPink mt-0.5 shrink-0" size={15} />
                <a href="mailto:pripritam7@gmail.com" className="text-white/55 hover:text-white text-sm transition-colors duration-200">
                  pripritam7@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-squidPink mt-0.5 shrink-0" size={15} />
                <a href="tel:+917972121969" className="text-white/55 hover:text-white text-sm transition-colors duration-200">
                  +91-7972121969
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-squidPink mt-0.5 shrink-0" size={15} />
                <span className="text-white/55 text-sm">Reva University, Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {currentYear} HackSprint · Reva University. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with ❤️ by Dev Track
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
