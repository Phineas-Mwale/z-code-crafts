
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Lightbulb,
  Target,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-brands";
export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people, creativity and technology behind Z Code Crafts.",
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  location: string;
  socials: SocialLink[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Phineas Mwale",
    role: "Founder · Developer & Designer",
    description:
      "Combining design, web development and creative problem-solving to turn ideas into meaningful digital experiences.",
    image: "/team/phineas.jpg",
    location: "Zambia",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/phineas-mwale-6b7315258",
        icon: Linkedin,
      },
      {
        label: "GitHub",
        href: "https://github.com/Phineas-Mwale",
        icon: Github,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/phineaschisale/",
        icon: Instagram,
      },
      {
        label: "Facebook",
        href: "https://web.facebook.com/chisalemwale1",
        icon: Facebook,
      },
    ],
  },
  {
    name: "Mulambo Mwanamomba",
    role: "Co-founder · Developer & Designer",
    description:
      "Collaborating on digital projects, exploring new ideas and helping turn concepts into practical, thoughtfully built experiences.",
    image: "/team/mulambo.jpg",
    location: "Zambia",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mulambo-mwanamomba-53b0a43b2/",
        icon: Linkedin,
      },
      {
        label: "GitHub",
        href: "https://github.com/mulambo2005-ops",
        icon: Github,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/mu_la_mbo/",
        icon: Instagram,
      },
      {
        label: "Facebook",
        href: "https://web.facebook.com/mulambo.mwanas",
        icon: Facebook,
      },
    ],
  },
];

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Curiosity first",
    description:
      "We ask questions, explore possibilities and challenge the obvious before settling on a solution.",
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
      "We keep learning, experimenting and improving as technology and people's needs change.",
  },
];

function ProfileCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-[#dce3ee] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.15)] dark:border-[#262626] dark:bg-[#0b0b0b] dark:hover:border-blue-500/60 motion-fade-up"
      style={{ animationDelay: `${index * 160}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eaf2ff] dark:bg-[#111827] sm:aspect-[5/4]">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/15 to-transparent opacity-90" />

        <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Z Code Crafts
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-blue-300">
            {member.location}
          </p>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {member.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
            {member.role}
          </p>
        </div>

        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-125" />
      </div>

      <div className="p-5 sm:p-7">
        <p className="min-h-[72px] text-sm leading-7 text-[#5f6b7a] dark:text-[#a1a1aa] sm:text-base">
          {member.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#dce3ee] pt-5 dark:border-[#262626]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#7b8798] dark:text-[#737373]">
              Connect
            </p>
            <p className="mt-1 text-xs text-[#5f6b7a] dark:text-[#a1a1aa]">
              Find me online
            </p>
          </div>

          <div className="flex items-center gap-2">
            {member.socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${social.label}`}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce3ee] bg-[#f7f9fc] text-[#344256] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-[#303030] dark:bg-[#111111] dark:text-[#e5e7eb] dark:hover:border-blue-400 dark:hover:bg-blue-500 dark:focus-visible:ring-offset-black sm:h-11 sm:w-11"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-[#dce3ee] bg-white dark:border-[#262626] dark:bg-black">
        <div className="container py-12 sm:py-16">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[#5f6b7a] transition-colors hover:text-blue-600 dark:text-[#a1a1aa] dark:hover:text-blue-400"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back home
          </Link>

          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="motion-fade-up">
              <p className="eyebrow">The people behind the pixels</p>

              <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-2.5px] sm:text-7xl">
                Small team.
                <br />
                <span className="text-[#2563eb] dark:text-blue-400">
                  Big-picture
                </span>{" "}
                thinking.
              </h1>

              <p className="muted mt-7 max-w-xl">
                Z Code Crafts brings together creativity, problem-solving and
                technology to turn ambitious ideas into practical digital
                experiences.
              </p>

              <Link href="/contact" className="btn btn-primary mt-8 w-fit">
                Work with us <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="relative motion-fade-up motion-delay-2">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#dbeafe] dark:bg-[#111827]" />

              <div className="relative overflow-hidden rounded-2xl bg-[#101827] p-7 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[2px] text-white/60">
                    Our approach
                  </span>
                  <Users size={21} className="text-blue-300" />
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
                  <span className="text-5xl font-bold tracking-tighter text-blue-300">
                    Z.
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 -z-0 h-20 w-20 rounded-xl border border-[#c8d9f5] dark:border-[#262626]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="container">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div>
              <p className="eyebrow">Meet the team</p>
              <h2 className="section-title">
                The people making{" "}
                <span className="text-[#2563eb] dark:text-blue-400">
                  things happen.
                </span>
              </h2>
            </div>

            <p className="muted max-w-lg md:justify-self-end">
              Behind every idea is a person willing to think differently,
              learn continuously and put in the work to make it real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-[#dce3ee] bg-[#f7f9fc] dark:border-[#262626] dark:bg-[#050505]">
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

            <div>
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className="grid gap-4 border-b border-[#dce3ee] py-7 sm:grid-cols-[60px_1fr] sm:gap-6 dark:border-[#262626]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#dbeafe] text-blue-600 dark:bg-[#111827] dark:text-blue-400">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold">
                          {principle.title}
                        </h3>
                        <span className="text-xs text-[#7b8798] dark:text-[#737373]">
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

      <section className="border-y border-[#dce3ee] bg-[#eaf2ff] py-16 dark:border-[#262626] dark:bg-[#0b1220] sm:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">Have an idea?</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Good things happen when the right people work together.
              </h2>
              <p className="muted mt-4 max-w-2xl">
                Have a project, a question or an idea worth exploring? Let’s
                start a conversation.
              </p>
            </div>

            <Link href="/contact" className="btn btn-primary w-fit">
              Get in touch <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
