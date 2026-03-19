import type { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon: IconType;
};

export default function SkillCard({ name, icon: Icon }: SkillItem) {
  return (
    <div className="group card card-hover skill-card">
      <div className="card-glow card-glow-hover" />

      <div className="card-content flex flex-col items-center">
        <Icon size={45} className="mb-2 opacity-90" />
        <p className="text-xs text-center">{name}</p>
      </div>
    </div>
  );
}