
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import SponsorsSection from "@/components/SponsorsSection";
import OrganizersSection from "@/components/OrganizersSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BlockchainBackground from "@/components/BlockchainBackground";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <BlockchainBackground />
      <div className="relative" style={{ zIndex: 1 }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SponsorsSection />
      <OrganizersSection />
      <FaqSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
