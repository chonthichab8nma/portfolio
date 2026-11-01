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
    title: "Landing Page",
    category: "Frontend Development",
    description: "1",
    tech: ["HTML"],
    image: "",
  },
  {
    title: "Full Stack Development",
    category: "Full Stack Development",
    description: "2",
    tech: ["HTML"],
    image: "",
  },
  {
    title: "Pokémon API",
    category: "Frontend Development",
    description: "3",
    tech: ["HTML"],
    image: "",
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
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>
          <h2 className="text-4xl font-bold text-white">Projects & Experience</h2>
        </div>

        {/* Featured Thesis Project */}
        <BorderGlow
          animated={true}
          className="relative mb-6 rounded-3xl p-5 sm:p-8 lg:p-10"
          borderRadius={24}
          glowRadius={35}
          glowIntensity={0.8}
          edgeSensitivity={30}
          coneSpread={25}
          backgroundColor="#080a0c"
          glowColor="180 70 60"
          colors={["#4ABFB9", "#38BDF8", "#F76B0E"]}
          fillOpacity={0.2}
        >
          {/* Decorative Shape */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10">
            {/* Main Layout */}
            <div className="grid gap-10">
              {/* Top: Project Information + Phone Mockups */}
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                {/* LEFT: Project Information */}
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/35 sm:text-[11px]">
                    01 Thesis
                  </p>
                  <p className="mb-3 text-xs uppercase tracking-widest text-cyan-400">
                    {thesis.category}
                  </p>

                  <h3 className="text-3xl font-bold text-white sm:text-4xl">
                    {thesis.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    {thesis.description}
                  </p>
                </div>

                {/* RIGHT: 3 Phone Mockups */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {thesis.images.map((image, index) => (
                    <div
                      key={image}
                      className={`w-1/3 max-w-[220px] overflow-hidden ${
                        index === 1
                          ? "-translate-y-2 sm:-translate-y-0"
                          : "translate-y-4 sm:translate-y-3"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Mobile screen ${index + 1}`}
                        className="ml-[-20%] w-[140%] max-w-none object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-white/10 pt-7">
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-cyan-400">
                  Technologies
                </p>

                <div className="grid gap-6 lg:grid-cols-3">
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
                            className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
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
              <div className="border-t border-white/10 pt-7">
                <div className="staff-portal-gallery w-full overflow-hidden px-1 pb-3">
                  <div className="staff-portal-marquee flex w-max gap-4 sm:w-full">
                    {[
                      ...thesis.staffPortalImages,
                      ...thesis.staffPortalImages,
                    ].map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className={`relative w-[62vw] flex-none sm:min-w-0 sm:w-auto sm:flex-1 ${
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
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/40 sm:col-span-2 lg:col-span-3"
              >
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:p-10">
                  {/* LEFT: Internship Information */}
                  <div className="flex flex-col justify-center">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/35 sm:text-[11px]">
                      02 INTERNSHIP EXPERIENCE
                    </p>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="text-3xl font-bold text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/50">
                      DEVSMITH 4289 CO., LTD. - {project.duration} Experience
                    </p>
                    <p className="mt-5 text-sm leading-7 text-gray-400">
                      {project.description}
                    </p>

                    {/* FEATURED PROJECT */}
                    {project.featuredProject && (
                      <div>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                          {project.featuredProject.overview}
                        </p>

                        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-cyan-400">
                      Certificates & Achievements
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                      {project.achievements?.map((item) => (
                        <div
                          key={item.title}
                          className="group/certificate min-w-0"
                        >
                          <BorderGlow
                            animated={true}
                            className="overflow-hidden rounded-xl p-2"
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

                          <h4 className="mt-3 text-sm font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs leading-relaxed text-gray-500">
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
            ) : (
              // การ์ดโปรเจกต์ทั่วไป ใช้โค้ดเดิมของคุณ
              <article
                key={project.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
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

                <div className="p-4">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-cyan-400">
                    {project.category}
                  </p>

                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-xs leading-5 text-gray-400">
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
                </div>
              </article>
            ),
          )}
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
