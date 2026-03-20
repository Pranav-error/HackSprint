import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [tick, setTick] = useState(0);
  
  const countdownRef = useRef({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const countdownElements = useRef([
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 }
  ]);

  useEffect(() => {
    // Update function that recalculates time and updates refs
    const updateCountdown = () => {
      const currentDate = new Date();
      const eventDate = new Date("2026-03-23T00:00:00");
      const timeDifference = eventDate.getTime() - currentDate.getTime();
      
      const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      // Update the countdown ref
      countdownRef.current = {
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft
      };
      
      // Update the elements ref
      countdownElements.current = [
        { label: 'Days', value: daysLeft },
        { label: 'Hours', value: hoursLeft },
        { label: 'Minutes', value: minutesLeft },
        { label: 'Seconds', value: secondsLeft }
      ];
      
      // Force re-render
      setTick(prev => prev + 1);
    };
    
    // Initial update
    updateCountdown();
    
    // Set up the interval
    const intervalId = setInterval(updateCountdown, 1000);
    
    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen font-squid text-white relative overflow-hidden flex items-center justify-center antialiased">
      {/* Dark overlay so text stays readable over blockchain canvas */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Red gradient vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(120,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      ></div>

      {/* Red corner glows */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-800/20 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-900/15 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-6">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 font-orbitron tracking-tight leading-none select-none"
          style={{
            background: "linear-gradient(to right, #FF2020, #E01010, #8B0000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale"
          }}
        >
          HACKSPRINT 2025
        </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 tracking-wide">
            A three-day tech extravaganza — code, compete, conquer
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
          {countdownElements.current.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#080808] border border-red-700/40 rounded-lg p-2 sm:p-4 text-center shadow-sm flex-grow flex-shrink-0 max-w-[90px] sm:max-w-[120px]"
            >
              <span className="text-2xl sm:text-4xl font-bold text-red-500 tracking-tighter">
                {item.value}
              </span>
              <p className="text-xs sm:text-sm text-white/60 tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-white/60 text-sm tracking-wider">REGISTER NOW &amp; SECURE YOUR SPOT</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://forms.gle/8CUv6bcg8mefw3fN7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-800 text-white px-7 py-3 rounded-lg transition-colors duration-300 font-medium tracking-wider text-sm"
            >
              1ST YEAR
            </a>
            <a
              href="https://forms.gle/qwNtEGLEibr9BzDCA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-800 text-white px-7 py-3 rounded-lg transition-colors duration-300 font-medium tracking-wider text-sm"
            >
              2ND &amp; 3RD YEAR
            </a>
            <a
              href="#events"
              className="border border-white/30 text-white px-7 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 font-medium tracking-wider text-sm"
            >
              EXPLORE EVENTS
            </a>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;