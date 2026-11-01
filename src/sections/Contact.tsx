
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
    href: "tel:+66966722654",
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
      className="relative overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm tracking-[0.3em] text-white">04</p>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-pumpkin">
            CONTACT
          </p>

          <h2 className="text-3xl font-semibold text-white md:text-5xl">
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
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400 transition-colors group-hover:border-cyan-400/30">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] tracking-[0.2em] text-gray-500">
                      {contact.label}
                    </p>

                    <p className="break-all text-sm text-gray-200">
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
