import SectionHeader from "../navigation-ui/SectionHeader";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "../../utils/projectsContent";
import type { ExperienceDTO } from "../../utils/projectsContent";
import ProjectModal from "../navigation-ui/ProjectModal";
import { ArrowUpRight, Cpu, Tag, Sparkles, BookOpen } from "lucide-react";

const projects = experienceData;

gsap.registerPlugin(ScrollTrigger);

export function Works() {
  const myWorksSection = useRef(null);
  const works = useRef(null);
  const [selectedProject, setSelectedProject] = useState<ExperienceDTO | null>(
    null,
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(works.current, {
          yPercent: projects.length * -11,
          scrollTrigger: {
            trigger: myWorksSection.current,
            pin: true,
            scrub: 1,
            start: "top 15%",
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        // No GSAP scroll trigger pinning on mobile
      });

      return () => mm.revert();
    },
    { scope: myWorksSection },
  );

  return (
    <section
      ref={myWorksSection}
      id="my-works"
      className="grid grid-cols-1 lg:grid-cols-3 lg:h-screen lg:overflow-hidden"
    >
      <div className="lg:col-span-1 grid place-content-center lg:max-h-screen">
        <SectionHeader
          title="My Works"
          header="Portfolio of Projects"
          isCentered={false}
        />
      </div>
      <div
        ref={works}
        className="lg:col-span-2 flex flex-col items-center lg:grid lg:place-content-center gap-12 lg:gap-28 pb-20 pt-32 lg:h-auto overflow-y-auto lg:overflow-visible"
      >
        {projects.map((project) => {
          const hasImage = !!project.image;

          if (hasImage) {
            return (
              <div
                key={project.id}
                className="glass-card lg:min-h-[70vh] h-fit w-90 md:w-4xl cursor-pointer group hover:border-accent-color/30 transition-all duration-500 flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="bg-gray-400/5 h-100 rounded-t-xl overflow-hidden relative flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover size-full group-hover:scale-105 duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-all duration-500" />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-2xl font-semibold text-secondary-text-color! group-hover:text-accent-color transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-400">{project.duration} • {project.role}</p>
                    <p className="text-primary-text-color line-clamp-3 mt-2">{project.about}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 text-sm text-slate-200">
                    {project.tools.slice(0, 4).map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 bg-accent-color/7 text-accent-color rounded-2xl px-4 py-1"
                      >
                        <p>{tech}</p>
                      </div>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="text-xs text-slate-400 flex items-center px-2">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 group-hover:text-accent-color transition-colors mt-4 flex items-center gap-1">
                    Click to view details <ArrowUpRight size={14} />
                  </p>
                </div>
              </div>
            );
          } else {
            // Text-focused layout for projects without images
            return (
              <div
                key={project.id}
                className="glass-card h-fit w-90 md:w-4xl cursor-pointer group hover:border-accent-color/30 transition-all duration-500 flex flex-col relative overflow-hidden p-8"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual glow backdrop decoration */}
                <div className="absolute -right-20 -top-20 size-60 bg-accent-color/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-color/10 transition-all duration-500" />
                <div className="absolute -left-20 -bottom-20 size-60 bg-teal-400/5 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-400/10 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  {/* Category / Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent-color font-semibold flex items-center gap-1.5">
                      <Sparkles size={12} /> Text-focused Spotlight
                    </span>
                    <BookOpen size={20} className="text-slate-500 group-hover:text-accent-color transition-colors duration-300" />
                  </div>

                  {/* Title & Metadata */}
                  <div>
                    <h3 className="text-3xl font-bold text-secondary-text-color! group-hover:text-accent-color transition-colors duration-300 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium">
                      {project.role} • {project.duration}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base leading-relaxed font-light">
                    {project.about}
                  </p>

                  {/* Pride Quote / Highlight */}
                  {project.developerPride && (
                    <div className="p-5 rounded-xl bg-teal-500/5 border border-teal-500/10 group-hover:border-teal-500/20 transition-colors duration-300">
                      <span className="text-[10px] uppercase tracking-wider text-teal-400 font-bold block mb-1 flex items-center gap-1">
                        <Cpu size={12} /> Developer Pride
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed italic">
                        "{project.developerPride}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 relative z-10">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-3 flex items-center gap-1.5">
                    <Tag size={12} /> Key Tools & Technologies
                  </span>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-200">
                    {project.tools.slice(0, 6).map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 bg-slate-900 rounded-md px-3 py-1 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        <p>{tech}</p>
                      </div>
                    ))}
                    {project.tools.length > 6 && (
                      <span className="text-xs text-slate-400 flex items-center px-2">
                        +{project.tools.length - 6} more
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 group-hover:text-accent-color transition-colors mt-6 flex items-center gap-1">
                    Click to view full case study <ArrowUpRight size={14} />
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
