
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Layers3,
  Search,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Z Code Crafts services, from website development and app design to branding and digital solutions.",
};

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites that communicate your value, build trust, and help your organisation grow.",
    features: [
      "Business and portfolio websites",
      "Landing pages",
      "Website redesigns",
      "Responsive development",
    ],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "App Development",
    description:
      "Practical digital products designed around real user needs, from early concepts to functional applications.",
    features: [
      "Web applications",
      "Interactive prototypes",
      "User-focused interfaces",
      "Product planning",
    ],
  },
  {
    number: "03",
    icon: Palette,
    title: "Brand Identity & Design",
    description:
      "Distinctive visual identities that help businesses and initiatives present themselves with clarity and confidence.",
    features: [
      "Logo and wordmark design",
      "Brand colour systems",
      "Marketing graphics",
      "Visual identity direction",
    ],
  },
  {
    number: "04",
    icon: Code2,
    title: "UI/UX Design",
    description:
      "Thoughtful digital experiences that make websites and applications easier to understand and use.",
    features: [
      "Interface design",
      "User flows and wireframes",
      "Prototypes",
      "Usability improvements",
    ],
  },
  {
    number: "05",
    icon: Layers3,
    title: "Digital Solutions",
    description:
      "Technology-led solutions for organisations looking to improve processes, reach people, or test new ideas.",
    features: [
      "Digital concept development",
      "Workflow planning",
      "MVP development",
      "Technical guidance",
    ],
  },
  {
    number: "06",
    icon: Search,
    title: "Website Support",
    description:
      "Practical improvements to help existing websites stay useful, presentable, and aligned with your goals.",
    features: [
      "Content and layout updates",
      "Bug fixes",
      "Performance improvements",
      "Ongoing maintenance planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[#e6e7e0] bg-white">
        <div className="container py-12 sm:py-16">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#686b63] transition-colors hover:text-[#287747]"
          >
            <ArrowDownRight size={16} className="rotate-180" />
            Back home
          </Link>

          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Good ideas deserve
                <span className="text-[#287747]"> great execution.</span>
              </h1>
            </div>

            <p className="muted max-w-lg md:justify-self-end">
              We combine design and technology to help businesses, individuals,
              and organisations turn ideas into useful digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Our capabilities</p>
              <h2 className="section-title">How we can help</h2>
            </div>

            <p className="muted max-w-md text-sm">
              Every project is different. We focus on understanding what you
              need before deciding how to build it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group rounded-xl border border-[#e6e7e0] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#cbdccf] hover:shadow-lg hover:shadow-[#172033]/5 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-medium text-[#a1a49a]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="muted mt-3 text-sm">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#55584f]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#287747]"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#287747] transition-all group-hover:gap-3"
                  >
                    Discuss this service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#1d5c36] py-16 text-white sm:py-20">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[2px] text-white/70">
              Have something in mind?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Let&apos;s work out what your idea needs.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
              Tell us what you&apos;re planning. We can discuss your goals,
              explore possible approaches, and identify a practical next step.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn w-fit shrink-0 bg-white !text-[#1d5c36] hover:bg-[#edf2e9]"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
