export default function About() {
  return (
    <section
      id="about"
      className="about-section flex min-h-[80vh] items-center overflow-x-clip px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div className="about-profile mt-0 translate-y-8 aspect-[4/5] w-full max-w-[18rem] justify-self-center self-start overflow-hidden rounded-2xl border border-verdigris/25 shadow-[0_0_60px_rgba(64,224,208,0.12)] sm:max-w-sm sm:rounded-3xl md:max-w-md">
          <img
            src="/profile.png"
            alt="Chonthicha Boonma"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="mb-2 text-xs tracking-[0.25em] text-white sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            01
          </p>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-pumpkin sm:text-sm sm:tracking-[0.3em]">
            GET TO KNOW ME
          </p>
          <h2 className="break-words text-3xl font-bold text-alabaster sm:text-4xl md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-6 text-slate-400 sm:mt-8 sm:space-y-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-relaxed">
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
