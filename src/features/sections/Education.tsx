import {
  ArrowUpRight,
  Award,
  GraduationCap,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import SectionHeader from "../navigation-ui/SectionHeader";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

const timeline = [
  {
    title: "BSc Management Information Systems",
    institution: "Ashesi University",
    duration: "2018 - 2022",
    description: `Studied software development, business analytics, and project management. Built a full stack ecommerce site for my Aunt's small Fabrics shop using PHP, Apache, and MySQL for the backend and HTML, CSS, and JavaScript for the frontend.`,
    link: "https://github.com/EfuaS/neighbourcare",
    icon: GraduationCap,
    tone: "from-teal-400 via-cyan-400 to-blue-500",
    noteTilt: "-rotate-[1deg]",
    category: "Academic Roots",
  },
  {
    title: "National Service - Junior Software Developer",
    institution: "Accede Ghana",
    duration: "(2022 - 2023)",
    description: `Completed my one year national service as a Junior Software Developer, contributing to projects in FinTech, Community Outreach, and Real Estate, gaining hands-on coding and teamwork experience.`,
    link: null,
    icon: Workflow,
    tone: "from-emerald-400 via-teal-300 to-cyan-400",
    noteTilt: "rotate-[1deg]",
    category: "Service Year",
  },
  {
    title: "Meta Certified Frontend Developer",
    institution: "Meta",
    duration: "2023",
    description: `Certified in modern frontend practice: HTML, CSS, JavaScript, and React. Proof that I keep pace with the craft as it evolves.`,
    link: "https://coursera.org/share/86ef3b4defd4235ad55a1aeac97b9478",
    icon: Award,
    tone: "from-amber-500 via-orange-300 to-pink-500",
    noteTilt: "-rotate-[2deg]",
    category: "Certification",
  },
  {
    title: "Frontend Software Engineer",
    institution: "Accede Ghana",
    duration: "(2019 - Present)",
    description: `Helping to deliver high-quality software solutions to clients across various industries. I have also contributed to company growth by training and mentoring interns
    and other National Service Personnel.`,
    link: null,
    icon: Sparkles,
    tone: "from-fuchsia-300 via-purple-300 to-indigo-300",
    noteTilt: "rotate-[2deg]",
    category: "Day Job",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    institution: "Microsoft",
    duration: "April 2026",
    description: `I achieved my Microsoft Azure Developer certification to enhance my cloud computing and Azure skills for consulting and solution delivery from development to deployment.`,
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/LawrenciaCobbina-0769/112CE798D492E070?sharingId=F21A506CC64DCEE8",
    icon: Award,
    tone: "from-sky-300 via-teal-200 to-lime-300",
    noteTilt: "-rotate-[1deg]",
    category: "Certification",
  },
  {
    title: "In-Progress - Node.js Backend Developer",
    institution: "Learning with Gemini",
    duration: "Current",
    description: `With my trusted sidekick, Gemini, I am studying Express.js towards my goal of a fullstack developer. Ofcourse, I verify what i learn with guidance from my fellow backend engineers.`,
    link: null,
    icon: Rocket,
    tone: "from-sky-300 via-teal-200 to-lime-300",
    noteTilt: "-rotate-[1deg]",
    category: "Next-Up",
  },
];

gsap.registerPlugin(ScrollTrigger, Draggable);

export function Education() {
  const milestonesContainer = useRef(null);
  const myJourneySection = useRef(null); // The thing that actually moves

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 768px)", () => {
        gsap.to(milestonesContainer.current, {
          // target the milestones cards div
          xPercent: -3 * timeline.length, // translate the section to about 2 times the width of the cards to show all cards.
          scrollTrigger: {
            trigger: myJourneySection.current, // trigger the translation when myJourneySection comes into view.
            start: "top 20%", //to properly center the milestone cards.
            pin: true, // needed to stick the content while the animation plays
            scrub: 1,
          },
        });

      });
      // Apply draggable plugin in mobil views
      matchMedia.add("(max-width: 768px)", () => {
        Draggable.create(milestonesContainer.current, {
          type: "x",
          // bounds: myJourneySection.current,
        });
      });

      return () => matchMedia.revert();
    },
    { scope: myJourneySection },
  );

  return (
    <section
      id="my-journey"
      ref={myJourneySection}
      className="w-full mx-auto overflow-hidden"
    >
      <SectionHeader header="My Journey" title="Education & Experience" />

      {/* Timeline of Developer Journey Milestones */}
      <div
        ref={milestonesContainer}
        className="flex gap-6 md:gap-8 min-w-full pl-10"
      >
        {timeline.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="milestone"
              data-aos="zoom-in"
              data-aos-delay={index * 250}
            >
              <div className="flex flex-col items-start gap-4 ">
                <div className="relative">
                  {/* Timeline circular steps pinned with icons */}
                  <div className="size-12 rounded-full bg-linear-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-400/40">
                    <Icon className="text-slate-900" size={22} />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 h-6 w-px bg-linear-to-b from-teal-300/60 via-cyan-200/80 to-transparent" />
                </div>

                {/* Timeline note cards */}
                <div
                  className={`relative bg-slate-950/85 ${item.noteTilt} rounded-lg px-4 py-4 shadow-2xl shadow-teal-500/25 border border-white/5 min-w-72 max-w-sm overflow-hidden breeze-card hover-jiggle`}
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <div
                    className={`absolute inset-0 opacity-65 bg-linear-to-br ${item.tone}`}
                  />
                  {/* Dark overlay on card bright colors to enhance readability */}
                  <div className="absolute inset-0 bg-slate-950/70" />
                  <div className="absolute top-1 left-4 h-8 w-6 bg-white/5 rotate-6 blur-[2px]" />
                  {/* Note card content */}
                  <div className="relative flex flex-col gap-4 mt-4">
                    <header className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-200/70">
                          {item.category}
                        </p>
                        <div className="space-y-1">
                          <h3 className="text-base font-semibold leading-snug text-secondary-text-color!">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-100/80">
                            {item.institution} - {item.duration}
                          </p>
                        </div>
                      </div>
                    </header>

                    <div className="h-px w-full bg-linear-to-r from-white/50 via-white/10 to-transparent" />

                    <p className="text-sm leading-relaxed text-slate-100/90">
                      {item.description}
                    </p>

                    <footer>
                      {/* Note bottom Action Link */}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-accent-color mt-3"
                        >
                          Check it out
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </footer>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
