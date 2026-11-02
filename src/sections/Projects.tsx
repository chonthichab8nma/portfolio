import BorderGlow from "@/components/ui/BorderGlow";
import { useEffect, useState } from "react";
const projects = [
  {
    title: "SP auto service",
    category: "Frontend Developer",
    duration: "4 Months",
    featuredProject: {
      title: "SP auto service",
      overview:
        "A web application developed to digitize vehicle repair workflows, enabling staff to manage customer and vehicle information, track repair progress, and upload photos at each stage of the process.",
      // role: "Frontend Developer",
      contributions: [
        "Developed frontend interfaces based on UX/UI designs",
        "Integrated APIs to connect with backend services",
        "Implemented interactive features according to project requirements.",
      ],
      tech: ["React", "TypeScript", "tailwind CSS"],
    },
    highlights: [
      "Assisted with other website development tasks",
      "Collaborated on client landing pages",
      "Created company content",
      "Performed manual testing on vending machines",
    ],
    achievements: [
      {
        title: "Internship Certificate",
        subtitle: "Certificate of Internship",
        image: "/certificate.jpg",
      },
      {
        title: "3rd Place Award",
        subtitle: "Cooperative Education Award",
        image: "/achievement.jpg",
      },
    ],
  },
  {
    title: "LANDING PAGE",
    category: "COLLABORATIVE PROJECT",
    description:
      "A scented candle landing page developed collaboratively to practice Git workflows and team collaboration.",
    tech: ["REACT", "TAILWIND CSS", "GIT", "GITHUB"],
    image: "/lumosia.webp",
    liveUrl: "https://lomusia.vercel.app",
    githubUrl: "https://github.com/chonthichab8nma/lomusia",
  },
  {
    title: "PUMA E-COMMERCE",
    category: "E-COMMERCE DEVELOPMENT",
    description:
      "A React-based shoe store website featuring product browsing, page navigation, and shopping cart management.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    image: "/puma.png",
    liveUrl: "https://simple-react-jet.vercel.app",
    githubUrl: "https://github.com/chonthichab8nma/Simple-React",
  },
  {
    title: "Pokémon API",
    category: "API INTEGRATION",
    description:
      "A Pokémon web app that fetches and displays Pokémon data using an external API.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Axios"],
    image: "/pokemon.png",
    liveUrl: "https://pokemon-yiod.vercel.app/pokemon",
    githubUrl: "https://github.com/chonthichab8nma/pokemon",
  },
];

const thesis = {
  title: "Development of a Community Waste Management",
  category: "Full Stack Development",
  description:
    "A waste collection fee management system developed for a local government organization, covering the entire process from service requests submitted via LINE, officer review and approval, fee assessment, payment processing, and receipt issuance to daily revenue reporting. The system features role-based access control and a centralized shared database.",
  techStack: {
    core: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
    ],

    integrations: [
      "LINE LIFF",
      "LINE Login",
      "LINE Messaging API",
      "LINE Webhook",
      "Thunder Solution API",
    ],

    infrastructure: ["Cloudflare R2", "Docker"],
  },
  images: [
    "/citizen-request-status-page.webp",
    "/citizen-home-page.webp",
    "/citizen-service-request-page.webp",
  ],
  staffPortalImages: [
    "/staff-portal-payment-dashboard.png",
    "/staff-portal-request-detail.png",
    "/staff-portal-request-list.png",
    "/staff-portal-receipt-issuance.png",
  ],
};

export default function Projects() {
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!previewImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [previewImage]);

  return (
    <section
      id="projects"
      className="overflow-x-clip px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="mb-2 text-xs tracking-[0.25em] text-white sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            03
          </p>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-pumpkin sm:text-sm sm:tracking-[0.3em]">
            MY WORK
          </p>
          <h2 className="break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Projects & Experience
          </h2>
        </div>

        {/* Featured Thesis Project */}
        <BorderGlow
          animated={true}
          className="thesis-card relative mb-6 min-w-0 rounded-2xl p-4 sm:rounded-3xl sm:p-8 lg:p-10"
          borderRadius={24}
          glowRadius={35}
          glowIntensity={0.8}
          edgeSensitivity={30}
          coneSpread={25}
          backgroundColor="#080a0c"
          glowColor="180 70 60"
          colors={["#4ABFB9", "#38BDF8", "#F76B0E"]}
          fillOpacity={0}
        >
          <div className="relative z-10">
            {/* Main Layout */}
            <div className="grid min-w-0 grid-cols-1 gap-7 sm:gap-10">
              {/* Top: Project Information + Phone Mockups */}
              <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
                {/* LEFT: Project Information */}
                <div className="min-w-0 max-w-full">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/35 sm:text-[11px]">
                    01 Thesis
                  </p>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-cyan-400 sm:mb-3 sm:text-xs sm:tracking-widest">
                    {thesis.category}
                  </p>

                  <h3 className="max-w-full break-words text-[1.35rem] font-bold leading-[1.2] text-white sm:text-3xl md:text-4xl md:leading-tight">
                    {thesis.title}
                  </h3>

                  <p className="mt-3 max-w-full break-words text-xs leading-5 text-gray-400 sm:mt-5 sm:text-sm sm:leading-7">
                    {thesis.description}
                  </p>
                </div>

                {/* RIGHT: 3 Phone Mockups */}
                {/* <div className="grid min-w-0 grid-cols-3 items-end gap-0 px-1 sm:flex sm:items-center sm:justify-center sm:gap-1 sm:px-0 lg:gap-0"> */}
                <div className="mx-auto flex w-full max-w-[520px] min-w-0 items-center justify-center gap-0 sm:gap-1 lg:gap-1">
                  {thesis.images.map((image, index) => (
                    <div
                      key={image}
                      className={`min-w-0 flex-1 max-w-[220px] ${
                        index === 1
                          ? "z-10 scale-100 sm:scale-105 lg:scale-[1.12]"
                          : "scale-[0.92] translate-y-3 sm:translate-y-4 lg:scale-100"
                      } transition-transform duration-300`}
                      // className={`-mx-2 min-w-0 overflow-hidden sm:mx-0 sm:w-1/3 sm:max-w-[220px] sm:overflow-visible lg:-mx-4 lg:max-w-[260px] ${
                      //   index === 1
                      //     ? "z-10 scale-100 sm:scale-105 lg:translate-x-2 lg:scale-[1.18]"
                      //     : "scale-90 translate-y-3 sm:translate-y-4 lg:scale-105"
                      // } transition-transform duration-300`}
                    >
                      <img
                        src={image}
                        alt={`Mobile screen ${index + 1}`}
                        // className="block h-auto w-full object-contain sm:ml-[-20%] sm:w-[140%] sm:max-w-none lg:ml-[-27.5%] lg:w-[155%]"
                        className="block h-auto w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-white/10 pt-5 sm:pt-7">
                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-cyan-400 sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
                  Technologies
                </p>

                <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {[
                    {
                      label: "Core Technologies",
                      items: thesis.techStack.core,
                    },
                    {
                      label: "Integrations",
                      items: thesis.techStack.integrations,
                    },
                    {
                      label: "Infrastructure",
                      items: thesis.techStack.infrastructure,
                    },
                  ].map((group) => (
                    <div key={group.label} className="min-w-0">
                      <p className="mb-3 text-[11px] uppercase tracking-wider text-white/50">
                        {group.label}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[10px] leading-4 text-white/70 transition-colors hover:border-white/30 hover:text-white sm:px-2.5 sm:text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Mockups */}
              <div className="border-t border-white/10 pt-5 sm:pt-7">
                {/* <div className="staff-portal-gallery w-full overflow-hidden px-1 pb-3">
                  <div className="staff-portal-marquee flex w-max gap-4 sm:w-full"> */}
                <div className="staff-portal-gallery mx-auto w-full max-w-5xl overflow-hidden px-1 pb-3">
                  <div className="staff-portal-marquee flex w-max gap-2 sm:w-full sm:gap-3">
                    {[
                      ...thesis.staffPortalImages,
                      ...thesis.staffPortalImages,
                    ].map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className={`relative w-[48vw] max-w-[180px] flex-none sm:max-w-none sm:min-w-0 sm:w-auto sm:flex-1 ${
                          index >= thesis.staffPortalImages.length
                            ? "sm:hidden"
                            : ""
                        }`}
                      >
                        <div className="pointer-events-none absolute inset-x-[18%] bottom-0 h-1/4 rounded-full bg-orange-500/8 blur-2xl" />

                        <div className="relative rounded-[12px] border border-white/15 bg-gradient-to-br from-cyan-400/45 via-zinc-800 to-orange-400/50 p-[1px] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
                          <div className="rounded-[12px] bg-[#080a0c] p-[5px] sm:p-[6px]">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[7px] bg-white">
                              <img
                                src={image}
                                alt={`Staff portal desktop screen ${index + 1}`}
                                className="h-full w-full object-contain object-top"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="relative mx-auto h-2 w-[108%] -translate-x-[3.7%] rounded-b-[60%] bg-gradient-to-b from-zinc-500 to-zinc-900 shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                          <div className="mx-auto h-[3px] w-[18%] rounded-b-full bg-zinc-400/70" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Other Projects */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) =>
            project.title === "SP auto service" ? (
              <article
                key={project.title}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/40 md:col-span-3"
              >
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative grid min-w-0 gap-7 p-4 sm:gap-8 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:p-10">
                  {/* LEFT: Internship Information */}
                  <div className="min-w-0 flex flex-col justify-center">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/35 sm:text-[11px]">
                      02 INTERNSHIP EXPERIENCE
                    </p>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="break-words text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 break-words text-xs leading-5 text-white/50 sm:text-sm">
                      DEVSMITH 4289 CO., LTD. - {project.duration} Experience
                    </p>
                    <p className="mt-4 break-words text-xs leading-5 text-gray-400 sm:mt-5 sm:text-sm sm:leading-7">
                      {project.description}
                    </p>

                    {/* FEATURED PROJECT */}
                    {project.featuredProject && (
                      <div>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                          {project.featuredProject.overview}
                        </p>

                        <div className="mt-5 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                          {/* CONTRIBUTIONS */}
                          <div>
                            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                              Contributions
                            </p>

                            <ul className="space-y-2">
                              {project.featuredProject.contributions.map(
                                (item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-xs leading-5 text-gray-300"
                                  >
                                    <span className="text-cyan-400">✦</span>
                                    {item}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>

                          {/* OTHER RESPONSIBILITIES */}
                          <div>
                            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                              Other Responsibilities
                            </p>

                            <ul className="space-y-2">
                              {project.highlights?.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-xs leading-5 text-gray-400"
                                >
                                  <span className="text-cyan-400">✦</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                            Technologies
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.featuredProject.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT: Certificates & Awards */}
                  <div className="min-w-0 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-cyan-400">
                      Certificates & Achievements
                    </p>

                    <div className="grid grid-cols-1 gap-5 min-[390px]:grid-cols-2 sm:gap-5">
                      {project.achievements?.map((item) => (
                        <div
                          key={item.title}
                          className="group/certificate min-w-0"
                        >
                          <BorderGlow
                            animated={true}
                            className="overflow-hidden rounded-xl p-1.5 sm:p-2"
                            borderRadius={12}
                            glowRadius={28}
                            glowIntensity={1}
                            edgeSensitivity={24}
                            coneSpread={28}
                            backgroundColor="#111418"
                            glowColor="185 80 58"
                            colors={["#22D3EE", "#4ABFB9", "#F76B0E"]}
                            fillOpacity={0.22}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setPreviewImage({
                                  src: item.image,
                                  alt: item.title,
                                })
                              }
                              className="block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-lg bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                              aria-label={`View ${item.title}`}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className={`h-full w-full transition-transform duration-500 ${
                                  item.image === "/achievement.jpg"
                                    ? "scale-x-[1.12] object-contain group-hover/certificate:scale-x-[1.16]"
                                    : "object-contain group-hover/certificate:scale-105"
                                }`}
                              />
                            </button>
                          </BorderGlow>

                          <h4 className="mt-2 break-words text-xs font-semibold text-white sm:mt-3 sm:text-sm">
                            {item.title}
                          </h4>

                          <p className="mt-1 break-words text-[10px] leading-4 text-gray-500 sm:text-xs sm:leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] p-4">
                      <p className="text-xs uppercase tracking-wider text-cyan-400">
                        Achievement
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        3rd Place
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Contributed to a company project through frontend
                        development and API integration. The project was later
                        presented as a cooperative education project, earning
                        3rd place.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ) : null,
          )}

          <div className="grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-2 xl:grid-cols-3">
            {projects
              .filter((project) => project.title !== "SP auto service")
              .map((project) => (
                <article
                  key={project.title}
                  className="group h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
                >
                  {"image" in project && project.image && (
                    <div className="aspect-[16/9] overflow-hidden bg-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="min-w-0 p-4">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-cyan-400">
                      {project.category}
                    </p>
                    <h3 className="mb-2 break-words text-base font-semibold text-white sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mb-4 break-words text-xs leading-5 text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cyan-400 transition hover:text-cyan-300"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-400 transition hover:text-white"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={previewImage.alt}
          onClick={() => setPreviewImage(null)}
        >
          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-2xl text-white transition-colors hover:bg-white/15 sm:right-7 sm:top-7"
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="flex max-h-[90vh] max-w-5xl items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-[#080a0d] p-2 shadow-2xl sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className={`max-h-[86vh] max-w-full object-contain ${
                previewImage.src === "/achievement.jpg" ? "scale-x-[1.06]" : ""
              }`}
            />
          </div>
        </div>
      )}
    </section>
  );
}
