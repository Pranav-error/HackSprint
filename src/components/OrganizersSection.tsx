import { Linkedin } from "lucide-react";
import Pritam from "../assets/Pritam_7.jpeg";
import Manya from "../assets/manya.png";
import liya from "../assets/liya.png";
import saranya from "../assets/saranya.png";
import k from "../assets/Karthik.jpeg";
import sheety from "../assets/sheety.png";
import jeevita from "../assets/jeevitha.png";
import binit from "../assets/Binit.png";
import somesh from "../assets/somesh.jpeg";
import manan from "../assets/manan.png";

const organizers = [
  {
    name: "Pritam",
    role: "Technical Lead",
    image: Pritam,
    linkedIn: "https://www.linkedin.com/in/pritam-p-012561253/",
  },
  {
    name: "Manya",
    role: "PR Lead",
    image: Manya,
    linkedIn: "https://www.linkedin.com/in/prerna-logachandran-b10a57249/",
  },
  {
    name: "Liya",
    role: "Event & Media Lead",
    image: liya,
    linkedIn: "https://www.linkedin.com/in/aaditya-gowda-a9b328298/",
  },
  {
    name: "Saranya",
    role: "Marketing Head",
    image: saranya,
    linkedIn: "https://www.linkedin.com/in/vyshnavi-reddy-b1b670290",
  },
  {
    name: "Karthik",
    role: "Public Relations",
    image: k,
    linkedIn: "https://www.linkedin.com/in/kartikjarali/",
  },
  {
    name: "Jivitha Sheety",
    role: "Sponsorship",
    image: sheety,
    linkedIn: "https://www.linkedin.com/in/satyam-kumar-9b1a4a2b8/",
  },
  {
    name: "Jeevita R",
    role: "Content Creation",
    image: jeevita,
    linkedIn: "https://www.linkedin.com/in/tanush-shetty-9b1a4a2b8/",
  },
  {
    name: "Binit",
    role: "Design Lead",
    image: binit,
    linkedIn: "#",
  },
  {
    name: "Somesh",
    role: "Marketing",
    image: somesh,
    linkedIn: "https://www.linkedin.com/in/deeksha-shetti-51b9362a3/",
  },
  {
    name: "Manan",
    role: "Finance",
    image: manan,
    linkedIn: "https://www.linkedin.com/in/pravitta-jeromie-506aab27b",
  },
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-20 bg-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 font-squid mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm tracking-widest">
            MEET THE TEAM
          </div>

          <h2 className="text-3xl md:text-4xl font-squid lg:text-5xl font-bold mb-4 text-white">
            The <span className="text-squidGreen">Masterminds</span> Behind
          </h2>

          <p className="text-base text-white/60 max-w-xl mx-auto">
            Our dedicated team working tirelessly to bring you an unforgettable experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 reveal">
          {organizers.map((organizer, index) => (
            <a
              key={index}
              href={organizer.linkedIn !== "#" ? organizer.linkedIn : undefined}
              target={organizer.linkedIn !== "#" ? "_blank" : undefined}
              rel={organizer.linkedIn !== "#" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center group w-32 md:w-40 cursor-pointer"
            >
              {/* Avatar with hover glow */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-squidPink transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(224,16,16,0.5)]">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* LinkedIn overlay on hover */}
                {organizer.linkedIn !== "#" && (
                  <div className="absolute inset-0 bg-squidPink/0 group-hover:bg-squidPink/30 transition-all duration-300 flex items-center justify-center">
                    <Linkedin
                      size={22}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                )}
              </div>

              <h3 className="text-sm md:text-base font-semibold text-white text-center group-hover:text-squidPink transition-colors duration-200">
                {organizer.name}
              </h3>
              <p className="text-xs text-white/50 text-center mt-0.5 leading-tight">
                {organizer.role}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
