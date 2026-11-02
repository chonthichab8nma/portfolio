
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import GlassSurface from "@/components/ui/GlassSurface.jsx";
import Plasma from "@/components/ui/Plasma.jsx";

import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNeon,
  SiNodedotjs,
  SiPostman,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Skill = {
  name: string;
  category: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML", category: "Frontend", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", category: "Frontend", icon: SiCss, color: "#1572b6" },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#f7df1e",
  },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express.js", category: "Backend", icon: SiExpress, color: "#e4e6da" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169e1" },
  { name: "Prisma ORM", category: "Database", icon: SiPrisma, color: "#9aa7b8" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#f05032" },
  { name: "GitHub", category: "Tools", icon: SiGithub, color: "#e4e6da" },
  { name: "Docker", category: "Tools", icon: SiDocker, color: "#2496ed" },
  { name: "Postman", category: "Tools", icon: SiPostman, color: "#ff6c37" },
  { name: "Figma", category: "Tools", icon: SiFigma, color: "#f24e1e" },
  { name: "Vercel", category: "Tools", icon: SiVercel, color: "#e4e6da" },
  { name: "Render", category: "Tools", icon: SiRender, color: "#46e3b7" },
  { name: "Neon", category: "Tools", icon: SiNeon, color: "#00e599" },
];

const skillRows = [skills.slice(0, 8), skills.slice(8, 14), skills.slice(14)];

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="skills-plasma" aria-hidden="true">
        <Plasma
          color="#22D3EE"
          speed={0.45}
          scale={1.15}
          opacity={0.58}
          mouseInteractive
          renderScale={0.65}
          targetFps={45}
        />
      </div>

      <div
        className="skills-orb skills-orb-one"
        aria-hidden="true"
      />
      <div
        className="skills-orb skills-orb-two"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="mb-2 text-xs tracking-[0.25em] text-white sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            02
          </p>

          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-pumpkin sm:text-sm sm:tracking-[0.3em]">
            WHAT I WORK WITH
          </p>

          <h2 className="break-words text-3xl font-bold leading-tight text-alabaster sm:text-4xl md:text-5xl">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Tech Stack Cards */}
        <div
          className="skills-grid"
          role="list"
          aria-label="Technology skills"
        >
          {skillRows.map((row, rowIndex) => (
            <div className="skills-row" key={rowIndex}>
              {row.map(({ name, icon: Icon, color }, itemIndex) => {
                const index = skillRows
                  .slice(0, rowIndex)
                  .reduce((total, currentRow) => total + currentRow.length, 0) + itemIndex;

                return (
                  <article
                    key={name}
                    role="listitem"
                    className="skill-card-shell"
                    style={
                      {
                        "--icon-color": color,
                        "--delay": `${index * 35}ms`,
                      } as CSSProperties
                    }
                  >
                    <GlassSurface
                      fluid
                      borderRadius={14}
                      className="stardust-navbar skill-card"
                    >
                      <div className="skill-card-content">
                        <span className="skill-card-glow" aria-hidden="true" />
                        <Icon className="skill-icon" aria-hidden="true" />
                        <span className="skill-label">
                          <span className="skill-name">{name}</span>
                        </span>
                      </div>
                    </GlassSurface>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
