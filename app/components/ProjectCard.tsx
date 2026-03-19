import { Github, ExternalLink } from "lucide-react";
import type { IconType } from "react-icons";

type ProjectSkill = {
  name: string;
  icon?: IconType;
};

type ProjectCardProps = {
  title: string;
  description: string;
  skills?: ProjectSkill[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  skills = [],
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="group card card-hover project-card">
      <div className="card-glow card-glow-hover" />

      <div className="card-content">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-sm text-gray-400 mb-4">
          {description}
        </p>

        {skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-lg border border-teal-900/40 bg-teal-950/50 px-3 py-1 text-xs text-gray-300"
              >
                {Icon && <Icon size={14} />}
                {name}
              </div>
            ))}
          </div>
        )}

        {(github || demo) && (
          <div className="flex gap-4 text-gray-400">
            {github && (
              <a href={github} target="_blank">
                <Github size={18} />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}