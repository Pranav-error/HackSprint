import { useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Trophy, Moon, Users, Clock, Target, ArrowRight } from "lucide-react";

type DayInfo = {
  day: 1 | 2 | 3;
  label: string;
  tagline: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  audience: string;
  duration: string;
  format: string;
  outcome: string;
};

const EventsSection = () => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);

  const days: DayInfo[] = [
    {
      day: 1,
      label: "Day 1 — 1st Year Sprint",
      tagline: "First Years, Full Throttle",
      icon: <Zap className="h-7 w-7" />,
      color: "squidPink",
      borderColor: "border-squidPink/40",
      audience: "1st Year Students",
      duration: "7 Hours",
      format: "Fast Coding Hackathon — build and ship a complete project within 7 hours. Teams will be judged on innovation, functionality, and execution.",
      outcome: "Top 20 teams advance to the Grand Finale on Day 3.",
    },
    {
      day: 2,
      label: "Day 2 — 2nd & 3rd Year Sprint",
      tagline: "Seniors Take the Stage",
      icon: <Trophy className="h-7 w-7" />,
      color: "squidGreen",
      borderColor: "border-squidGreen/40",
      audience: "2nd & 3rd Year Students",
      duration: "7 Hours",
      format: "Fast Coding Hackathon — same high-intensity format as Day 1. Build something impressive, ship it fast, and prove your skills.",
      outcome: "Top 20 teams advance to the Grand Finale on Day 3.",
    },
    {
      day: 3,
      label: "Day 3 — Grand Finale",
      tagline: "All Night. All In.",
      icon: <Moon className="h-7 w-7" />,
      color: "championGold",
      borderColor: "border-championGold/40",
      audience: "Top 20 Teams from Day 1 + Top 20 Teams from Day 2",
      duration: "All Night Hackathon",
      format: "The ultimate showdown. All shortlisted teams return to campus for an all-night hackathon. After guidance and mentoring sessions, teams push their projects to the limit through the night.",
      outcome: "Winners crowned at dawn. Glory, prizes, and bragging rights await.",
    },
  ];

  const active = days.find(d => d.day === activeDay)!;

  const colorClasses = {
    squidPink: {
      bg: "bg-squidPink/10",
      icon: "bg-squidPink/20 text-squidPink",
      text: "text-squidPink",
      bar: "bg-squidPink",
      active: "bg-squidPink text-white",
      badge: "bg-squidPink/10 text-squidPink border-squidPink/30",
    },
    squidGreen: {
      bg: "bg-squidGreen/10",
      icon: "bg-squidGreen/20 text-squidGreen",
      text: "text-squidGreen",
      bar: "bg-squidGreen",
      active: "bg-squidGreen text-white",
      badge: "bg-squidGreen/10 text-squidGreen border-squidGreen/30",
    },
    championGold: {
      bg: "bg-championGold/10",
      icon: "bg-championGold/20 text-championGold",
      text: "text-championGold",
      bar: "bg-championGold",
      active: "bg-championGold text-dark",
      badge: "bg-championGold/10 text-championGold border-championGold/30",
    },
  } as const;

  const c = colorClasses[active.color as keyof typeof colorClasses];

  return (
    <section id="events" className="py-20 md:py-28 bg-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-squidGreen/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block font-squid px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm tracking-widest">
            EVENTS SCHEDULE
          </div>

          <h2 className="text-3xl md:text-4xl font-squid lg:text-5xl font-bold mb-6 text-white">
            Three Days of <span className="text-squidGreen">Epic</span> Challenges
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Sprint, survive, and conquer. Top teams from each qualifying day battle it out in an all-night grand finale.
          </p>
        </div>

        {/* Day selector */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex bg-black/30 border border-white/10 rounded-xl p-1.5 gap-1">
            {days.map((d) => {
              const dc = colorClasses[d.color as keyof typeof colorClasses];
              return (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={cn(
                    "relative py-2 px-5 md:px-10 font-medium rounded-lg transition-all duration-300 text-sm md:text-base",
                    activeDay === d.day
                      ? `${dc.active} shadow-lg`
                      : "text-white/50 hover:text-white"
                  )}
                >
                  <span className="relative z-10">Day {d.day}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline steps */}
        <div className="hidden md:flex justify-center items-center gap-0 mb-10 reveal">
          {days.map((d, i) => {
            const dc = colorClasses[d.color as keyof typeof colorClasses];
            return (
              <div key={d.day} className="flex items-center">
                <button
                  onClick={() => setActiveDay(d.day)}
                  className={cn(
                    "flex flex-col items-center gap-1 px-4 group",
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300",
                    activeDay === d.day
                      ? `${dc.icon} border-current scale-110`
                      : "border-white/20 text-white/40 hover:border-white/40 hover:text-white/60"
                  )}>
                    {d.day}
                  </div>
                  <span className={cn(
                    "text-xs transition-colors duration-200",
                    activeDay === d.day ? dc.text : "text-white/30"
                  )}>
                    {d.day === 1 ? "1st Year" : d.day === 2 ? "2nd & 3rd Year" : "Finale"}
                  </span>
                </button>
                {i < days.length - 1 && (
                  <ArrowRight className="text-white/20 mx-1" size={16} />
                )}
              </div>
            );
          })}
        </div>

        {/* Day detail card */}
        <div className="max-w-3xl mx-auto reveal">
          <div className={cn("glass-card rounded-2xl overflow-hidden border", active.borderColor)}>
            {/* Header */}
            <div className={cn("p-8 flex flex-col items-center text-center", c.bg)}>
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", c.icon)}>
                {active.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-squid mb-1">{active.label}</h3>
              <p className={cn("text-base font-medium", c.text)}>{active.tagline}</p>
            </div>

            {/* Details */}
            <div className="p-8 grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Users className="text-white/30 mt-0.5 shrink-0" size={16} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Open To</p>
                  <p className="text-white font-medium text-sm">{active.audience}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-white/30 mt-0.5 shrink-0" size={16} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Duration</p>
                  <p className="text-white font-medium text-sm">{active.duration}</p>
                </div>
              </div>
              <div className="md:col-span-2 border-t border-white/5 pt-6">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Format</p>
                <p className="text-white/75 text-sm leading-relaxed">{active.format}</p>
              </div>
              <div className="md:col-span-2 flex items-start gap-3">
                <Target className={cn("mt-0.5 shrink-0", c.text)} size={16} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Outcome</p>
                  <p className={cn("font-semibold text-sm", c.text)}>{active.outcome}</p>
                </div>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className={cn("h-1 w-full", c.bar)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
