import BorderGlow from "@/components/ui/BorderGlow.jsx";
import GradientText from "../components/ui/GradientText.jsx";
import BoonmaEyes from "@/components/ui/Eyes.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm tracking-[0.3em] text-verdigris">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 className="font-hero text-5xl font-semibold leading-tight md:text-7xl">
          <div className="mt-2">
            <GradientText
              colors={["#f76b0e", "#CC5500", "#4ABFB9", "#783200"]}
              animationSpeed={8}
              showBorder={false}
            >
              Chonthicha
            </GradientText>
          </div>

          <div className="ml-8 md:ml-30">
            <GradientText
              colors={["#f76b0e", "#CC5500", "#4ABFB9", "#783200"]}
              animationSpeed={8}
              showBorder={false}
            >
              <BoonmaEyes />
            </GradientText>
          </div>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Creative mind. Developer mindset. Bringing ideas to life through code.
          I enjoy crafting modern web applications that blend clean design,
          smooth interactions, and practical functionality.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <BorderGlow
            className="hero-button-glow self-start"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <a
              href="#projects"
              className="block rounded-full bg-verdigris px-7 py-3 font-medium text-slate-950 transition-colors hover:bg-verdigris/90 "
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>
          </BorderGlow>

          <a
            href="#contact"
            className="block rounded-full border border-white/20 px-7 py-3 text-tawny transition-colors hover:bg-white/10"
          >
            Contact Me
          </a>
          <a
            className="block rounded-full border border-white/20 px-7 py-3 text-tawny transition-colors hover:bg-white/10"
          >
            resume
          </a>
        </div>
      </div>
    </section>
  );
}
