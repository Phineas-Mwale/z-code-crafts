
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Lightbulb,
  Palette,
  FileText,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical starting points for websites, branding, digital products, and technology from Z Code Crafts.",
};

const resources = [
  {
    number: "01",
    category: "DIGITAL STRATEGY",
    title: "Start with the problem",
    description:
      "Before investing in a website or app, define the problem you're solving, who you're helping, and what success looks like.",
    icon: Lightbulb,
    points: [
      "Identify your target audience",
      "Define your main objective",
      "Decide what success means",
    ],
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Plan your website properly",
    description:
      "A useful website needs more than an attractive homepage. Think about the information visitors need and the actions you want them to take.",
    icon: Code2,
    points: [
      "Plan your essential pages",
      "Prepare clear content",
      "Make mobile usability a priority",
    ],
  },
  {
    number: "03",
    category: "BRAND IDENTITY",
    title: "Build a recognisable brand",
    description:
      "A logo is only one part of a brand. Consistent typography, colours, messaging, and presentation help people recognise your business.",
    icon: Palette,
    points: [
      "Choose a consistent visual style",
      "Keep your message clear",
      "Apply your identity consistently",
    ],
  },
  {
    number: "04",
    category: "PRODUCT DEVELOPMENT",
    title: "Build a smaller first version",
    description:
      "You don't need every feature on day one. Start with the core experience, test it, and use feedback to decide what to improve next.",
    icon: FileText,
    points: [
      "Prioritise essential features",
      "Test with real users",
      "Improve based on feedback",
    ],
  },
];

const principles = [
  "Understand the need before choosing the technology.",
  "Prioritise clarity and usability over unnecessary complexity.",
  "Keep learning, testing, and improving.",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-[#e6e7e0] bg-white">
        <div className="container py-12 sm:py-16">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#686b63] transition-colors hover:text-[#287747]"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back home
          </Link>

          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="eyebrow">Resources & insights</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Ideas to help you
                <span className="text-[#287747]"> build better.</span>
              </h1>
            </div>

            <p className="muted max-w-lg md:justify-self-end">
              Practical starting points for entrepreneurs, businesses, and
              creators exploring websites, branding, and digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12">
            <p className="eyebrow">Explore the library</p>
            <h2 className="section-title">Useful ideas. Practical next steps.</h2>
            <p className="muted mt-4 max-w-2xl">
              Start with the topic closest to your needs. Each guide outlines
              a few fundamentals to help you make more informed decisions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.number}
                  className="rounded-xl border border-[#e6e7e0] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#cbdccf] hover:shadow-lg hover:shadow-[#172033]/5 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                    <span className="text-sm text-[#a1a49a]">
                      {resource.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold tracking-[1.6px] text-[#287747]">
                    {resource.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {resource.title}
                  </h3>

                  <p className="muted mt-3 text-sm">
                    {resource.description}
                  </p>

                  <div className="mt-6 border-t border-[#e6e7e0] pt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[1px] text-[#686b63]">
                      Key takeaways
                    </p>

                    <ul className="space-y-3">
                      {resource.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-[#55584f]"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#287747]"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#85877f]">
            These are introductory summaries, not full published articles.
            More detailed guides and downloadable resources can be added later.
          </p>
        </div>
      </section>

      <section className="border-y border-[#e6e7e0] bg-[#f0f2ec] py-16 sm:py-20">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Three principles we build around.
            </h2>
            <p className="muted mt-4 max-w-md">
              Whether the project is a website, an application, or a new brand,
              the fundamentals remain important.
            </p>
          </div>

          <div className="space-y-0">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex gap-4 border-b border-[#dfe2d9] py-5 first:pt-0 last:border-b-0"
              >
                <span className="text-sm font-bold text-[#287747]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-[#45483f]">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d5c36] py-16 text-white sm:py-20">
        <div className="container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[2px] text-white/70">
              Ready to get started?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Turn what you&apos;ve learned into something real.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
              Tell us what you&apos;re planning, and let&apos;s explore a practical way
              to move your idea forward.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn w-fit shrink-0 bg-white !text-[#1d5c36] hover:bg-[#edf2e9]"
          >
            Talk to ZCC <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
