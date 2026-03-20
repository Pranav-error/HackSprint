
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darkAccent pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-squidGreen/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-orbitron text-white mb-4"><span className="text-squidPink">Hack</span>Sprint</h3>
            <p className="text-white/70 mb-6 max-w-sm">
              The ultimate test of skill, strategy, and survival. Do you have what it takes to emerge victorious?
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="w-10 h-10 rounded-full bg-darkAccent/50 border border-white/10 flex items-center justify-center text-white/80 hover:text-squidPink hover:border-squidPink transition-colors duration-300">
                <Facebook size={18} />
              </a> */}
              <a href="https://x.com/Pritam_P20" className="w-10 h-10 rounded-full bg-darkAccent/50 border border-white/10 flex items-center justify-center text-white/80 hover:text-squidPink hover:border-squidPink transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/dev.track" className="w-10 h-10 rounded-full bg-darkAccent/50 border border-white/10 flex items-center justify-center text-white/80 hover:text-squidPink hover:border-squidPink transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/dev-track" className="w-10 h-10 rounded-full bg-darkAccent/50 border border-white/10 flex items-center justify-center text-white/80 hover:text-squidPink hover:border-squidPink transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-white/70 hover:text-squidPink transition-colors duration-300">Events</a>
              </li>
              <li>
                <a href="#sponsors" className="text-white/70 hover:text-squidPink transition-colors duration-300">Sponsors</a>
              </li>
              <li>
                <a href="#organizers" className="text-white/70 hover:text-squidPink transition-colors duration-300">Organizers</a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-squidPink transition-colors duration-300">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-squidPink transition-colors duration-300">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 text-squidPink mt-1" size={18} />
                <span className="text-white/70">pripritam7@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 text-squidPink mt-1" size={18} />
                <span className="text-white/70">+91-7972121969</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 text-squidPink mt-1" size={18} />
                <span className="text-white/70">Reva University, Bangalore</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
