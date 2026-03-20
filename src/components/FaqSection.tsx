import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Trophy, CalendarCheck, Shirt, MapPin, Clock, IndianRupee } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
  icon: React.ReactNode;
  accentColor: string;
};

const faqs: FaqItem[] = [
  {
    question: "Who can participate in the event?",
    answer: "Anyone who is in 1st to 3rd year of their undergraduate studies in any discipline can participate. We welcome students from all backgrounds and skill levels!",
    icon: <Users className="h-5 w-5" />,
    accentColor: "text-squidPink",
  },
  {
    question: "What are the prizes for winners?",
    answer: "Top performers will receive cash prizes and certificates. The total prize pool is ₹30,000.",
    icon: <Trophy className="h-5 w-5" />,
    accentColor: "text-championGold",
  },
  {
    question: "What is the team size?",
    answer: "Teams must have exactly 2 members. Solo registrations are not allowed.",
    icon: <Users className="h-5 w-5" />,
    accentColor: "text-squidPink",
  },
  {
    question: "What is the registration fee?",
    answer: "The registration fee is ₹100 per team.",
    icon: <IndianRupee className="h-5 w-5" />,
    accentColor: "text-squidGreen",
  },
  {
    question: "What's the last date to register?",
    answer: "Online registration closes on 20th March 2026. There is no on-site registration, so make sure to register before the deadline.",
    icon: <Clock className="h-5 w-5" />,
    accentColor: "text-squidPink",
  },
  {
    question: "Is there any dress code for the events?",
    answer: "There's no strict dress code, but we recommend comfortable attire for the hackathon sessions.",
    icon: <Shirt className="h-5 w-5" />,
    accentColor: "text-squidGreen",
  },
  {
    question: "Where will the event be conducted?",
    answer: "All events will be held at the Reva University campus, Bangalore. Detailed venue information will be shared with registered participants.",
    icon: <MapPin className="h-5 w-5" />,
    accentColor: "text-squidGreen",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-darkAccent relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-squidGreen/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-squidPink/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 font-squid bg-white/5 rounded-full border border-white/10 text-squidPink text-sm tracking-widest">
            GOT QUESTIONS?
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-squid font-bold mb-4 text-white">
            Frequently Asked <span className="text-squidGreen">Questions</span>
          </h2>

          <p className="text-base text-white/60 max-w-xl mx-auto">
            Everything you need to know about HackSprint.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 group transition-colors duration-200">
                  <div className="flex items-center text-left gap-4">
                    <span className={`shrink-0 ${faq.accentColor}`}>
                      {faq.icon}
                    </span>
                    <span className="text-white/85 group-hover:text-white text-sm md:text-base transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-white/70">
                  <div className="pl-9 text-sm leading-relaxed border-l-2 border-white/5 ml-0.5">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
