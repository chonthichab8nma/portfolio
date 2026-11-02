
import {
  Mail,
  Phone,
  Download,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const contacts = [
  {
    label: "EMAIL",
    value: "chonthichab8nma@gmail.com",
    href: "mailto:chonthichab8nma@gmail.com",
    icon: Mail,
  },
  {
    label: "PHONE",
    value: "+66 96 672 2654",
    href: "tel:+0966722654",
    icon: Phone,
  },
  {
    label: "GITHUB",
    value: "github.com/chonthichab8nma",
    href: "https://github.com/chonthichab8nma",
    icon: GitBranch,
    external: true,
  },
  {
    label: "RESUME",
    value: "Download my resume (PDF)",
    href: resumeUrl,
    icon: Download,
    download: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="mb-2 text-xs tracking-[0.25em] text-white sm:mb-3 sm:text-sm sm:tracking-[0.3em]">04</p>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-pumpkin sm:text-sm sm:tracking-[0.3em]">
            CONTACT
          </p>

          <h2 className="break-words text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Get in <span className="text-cyan-400">Touch.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Feel free to contact me for job opportunities or inquiries.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mx-auto w-full max-w-3xl space-y-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                download={
                  contact.download
                    ? "Chonthicha_Boonma_Resume.pdf"
                    : undefined
                }
                target={contact.external ? "_blank" : undefined}
                rel={
                  contact.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex min-h-16 items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] sm:rounded-2xl sm:p-5"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400 transition-colors group-hover:border-cyan-400/30 sm:h-11 sm:w-11">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] tracking-[0.2em] text-gray-500">
                      {contact.label}
                    </p>

                    <p className="break-words text-xs text-gray-200 sm:text-sm">
                      {contact.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={17}
                  className="ml-3 shrink-0 text-gray-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
