import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Layers3,
  Sparkles,
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

const projects = [
  {
    name: "Drop2Earn",
    type: "SUSTAINABILITY · WEB APPLICATION",
    description:
      "A digital platform concept connecting waste collection, verification and recycling rewards.",
    number: "01",
    color: "bg-[#e4eddf]",
    textColor: "text-[#28543b]",
  },
  {
    name: "Creative work",
    type: "DESIGN · BRAND IDENTITY",
    description:
      "A growing collection of visual identities, design experiments and creative work.",
    number: "02",
    color: "bg-[#e9e7f1]",
    textColor: "text-[#51466f]",
  },
];

export default function Home() {
  return (
    <>
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
                  <p className="mt-1 text-lg font-semibold">Ideas into impact.</p>
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

      <section id="services" className="section border-t border-[#e6e7e0] bg-white">
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

      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2 className="section-title">Ideas we&apos;re bringing to life.</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#287747]"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                href="/projects"
                key={project.number}
                className="group overflow-hidden rounded-xl border border-[#e6e7e0] bg-white"
              >
                <div
                  className={`motion-fade-up relative flex min-h-[260px] items-center justify-center overflow-hidden ${project.color}`}
                >
                  <div className="absolute left-5 top-5 text-xs font-medium text-black/50">
                    PROJECT / {project.number}
                  </div>
                  {project.number === "01" ? (
                    <div className="flex h-32 w-32 rotate-[-8deg] items-center justify-center rounded-[30px] bg-[#287747] text-white shadow-xl transition-transform duration-300 group-hover:rotate-0">
                      <span className="text-5xl font-bold">D</span>
                    </div>
                  ) : (
                    <div className="flex gap-3 transition-transform duration-300 group-hover:scale-105">
                      <span className="h-24 w-12 rounded-full bg-[#51466f]" />
                      <span className="mt-6 h-24 w-12 rounded-full bg-[#c3b8dc]" />
                      <span className="h-24 w-12 rounded-full bg-white" />
                    </div>
                  )}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[10px] font-bold tracking-[1.5px] text-[#287747]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#686b63]">
                    {project.description}
                  </p>
                  <span className={`mt-5 inline-block text-sm font-semibold ${project.textColor}`}>
                    Explore project <ArrowRight className="ml-1 inline" size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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