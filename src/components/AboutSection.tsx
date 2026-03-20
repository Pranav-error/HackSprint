import { cn } from "@/lib/utils";
import { Star, CalendarDays, Trophy, GraduationCap } from "lucide-react";

const stats = [
  {
    value: "9+",
    label: "Unique Events",
    icon: <Star className="h-5 w-5" />,
    gradient: "from-squidPink/20",
    iconColor: "text-squidPink",
  },
  {
    value: "3",
    label: "Action Days",
    icon: <CalendarDays className="h-5 w-5" />,
    gradient: "from-squidGreen/20",
    iconColor: "text-squidGreen",
  },
  {
    value: "₹30k",
    label: "Prize Pool",
    icon: <Trophy className="h-5 w-5" />,
    gradient: "from-championGold/20",
    iconColor: "text-championGold",
  },
  {
    value: "5+",
    label: "Colleges",
    icon: <GraduationCap className="h-5 w-5" />,
    gradient: "from-white/10",
    iconColor: "text-white/60",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-darkAccent relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-900/15 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="inline-block px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10">
              <span className="text-squidPink font-squid text-sm tracking-widest">ABOUT THE EVENT</span>
            </div>

            <h2 className="text-3xl font-squid md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Where <span className="text-squidGreen">Technology</span> Meets <span className="text-squidPink">Challenge</span>
            </h2>
          </div>

          <div className="glass-card p-8 md:p-10 rounded-2xl reveal">
            <p className="text-white/85 text-lg md:text-xl leading-relaxed">
              <span className="text-squidPink font-semibold">HackSprint</span> is a high-intensity three-day hackathon where teams of two race against the clock to build and ship real projects. Day 1 is for 1st years, Day 2 for 2nd and 3rd years — the top 20 teams from each day earn their spot in the all-night Grand Finale on Day 3. With a ₹30,000 prize pool on the line, only the sharpest builders will survive. Register before 20th March. Are you ready to sprint?
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-white/5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-5 rounded-xl text-center transition-transform duration-200 hover:-translate-y-1",
                    `bg-gradient-to-b ${stat.gradient} to-transparent border border-white/5`
                  )}
                >
                  <div className={cn("flex justify-center mb-2", stat.iconColor)}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-xs tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
