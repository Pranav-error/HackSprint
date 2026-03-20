
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Trophy, Moon } from "lucide-react";

type DayInfo = {
  day: 1 | 2 | 3;
  label: string;
  tagline: string;
  icon: React.ReactNode;
  color: string;
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
      icon: <Zap className="h-8 w-8" />,
      color: "squidPink",
      audience: "1st Year Students",
      duration: "7 Hours",
      format: "Fast Coding Hackathon — build and ship a complete project within 7 hours. Teams will be judged on innovation, functionality, and execution.",
      outcome: "Top 20 teams advance to the Grand Finale on Day 3.",
    },
    {
      day: 2,
      label: "Day 2 — 2nd & 3rd Year Sprint",
      tagline: "Seniors Take the Stage",
      icon: <Trophy className="h-8 w-8" />,
      color: "squidGreen",
      audience: "2nd & 3rd Year Students",
      duration: "7 Hours",
      format: "Fast Coding Hackathon — same high-intensity format as Day 1. Build something impressive, ship it fast, and prove your skills.",
      outcome: "Top 20 teams advance to the Grand Finale on Day 3.",
    },
    {
      day: 3,
      label: "Day 3 — Grand Finale",
      tagline: "All Night. All In.",
      icon: <Moon className="h-8 w-8" />,
      color: "championGold",
      audience: "Top 20 Teams from Day 1 + Top 20 Teams from Day 2",
      duration: "All Night Hackathon",
      format: "The ultimate showdown. All shortlisted teams return to campus for an all-night hackathon. After guidance and mentoring sessions, teams push their projects to the limit through the night.",
      outcome: "Winners crowned at dawn. Glory, prizes, and bragging rights await.",
    },
  ];

  const active = days.find(d => d.day === activeDay)!;

  return (
    <section id="events" className="py-20 md:py-28 bg-dark relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-squidGreen/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block font-squid px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            EVENTS SCHEDULE
          </div>

          <h2 className="text-3xl md:text-4xl font-squid lg:text-5xl font-heading font-bold mb-6 text-white">
            Three Days of <span className="text-squidGreen">Epic</span> Challenges
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Sprint, survive, and conquer. Top teams from each qualifying day battle it out in an all-night grand finale.
          </p>
        </div>

        {/* Day selector */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex bg-darkAccent/50 rounded-lg p-1">
            {days.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                className={cn(
                  "py-2 px-6 md:px-10 font-medium rounded-md transition-all duration-300 text-sm md:text-base",
                  activeDay === d.day
                    ? "bg-squidPink text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                Day {d.day}
              </button>
            ))}
          </div>
        </div>

        {/* Day detail card */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className={cn(
                "p-8 flex flex-col items-center text-center",
                active.color === "squidPink" && "bg-squidPink/10",
                active.color === "squidGreen" && "bg-squidGreen/10",
                active.color === "championGold" && "bg-championGold/10",
              )}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                  active.color === "squidPink" && "bg-squidPink/20 text-squidPink",
                  active.color === "squidGreen" && "bg-squidGreen/20 text-squidGreen",
                  active.color === "championGold" && "bg-championGold/20 text-championGold",
                )}
              >
                {active.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-squid mb-1">{active.label}</h3>
              <p
                className={cn(
                  "text-lg font-medium",
                  active.color === "squidPink" && "text-squidPink",
                  active.color === "squidGreen" && "text-squidGreen",
                  active.color === "championGold" && "text-championGold",
                )}
              >
                {active.tagline}
              </p>
            </div>

            {/* Details */}
            <div className="p-8 grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Open To</p>
                <p className="text-white font-medium">{active.audience}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Duration</p>
                <p className="text-white font-medium">{active.duration}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Format</p>
                <p className="text-white/80">{active.format}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Outcome</p>
                <p
                  className={cn(
                    "font-semibold",
                    active.color === "squidPink" && "text-squidPink",
                    active.color === "squidGreen" && "text-squidGreen",
                    active.color === "championGold" && "text-championGold",
                  )}
                >
                  {active.outcome}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "h-1 w-full",
                active.color === "squidPink" && "bg-squidPink",
                active.color === "squidGreen" && "bg-squidGreen",
                active.color === "championGold" && "bg-championGold",
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
