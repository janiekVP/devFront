import type { IconType } from "react-icons";
import SkillCard from "./SkillCard";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillGridProps = {
  skills: Skill[];
};

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-0">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  );
}