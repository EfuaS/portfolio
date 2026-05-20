import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight, Award, ShieldAlert, Cpu, Users, Tag } from "lucide-react";
import type { ExperienceDTO } from "../../utils/projectsContent";

type ProjectModalProps = {
  isOpen: boolean;
  project: ExperienceDTO | null;
  onClose: () => void;
};

export default function ProjectModal({
  isOpen,
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div
        className="relative max-w-3xl w-full bg-slate-900/90 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[85vh] backdrop-blur-xl text-slate-100 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-${project.id}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent-color"
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2
            id={`project-modal-${project.id}`}
            className="text-3xl font-bold tracking-tight text-secondary-text-color! mb-1"
          >
            {project.name}
          </h2>
          <p className="text-sm text-accent-color font-medium">
            {project.role}
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-4 bg-white/5 border border-white/5 rounded-xl">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Duration</span>
            <span className="text-sm font-semibold text-slate-200">{project.duration}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Team Size</span>
            <span className="text-sm font-semibold text-slate-200 flex items-center gap-1">
              <Users size={14} className="text-teal-400" />
              {project.teamSize} {Number(project.teamSize) === 1 ? "developer" : "developers"}
            </span>
          </div>
          {project.link && (
            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Website</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent-color hover:underline inline-flex items-center gap-1 break-all"
              >
                Visit Site <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Project About */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-slate-200 mb-2 flex items-center gap-2">
            <Cpu size={16} className="text-teal-400" /> About Project
          </h3>
          <p className="text-sm leading-relaxed text-slate-300">{project.about}</p>
        </div>

        {/* Project Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {project.challengeFaced && (
            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
              <h4 className="text-sm font-semibold text-orange-400 mb-1 flex items-center gap-2">
                <ShieldAlert size={15} /> Key Challenge
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">{project.challengeFaced}</p>
            </div>
          )}

          {project.developerPride && (
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <h4 className="text-sm font-semibold text-emerald-400 mb-1 flex items-center gap-2">
                <Award size={15} /> Developer Pride
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">{project.developerPride}</p>
            </div>
          )}
        </div>

        {project.businessImpact && (
          <div className="mb-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
            <h3 className="text-sm font-semibold text-indigo-400 mb-1">Business Impact</h3>
            <p className="text-xs leading-relaxed text-slate-300">{project.businessImpact}</p>
          </div>
        )}

        {/* Tech Stack / Tools */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Tag size={12} /> Tech Stack & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-accent-color/10 text-accent-color border border-accent-color/10 rounded-full px-3 py-1 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
