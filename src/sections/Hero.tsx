import BorderGlow from "@/components/ui/BorderGlow.jsx";
import GradientText from "../components/ui/GradientText.jsx";
import BoonmaEyes from "@/components/ui/Eyes.js";


export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28"
    >
      <div className="hero-light" aria-hidden="true">
        <span className="hero-light__beam" />
        <span className="hero-light__glow" />
      </div>

      <div className="hero-content mx-auto w-full max-w-6xl">
        <p className="mb-4 text-[10px] tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 className="min-w-0 font-hero text-[clamp(2.65rem,13vw,4.5rem)] font-semibold leading-[1.05]">
          <div className="mt-2">
            <GradientText
              colors={["#f76b0e", "#CC5500", "#22D3EE", "#783200"]}
              animationSpeed={8}
              showBorder={false}
            >
              Chonthicha
            </GradientText>
          </div>

          <div className="ml-[7vw] sm:ml-8 md:ml-30">
            <GradientText
              colors={["#f76b0e", "#CC5500", "#40E0D0", "#783200"]}
              animationSpeed={8}
              showBorder={false}
            >
              <BoonmaEyes />
            </GradientText>
          </div>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7 lg:text-lg lg:leading-relaxed">
          Creative mind. Developer mindset. Bringing ideas to life through code.
          I enjoy crafting modern web applications that blend clean design,
          smooth interactions, and practical functionality.
        </p>

        <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-3 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:gap-4">
          <BorderGlow
            className="hero-button-glow w-full self-start sm:w-auto"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#40E0D0", "#22D3EE", "#138B89"]}
          >
            <a
              href="#projects"
              className="flex min-h-11 w-full items-center justify-center gap-1 rounded-full bg-cyan-400 px-7 py-3 font-medium text-slate-950 transition-colors hover:bg-cyan-400/90 sm:w-auto"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>
          </BorderGlow>

          <a
            href="#contact"
            className="flex min-h-11 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-tawny transition-colors hover:bg-white/10"
          >
            Contact Me
          </a>
          <a
            className="flex min-h-11 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-tawny transition-colors hover:bg-white/10"
          >
            resume
          </a>
        </div>
      </div>
    </section>
  );
}
