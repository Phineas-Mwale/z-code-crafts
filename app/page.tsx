
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Leaf,
  Layers3,
  Palette,
  Recycle,
  Sparkles,
  Weight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web development",
    description:
      "Responsive websites and digital products built to work beautifully across devices.",
    tags: ["Websites", "Web apps", "Frontend"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Graphic design",
    description:
      "Visual identities and communication that give ideas a distinctive, professional presence.",
    tags: ["Branding", "Social media", "Print"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Digital solutions",
    description:
      "Practical digital tools and experiences designed around real problems and people.",
    tags: ["UI/UX", "Prototypes", "Digital strategy"],
  },
];

const studioSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We explore the problem, the people involved, and what success should look like before choosing a solution.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Craft",
    description:
      "We bring design and technology together to create a clear, useful, and thoughtful experience.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We test the details, improve the experience, and keep the original purpose in focus.",
    icon: ArrowUpRight,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container grid min-h-[660px] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="motion-fade-up">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dce6d8] bg-white px-4 py-2 text-xs font-medium text-[#287747]">
              <span className="h-2 w-2 rounded-full bg-[#287747]" />
              ZAMBIA-BASED DIGITAL STUDIO
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-2.8px] sm:text-6xl lg:text-[76px]">
              Good ideas deserve{" "}
              <span className="text-[#287747]">great execution.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#686b63] sm:text-lg">
              We design, build and bring digital ideas to life — from
              websites and applications to visual identities that help
              businesses stand out.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">
                Explore our work <ArrowUpRight size={17} />
              </Link>

              <Link href="/contact" className="btn btn-secondary">
                Start a project <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#e6e7e0] pt-6 text-xs text-[#686b63]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#287747]" />
                Design with purpose
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#287747]" />
                Built for people
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#287747]" />
                Rooted in Zambia
              </span>
            </div>
          </div>

          <div className="motion-fade-up motion-delay-2 relative mx-auto w-full max-w-[460px]">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#e3eddd]" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#e8e5d8]" />

            <div className="relative rounded-2xl border border-[#e6e7e0] bg-white p-5 shadow-[0_25px_80px_rgba(30,50,25,0.08)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#e6e7e0] pb-5">
                <div>
                  <p className="text-xs text-[#85877f]">OUR APPROACH</p>
                  <p className="mt-1 text-lg font-semibold">
                    Ideas into impact.
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#287747] text-white">
                  <Sparkles size={21} />
                </div>
              </div>

              <div className="space-y-3 py-6">
                <div className="flex items-center gap-4 rounded-xl bg-[#f6f7f2] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#287747]">
                    <Palette size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Think creatively</p>
                    <p className="mt-1 text-xs text-[#686b63]">
                      Understand the idea and its people.
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-[#85877f]">01</span>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-[#f6f7f2] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#287747]">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Build thoughtfully</p>
                    <p className="mt-1 text-xs text-[#686b63]">
                      Turn concepts into useful experiences.
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-[#85877f]">02</span>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-[#f6f7f2] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#287747]">
                    <ArrowUpRight size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Make an impact</p>
                    <p className="mt-1 text-xs text-[#686b63]">
                      Deliver work with a clear purpose.
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-[#85877f]">03</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#e6e7e0] pt-5">
                <span className="text-xs text-[#686b63]">
                  Creative thinking. Practical results.
                </span>
                <span className="text-xl font-bold tracking-tight text-[#287747]">
                  ZCC.
                </span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#services"
          className="container mb-8 flex items-center gap-2 text-xs text-[#85877f] hover:text-[#287747]"
        >
          DISCOVER WHAT WE DO <ArrowDown size={14} />
        </a>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="section border-t border-[#e6e7e0] bg-white"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2 className="section-title">
                Creative thinking meets technical skill.
              </h2>
            </div>
            <p className="muted max-w-sm text-sm">
              The right mix of design and technology to help turn your next
              idea into something real.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className={`motion-fade-up motion-delay-${service.number} group rounded-xl border border-[#e6e7e0] bg-[#fafaf8] p-6 transition-all hover:-translate-y-1 hover:border-[#b8cfb6] hover:shadow-lg sm:p-7`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6efe2] text-[#287747]">
                      <Icon size={23} />
                    </div>
                    <span className="text-xs text-[#85877f]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#686b63]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#e6e7e0] bg-white px-3 py-1.5 text-[11px] text-[#686b63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#287747] hover:gap-3"
            >
              Discover all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="section overflow-hidden">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">A PROJECT WITH PURPOSE</p>
              <h2 className="section-title">
                More than an idea. A solution in progress.
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#287747]"
            >
              Explore all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#dce3ee] bg-white shadow-[0_25px_80px_rgba(30,50,25,0.07)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* PROJECT STORY */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex w-fit items-center gap-2 rounded-full border border-[#dce6d8] bg-[#f4f8f1] px-3 py-2 text-[10px] font-bold tracking-[1.5px] text-[#287747]">
                  <Leaf size={13} />
                  SUSTAINABILITY · DIGITAL PRODUCT
                </div>

                <h3 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Drop<span className="text-[#287747]">2</span>Earn
                </h3>

                <p className="mt-5 text-base leading-8 text-[#686b63]">
                  What if recyclable waste could create value for the people
                  who collect it? Drop2Earn explores that possibility through
                  a digital platform for collection, verification and
                  rewards.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#287747]"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        Collect and verify
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#686b63]">
                        Record recyclable material and verify the collected
                        weight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#287747]"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        Calculate earnings
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#686b63]">
                        Turn verified quantities into a transparent earnings
                        record.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://drop2earn-zambia.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Explore Drop2Earn <ArrowUpRight size={17} />
                  </a>

                  <Link href="/projects" className="btn btn-secondary">
                    View case studies <ArrowRight size={16} />
                  </Link>
                </div>

                <p className="mt-5 text-xs leading-6 text-[#85877f]">
                  An evolving project exploring practical digital
                  sustainability solutions in Zambia.
                </p>
              </div>

              {/* STYLISED PRODUCT PREVIEW */}
              <div className="relative overflow-hidden bg-[#07101f] p-5 text-white sm:p-8 lg:p-10">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                        <Recycle size={22} />
                      </div>
                      <div>
                        <p className="font-semibold">Drop2Earn</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Collection overview
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-blue-300">
                      CONCEPT PREVIEW
                    </span>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm text-slate-400">
                      Verified collection
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                          9.6
                        </span>
                        <span className="ml-2 text-sm text-slate-400">
                          kg
                        </span>
                      </div>

                      <div className="mb-1 flex items-center gap-1.5 text-xs text-emerald-300">
                        <CheckCircle2 size={15} />
                        Verified
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Weight size={15} />
                        Verified weight
                      </div>
                      <p className="mt-3 text-2xl font-semibold">9.6 kg</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Sparkles size={15} />
                        Example earnings
                      </div>
                      <p className="mt-3 text-2xl font-semibold text-emerald-300">
                        K48.00
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">
                          PET plastic collection
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Example transaction
                        </p>
                      </div>
                      <span className="rounded-lg bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
                        Complete
                      </span>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
                    </div>

                    <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                      <span>Collected</span>
                      <span>Verified</span>
                      <span>Calculated</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-400">
                    <Sparkles size={14} className="mt-0.5 shrink-0" />
                    Illustrative demo values only, not a current market rate or
                    a real payout.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE THE STUDIO */}
      <section className="border-y border-[#e6e7e0] bg-[#fafaf8]">
        <div className="container py-12 sm:py-16">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <div>
                <p className="eyebrow">INSIDE THE STUDIO</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Good work starts with good questions.
                </h2>
                <p className="muted mt-3 max-w-2xl text-sm">
                  Discover how we turn an early idea into a considered digital
                  experience.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#287747]">
                  Explore our approach
                </span>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dce6d8] bg-white text-2xl text-[#287747] transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="mt-8 grid gap-4 border-t border-[#e6e7e0] pt-8 sm:grid-cols-3">
              {studioSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="rounded-xl border border-[#e6e7e0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8cfb6] hover:shadow-lg sm:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#287747]">
                        {step.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e6efe2] text-[#287747]">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="muted mt-3 text-sm leading-7">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </details>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-y border-[#e6e7e0] bg-[#edf2e9]">
        <div className="container grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
          <div>
            <p className="eyebrow">HAVE AN IDEA?</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s make something meaningful.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#686b63]">
              Whether you&apos;re starting from scratch or improving what
              already exists, we&apos;d love to hear what you&apos;re working on.
            </p>
          </div>

          <Link href="/contact" className="btn btn-primary w-fit">
            Tell us about it <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
