import { cn } from "@/lib/utils";
import Pritam from "..//assets/Pritam_7.jpeg"
import Prerna from "../assets/Prerna.jpeg"
import Aditya from "../assets/Aditya.jpeg"
import V from "../assets/vyshnavi.jpeg"
import D from "../assets/Danush.png"
import k from "../assets/Karthik.jpeg"
import Pr from "../assets/Pravitha.jpeg"
import Deeksa from "../assets/Deekha.jpeg"
import CommignSoon from "../assets/comingSoon.png"
import Satyam from "../assets/Satyam.jpeg"
import Tanush from "../assets/chuthiya.jpeg"
import Manya from "../assets/manya.png"
import liya from "../assets/liya.png"
import saranya from "../assets/saranya.png"
import binit from "../assets/Binit.png"
import somesh from "../assets/somesh.jpeg"
import manan from "../assets/manan.png"
import sheety from "../assets/sheety.png"
import jeevita from "../assets/jeevitha.png"

const organizers = [
  {
    name: "Pritam",
    role: "Technical Lead",
    image: Pritam,
    linkedIn: "https://www.linkedin.com/in/pritam-p-012561253/"
  },
  {
    name: "Manya",
    role: "PR Lead",
    image: Manya,
    linkedIn: "https://www.linkedin.com/in/prerna-logachandran-b10a57249/"
  },
  {
    name: "Liya",
    role: "Event/Media mangement Lead",
    image: liya,
    linkedIn: "https://www.linkedin.com/in/aaditya-gowda-a9b328298/"
  },
  {
    name: "Saranya",
    role: "Marketing Head",
    image: saranya,
    linkedIn: "https://www.linkedin.com/in/vyshnavi-reddy-b1b670290"
  },
  {
    name: "Karthik",
    role: "Public Relations",
    image: k,
    linkedIn: "https://www.linkedin.com/in/kartikjarali/"
  },
  {
    name: "Jivitha Sheety",
    role: "Sponsorship",
    image: sheety,
    linkedIn: "https://www.linkedin.com/in/satyam-kumar-9b1a4a2b8/"
  },
  {
    name: "Jeevita R",
    role: "Content Creation",
    image: jeevita,
    linkedIn: "https://www.linkedin.com/in/tanush-shetty-9b1a4a2b8/"
  },
  {
    name: "Binit",
    role: "Design Lead",
    image: binit,
    linkedIn: "#"
  },
  {
    name: "Somesh",
    role: "Marketing",
    image:somesh,
    linkedIn: "https://www.linkedin.com/in/deeksha-shetti-51b9362a3/"
  },
  {
    name: "Manan",
    role: "Finance",
    image: manan,
    linkedIn: "https://www.linkedin.com/in/pravitta-jeromie-506aab27b"
  },
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-20 bg-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 font-squid mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            MEET THE TEAM
          </div>
          
          <h2 className="text-3xl md:text-4xl font-squid lg:text-5xl  font-bold mb-6 text-white">
            The <span className="text-squidGreen">Masterminds</span> Behind
          </h2>
          
          <p className="text-lg text-white/80  max-w-3xl mx-auto">
            Our dedicated team working tirelessly to bring you an unforgettable experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 reveal">
          {organizers.map((organizer, index) => (
            <a href={`${organizer.linkedIn}`}
              target="_blank"
              key={index}
              className="flex flex-col items-center group w-36 md:w-44"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden transition-all duration-300 group-hover:squid-border">
                {organizer.image ? (
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                    {organizer.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-white text-center">{organizer.name}</h3>
              <p className="text-sm text-white/60 text-center mt-1">{organizer.role}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;