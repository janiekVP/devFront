import { Github, Linkedin, MapPin } from "lucide-react";
import { VscAzure } from "react-icons/vsc";
import {
  FaJava,
  FaLaravel,
  FaPython,
  FaRust,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
  SiSpringboot,
  SiPhp,
  SiRabbitmq,
  SiDotnet,
  SiGithubactions,
} from "react-icons/si";

import ProjectCard from "./components/ProjectCard";
import SkillGrid from "./components/SkillGrid";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">

      {/* HERO */}
      <section className="h-screen snap-start flex items-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-3">
            Hey, I'm Janiek
          </h1>

          <div className="flex items-center gap-2 text-sm mb-8">
            <MapPin size={16}/>
            Netherlands
          </div>

          <p className="text-lg mb-6">
            I build full-stack web applications,
            specializing in <b>Next.js</b> and <b>C#</b>.
          </p>

          <p className="max-w-xl mb-8">
            I develop clean, performant solutions that solve real business
            problems.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/janiekVP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/janiek-van-pelt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProjectCard
              title="TEST App"
              description="Display project information."
              skills={[
                { name: "Next.js", icon: SiNextdotjs },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "Docker", icon: FaDocker }
              ]}
              github="#"
              demo="#"
            />

            <ProjectCard 
              title="TEST App"
              description="Display project information."
              skills={[
                { name: "Next.js", icon: SiNextdotjs },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "Docker", icon: FaDocker }
              ]}
              github="#"
            />

            <ProjectCard
              title="TEST App"
              description="Display project information."
              skills={[
                { name: "Next.js", icon: SiNextdotjs },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "Docker", icon: FaDocker }
              ]}
              github="#"
              demo="#"
            />

            <ProjectCard
              title="TEST App"
              description="Display project information."
              skills={[
                { name: "Next.js", icon: SiNextdotjs },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "Docker", icon: FaDocker }
              ]}
              github="#"
              demo="#"
            />

            <ProjectCard 
              title="TEST App"
              description="Display project information."
              skills={[
                { name: "Next.js", icon: SiNextdotjs },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "Docker", icon: FaDocker }
              ]}
              github="#"
            />

            <ProjectCard
              title="TEST App"
              description="Display project information."
              skills={[
                { name: "Next.js", icon: SiNextdotjs },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "Docker", icon: FaDocker }
              ]}
              github="#"
              demo="#"
            />
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20">
        <div className="section-container">
          <h2 className="text-3xl font-semibold mb-12">Skills</h2>

          <div className="space-y-12">

            <div>
              <p className="section-label">Programming Languages</p>
              <SkillGrid skills={[
                { name: "C# / .NET", icon: SiDotnet },
                { name: "Java", icon: FaJava },
                { name: "Spring Boot", icon: SiSpringboot },
                { name: "Python", icon: FaPython },
                { name: "Rust", icon: FaRust },
                { name: "PHP", icon: SiPhp },
                { name: "Laravel", icon: FaLaravel },
              ]} />
            </div>

            <div>
              <p className="section-label">Web & Frontend</p>
              <SkillGrid skills={[
                { name: "HTML", icon: FaHtml5 },
                { name: "CSS", icon: FaCss3Alt },
                { name: "JavaScript", icon: FaJsSquare },
                { name: "TypeScript", icon: SiTypescript },
                { name: "ReactJS / NextJS", icon: FaReact },
              ]} />
            </div>

            <div>
              <p className="section-label">Database</p>
              <SkillGrid skills={[
                { name: "MySQL", icon: SiMysql },
                { name: "PostgreSQL", icon: SiPostgresql },
              ]} />
            </div>

            <div>
              <p className="section-label">DevOps</p>
              <SkillGrid skills={[
                { name: "Docker", icon: FaDocker },
                { name: "Kubernetes", icon: SiKubernetes },
                { name: "CI/CD", icon: SiGithubactions },
                { name: "Git", icon: FaGitAlt },
              ]} />
            </div>

            <div>
              <p className="section-label">Cloud</p>
              <SkillGrid skills={[
                { name: "Azure", icon: VscAzure }
              ]} />
            </div>

            <div>
              <p className="section-label">Messaging</p>
              <SkillGrid skills={[
                { name: "RabbitMQ", icon: SiRabbitmq }
              ]} />
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">About</h2>

          <p>
            Information about me.
          </p>
        </div>
      </section>


      {/* CONTACT */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p>Get in touch.</p>
        </div>
      </section>

    </main>
  );
}