
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import GlassSurface from "@/components/ui/GlassSurface.jsx";
import Plasma from "@/components/ui/Plasma.jsx";

import {
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiLine,
  SiNeon,
  SiNodedotjs,
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
  { name: "Figma", category: "Tools", icon: SiFigma, color: "#f24e1e" },
  { name: "Vercel", category: "Tools", icon: SiVercel, color: "#e4e6da" },
  { name: "Render", category: "Tools", icon: SiRender, color: "#46e3b7" },
  { name: "Neon", category: "Tools", icon: SiNeon, color: "#00e599" },
  { name: "LINE LIFF", category: "Integration", icon: SiLine, color: "#06c755" },
  { name: "LINE Messaging API", category: "Integration", icon: SiLine, color: "#06c755" },
  { name: "Cloudflare R2", category: "Integration", icon: SiCloudflare, color: "#f38020" },
];

const CARD_WIDTH = 96;
const CARD_HEIGHT = 116;

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section px-6 py-24 md:py-32"
    >
      {/* Background */}
      <div className="skills-plasma" aria-hidden="true">
        <Plasma
          color="#40e0d0"
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
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm tracking-[0.3em] text-white">
            02
          </p>

          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-pumpkin">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl font-bold text-alabaster md:text-5xl">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Tech Stack Cards */}
        <div
          className="skills-grid"
          role="list"
          aria-label="Technology skills"
        >
          {skills.map(({ name, icon: Icon, color }, index) => (
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
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                borderRadius={14}
                className="stardust-navbar skill-card"
              >
                <div className="skill-card-content">
                  <span
                    className="skill-card-glow"
                    aria-hidden="true"
                  />

                  <Icon
                    className="skill-icon"
                    aria-hidden="true"
                  />

                  <span className="skill-label">
                    <span className="skill-name">
                      {name}
                    </span>
                  </span>
                </div>
              </GlassSurface>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
