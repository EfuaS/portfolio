import {
  BookUser,
  Cake,
  CodeXml,
  GraduationCap,
  ListCheck,
  MapPin,
  Palette,
  PenTool,
  PlaneTakeoff,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import SectionHeader from "../navigation-ui/SectionHeader";

const coreStack = [
  {
    name: "React",
    icon: <CodeXml size={22} className="text-sky-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <Palette size={22} className="text-cyan-300" />,
  },
  {
    name: "TypeScript",
    icon: <ListCheck size={22} className="text-emerald-500" />,
  },
  {
    name: "Figma",
    icon: <PenTool size={22} className="text-pink-500" />,
  },
];

const aspirations = [
  {
    label: "Node.js Backend Developer",
    icon: <ShieldCheck size={20} className="text-amber-500" />,
  },
  {
    label: "Flutter Engineer",
    icon: <Smartphone size={20} className="text-sky-500" />,
  },
  {
    label: "Travel the world",
    icon: <PlaneTakeoff size={20} className="text-rose-400" />,
  },
  {
    label: "Frontend Consultant",
    icon: <GraduationCap size={20} className="text-lime-300" />,
  },
];
export function About() {
  return (
    <section id="my-story" className="px-6 max-w-7xl mx-auto">
      <SectionHeader header="My Story" title="About the Developer" />

      <div className="mt-10 grid gap-6 lg:grid-cols-4 lg:grid-rows-3 relative ">
        <CodeXml className="text-teal-900 size-52 md:size-100 animate-pulse absolute top-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none" />

        {/* Who am I card (2x2) */}
        <div
          className="glass-card lg:col-span-2 lg:row-span-2 flex gap-y-3 flex-col"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex gap-3 items-center">
            <BookUser
              className="text-teal-300 rounded-full bg-teal-300/10 p-2.5"
              size={40}
            />
            <h3 className="text-lg font-semibold tracking-wide">
              Who Am I?
            </h3>
          </div>

          <div className="flex-1 grid">
            <p className="mt-2 m-auto text-primary-text-color leading-relaxed ">
              I build thoughtful, high-performance interfaces where
              <span className="font-bold text-secondary-text-color/85">
                {" "}
                clean component architecture
              </span>{" "}
              meets pragmatic product design. Having
              <span className="font-bold text-secondary-text-color/85">
                {" "}
                shipped large-scale applications
              </span>{" "}
              with{" "}
              <span className="font-bold text-secondary-text-color/85">
                {" "}
                complex data requirements
              </span>{" "}
              , I prioritize tight feedback loops between design and engineering
              to ensure the final pixel serves the user's intent.
            </p>
            <p className="mt-6 m-auto text-primary-text-color leading-relaxed ">
              Currently, I am expanding my focus across to{" "}
              <span className="font-bold text-secondary-text-color/85">
                full stack{" "}
              </span>
              to better understand the end-to-end lifecycle of a product. My
              'North Star' is to{" "}
              <span className="font-bold text-secondary-text-color/85">
                lead engineering teams
              </span>{" "}
              in building cohesive, scalable systems where technical rigor and
              visual excellence are never mutually exclusive.
            </p>
          </div>
        </div>

        {/* Location card (2x1 under bio) */}
        <div
          className="glass-card lg:col-span-2 lg:row-span-1 lg:row-start-3 flex justify-between items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-primary-text-color text-sm leading-relaxed">
              Tema, Ghana (GMT +0000)
            </p>
            {/* open to remote work text in accent color with a circle in tailwindcss pulse animation */}
            <p className="flex items-center gap-2 text-sm text-accent-color animate-pulse">
              <span className="w-3 h-3 bg-accent-color rounded-full "></span>
              Open to remote work
            </p>
          </div>
          <MapPin className="text-teal-400 " size={30} />
        </div>

        {/* Metrics card (1x2) */}
        <div
          className="glass-card lg:col-span-1 lg:row-span-2 lg:col-start-3 flex flex-col justify-around items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <p className="text-4xl text-center font-bold text-emerald-300">
              4
            </p>
            <p className="text-sm text-slate-400 font-semibold">
              Years of experience
            </p>
          </div>
          <div>
            <p className="text-4xl text-center font-bold text-emerald-300">7</p>
            <p className="text-sm text-slate-400 font-semibold">
              Projects shipped
            </p>
          </div>
        </div>

        {/* Aspirations card (1x2) */}
        <div
          className="glass-card lg:col-span-1 lg:row-span-2 lg:col-start-4 divide-slate-400/50 divide-y space-y-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex gap-3 items-end pb-2">
            <Cake size={20} className="text-fuchsia-500" />
            <h3 className="text-sm font-semibold">Aspirations</h3>
          </div>
          {/* Unordered List of aspirations */}
          <div className="pt-2">
            {aspirations.map((aspiration) => (
              <div
                key={aspiration.label}
                className="flex items-center gap-2 mt-4"
              >
                {aspiration.icon}
                <p className="text-sm text-primary-text-color">
                  {aspiration.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core stack card (2x1 footer row) */}
        <div
          className="glass-card lg:col-span-2 lg:row-span-1 lg:col-start-3 lg:row-start-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-lg font-semibold">Core stack</h3>
          <div className="mt-4 flex flex-wrap gap-2 justify-around text-sm text-slate-200">
            {coreStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-gray-900 rounded-md px-3 py-1"
              >
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
