import shardeumLogo from "../assets/shardeum_logo.png";
import { ExternalLink } from "lucide-react";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-darkAccent relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-squidGreen/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-squidPink/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 font-squid mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm tracking-widest">
            OUR PROUD SPONSORS
          </div>

          <h2 className="text-3xl font-squid md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Powered by <span className="text-championGold">Visionaries</span>
          </h2>

          <p className="text-base text-white/60 max-w-xl mx-auto">
            Industry leaders backing the next generation of builders.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="flex justify-center mb-10 reveal">
          <a
            href="https://shardeum.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card p-10 rounded-2xl flex flex-col items-center justify-center border border-championGold/30 shadow-[0_0_40px_rgba(255,215,0,0.1)] hover:border-championGold/60 hover:shadow-[0_0_50px_rgba(255,215,0,0.25)] hover:-translate-y-2 transition-all duration-300 max-w-sm w-full"
          >
            <div className="w-48 h-20 mb-5 flex items-center justify-center">
              <img
                src={shardeumLogo}
                alt="Shardeum"
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <span className="text-xl font-bold text-championGold">Shardeum</span>
            <span className="text-xs uppercase tracking-widest text-white/50 mt-1">Title Sponsor</span>
            <span className="mt-3 flex items-center gap-1 text-xs text-white/30 group-hover:text-championGold/60 transition-colors duration-300">
              <ExternalLink size={10} />
              shardeum.org
            </span>
          </a>
        </div>

        {/* Become a sponsor CTA */}
        <div className="text-center reveal">
          <p className="text-white/40 text-sm mb-3">Interested in sponsoring HackSprint?</p>
          <a
            href="mailto:pripritam7@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-white/60 text-sm hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Get in touch
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
