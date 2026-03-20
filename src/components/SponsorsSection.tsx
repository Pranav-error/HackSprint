
import shardeumLogo from "../assets/shardeum_logo.png";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-darkAccent relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-squidGreen/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-squidPink/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 font-squid mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            OUR PROUD SPONSORS
          </div>

          <h2 className="text-3xl font-squid md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Powered by <span className="text-championGold">Visionaries</span>
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            These industry leaders support our mission to create the ultimate championship experience.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="flex justify-center mb-6 reveal">
          <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center border border-championGold/40 shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:translate-y-[-5px] transition-all duration-300 max-w-sm w-full">
            <div className="w-48 h-24 mb-5 overflow-hidden flex items-center justify-center">
              <img
                src={shardeumLogo}
                alt="Shardeum"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-championGold">Shardeum</span>
            <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Title Sponsor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
