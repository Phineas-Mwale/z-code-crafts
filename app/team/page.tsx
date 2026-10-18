
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the thinking, creativity and technology behind Z Code Crafts.",
};

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Curiosity first",
    description:
      "We ask questions, explore possibilities, and challenge the obvious before settling on a solution.",
  },
  {
    number: "02",
    icon: Target,
    title: "Purpose over noise",
    description:
      "Every design choice and technical decision should serve a clear goal, not simply look impressive.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Always evolving",
    description:
      "We keep learning, experimenting, and improving as technology and the needs of people change.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-[#e6e7e0] bg-white">
        <div className="container py-12 sm:py-16">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[#686b63] transition-colors hover:text-[#287747]"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back home
          </Link>

          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="eyebrow">The people behind the pixels</p>

              <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-2.5px] sm:text-7xl">
                Small team.
                <br />
                <span className="text-[#287747]">Big-picture</span> thinking.
              </h1>

              <p className="muted mt-7 max-w-xl">
                Z Code Crafts brings together creativity, problem-solving, and
                technology to turn ambitious ideas into practical digital
                experiences.
              </p>

              <Link
                href="/contact"
                className="btn btn-primary mt-8 w-fit"
              >
                Work with us <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#e4eddf]" />

              <div className="relative overflow-hidden rounded-2xl bg-[#172b21] p-7 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[2px] text-white/60">
                    Our approach
                  </span>
                  <Users size={21} className="text-[#b8d9bb]" />
                </div>

                <div className="my-12">
                  <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    Think clearly.
                    <br />
                    Design boldly.
                    <br />
                    Build thoughtfully.
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-white/20 pt-5">
                  <p className="max-w-[220px] text-sm leading-6 text-white/65">
                    Different skills. Shared ambition. Meaningful work.
                  </p>

                  <span className="text-5xl font-bold tracking-tighter text-[#b8d9bb]">
                    Z.
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 -z-0 h-20 w-20 rounded-xl border border-[#d9dfd5]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">What brings us together</p>
              <h2 className="section-title">
                Good work starts with the right mindset.
              </h2>
              <p className="muted mt-5 max-w-md">
                We believe the best digital solutions come from understanding
                the problem, respecting the people who will use the product,
                and caring about the details.
              </p>
            </div>

            <div className="space-y-0">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className="grid gap-4 border-b border-[#e6e7e0] py-7 sm:grid-cols-[60px_1fr] sm:gap-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold">
                          {principle.title}
                        </h3>
                        <span className="text-xs text-[#96998f]">
                          {principle.number}
                        </span>
                      </div>

                      <p className="muted mt-2 text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6e7e0] bg-[#f0f2ec] py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">A note on our team</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                The studio is growing. The standard stays high.
              </h2>
              <p className="muted mt-4 max-w-2xl">
                We want to build a team of thoughtful designers, developers,
                and problem-solvers. As ZCC grows, this page will introduce the
                people and skills behind our work.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn btn-secondary w-fit"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
