export default function About() {
  return (
    <section id="about" className="flex min-h-[80vh] items-center px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div
          aria-hidden="true"
          className="aspect-[4/5] w-full max-w-md justify-self-center rounded-3xl border border-cosmic-border bg-surface/40 shadow-[0_0_60px_rgba(74,191,185,0.08)]"
        />

        <div>
          <p className="mb-3 text-sm tracking-[0.3em] text-white">01</p>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-pumpkin">
            GET TO KNOW ME
          </p>
          <h2 className="text-4xl font-bold text-alabaster md:text-5xl">
            About Me
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-400">
            <p>
              Hi, I&apos;m Chonthicha Boonma, a web developer interested in both
              frontend and full-stack development, with a particular love for UI
              design.
            </p>
            <p>
              I enjoy experimenting with colors, layouts, and different design
              styles, turning creative ideas into functional websites. What I
              love about web development is the balance between creativity and
              problem-solving, from crafting user interfaces to building the
              backend systems that bring everything together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
