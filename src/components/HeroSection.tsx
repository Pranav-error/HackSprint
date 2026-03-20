import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin, Calendar } from "lucide-react";

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

const HeroSection = () => {
  const [, setTick] = useState(0);

  const countdownRef = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const countdownElements = useRef([
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 }
  ]);

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date();
      const eventDate = new Date("2026-03-23T00:00:00");
      const diff = Math.max(0, eventDate.getTime() - currentDate.getTime());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownRef.current = { days, hours, minutes, seconds };
      countdownElements.current = [
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds }
      ];
      setTick(prev => prev + 1);
    };

    updateCountdown();
    const id = setInterval(updateCountdown, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="min-h-screen font-squid text-white relative overflow-hidden flex items-center justify-center antialiased">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Red gradient vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(120,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Corner glows */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-800/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-900/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Event badge */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs tracking-wider">
            <Calendar size={12} className="text-squidPink" />
            March 23–25, 2026
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs tracking-wider">
            <MapPin size={12} className="text-squidPink" />
            Reva University, Bangalore
          </span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1
            className="text-6xl md:text-8xl font-bold mb-4 font-orbitron tracking-tight leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #FF4444 0%, #E01010 40%, #8B0000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            HACKSPRINT 2025
          </h1>

          <p className="text-xl md:text-2xl text-white/75 mb-2 tracking-wide">
            A three-day tech extravaganza — code, compete, conquer
          </p>
          <p className="text-sm text-white/40 tracking-widest uppercase">
            ₹30,000 Prize Pool · Teams of 2 · ₹100 Registration
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
          {countdownElements.current.map((item, index) => (
            <div
              key={index}
              className="relative bg-black/40 border border-red-700/30 rounded-xl p-3 sm:p-5 text-center min-w-[72px] sm:min-w-[100px] backdrop-blur-sm"
            >
              <span className="text-3xl sm:text-5xl font-bold text-red-400 tracking-tighter tabular-nums block">
                {pad(item.value)}
              </span>
              <p className="text-[10px] sm:text-xs text-white/50 tracking-widest uppercase mt-1">{item.label}</p>
              {index < 3 && (
                <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-red-500/60 text-xl font-bold">:</span>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/50 text-xs tracking-[0.2em] uppercase">Secure your spot before March 20th</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://forms.gle/8CUv6bcg8mefw3fN7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-squidPink text-white px-7 py-3 rounded-lg transition-all duration-300 font-medium tracking-wider text-sm hover:bg-red-600 hover:shadow-[0_0_24px_rgba(224,16,16,0.6)] hover:-translate-y-0.5"
            >
              1ST YEAR REGISTER
            </a>
            <a
              href="https://forms.gle/qwNtEGLEibr9BzDCA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-squidPink text-white px-7 py-3 rounded-lg transition-all duration-300 font-medium tracking-wider text-sm hover:bg-red-600 hover:shadow-[0_0_24px_rgba(224,16,16,0.6)] hover:-translate-y-0.5"
            >
              2ND &amp; 3RD YEAR REGISTER
            </a>
            <a
              href="#events"
              className="border border-white/20 text-white/80 px-7 py-3 rounded-lg hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300 font-medium tracking-wider text-sm"
            >
              EXPLORE EVENTS
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/40 hover:text-white/80 transition-colors duration-300 flex flex-col items-center gap-1">
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
