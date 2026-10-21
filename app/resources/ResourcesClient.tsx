
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileText,
  Lightbulb,
  Palette,
  Search,
  X,
} from "lucide-react";

const resources = [
  {
    number: "01",
    category: "Digital strategy",
    title: "Start with the problem",
    description:
      "Before investing in a website or application, understand the problem you're solving, who you're helping, and what success looks like.",
    icon: Lightbulb,
    points: [
      "Identify your target audience.",
      "Define your main objective.",
      "Decide how you will measure success.",
    ],
    detail:
      "Write down the problem in one sentence. Describe who experiences it, how they currently deal with it, and how your solution would improve their situation. This gives your project a clear direction before you spend time or money building it.",
  },
  {
    number: "02",
    category: "Websites",
    title: "Plan your website properly",
    description:
      "A useful website needs more than an attractive homepage. Visitors should understand what you offer and know what to do next.",
    icon: Code2,
    points: [
      "Plan the pages visitors actually need.",
      "Prepare clear, useful content.",
      "Prioritise mobile usability.",
    ],
    detail:
      "Start with the essentials: a clear homepage, information about your services or products, evidence that builds trust, and an easy way to contact you. Keep navigation simple and test the experience on a phone before launch.",
  },
  {
    number: "03",
    category: "Branding",
    title: "Build a recognisable brand",
    description:
      "A logo is only one part of a brand. Consistent colours, typography, messaging, and presentation help people recognise your business.",
    icon: Palette,
    points: [
      "Choose a consistent visual identity.",
      "Keep your message clear.",
      "Use your brand consistently.",
    ],
    detail:
      "Define a small set of brand colours, typefaces, logo variations, and writing guidelines. Apply them consistently across your website and social media. A recognisable identity should work in different sizes and on different backgrounds.",
  },
  {
    number: "04",
    category: "Digital products",
    title: "Build a smaller first version",
    description:
      "You don't need every feature on day one. Start with the core experience, test it, and use feedback to decide what comes next.",
    icon: FileText,
    points: [
      "Prioritise essential features.",
      "Test with real users.",
      "Improve based on feedback.",
    ],
    detail:
      "Separate essential features from ideas that can wait. Build the smallest version that solves the main problem, let people try it, observe where they struggle, and use what you learn to guide the next iteration.",
  },
];

const categories = [
  "All resources",
  "Digital strategy",
  "Websites",
  "Branding",
  "Digital products",
];

const principles = [
  "Understand the need before choosing the technology.",
  "Prioritise clarity and usability over unnecessary complexity.",
  "Keep learning, testing, and improving.",
];

export default function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState("All resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedResource, setExpandedResource] = useState<string | null>(
    null
  );

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All resources" ||
        resource.category === activeCategory;

      const searchableText = [
        resource.title,
        resource.category,
        resource.description,
        ...resource.points,
        resource.detail,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, searchQuery]);

  const clearSearch = () => setSearchQuery("");

  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Hero */}
      <section
        className="border-b"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container py-14 sm:py-20">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "var(--muted)" }}
          >
            <ArrowRight size={16} className="rotate-180" />
            Back home
          </Link>

          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="eyebrow">Resources & insights</p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Ideas to help you{" "}
                <span style={{ color: "var(--green)" }}>build better.</span>
              </h1>

              <p
                className="mt-5 max-w-2xl text-base leading-8 sm:text-lg"
                style={{ color: "var(--muted)" }}
              >
                Practical starting points for entrepreneurs, businesses, and
                creators exploring websites, branding, and digital products.
              </p>
            </div>

            {/* Static feature card: no floating decorations or overlapping icons */}
            <aside
              className="rounded-2xl border p-6 sm:p-7"
              style={{
                backgroundColor: "var(--soft)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--green)",
                }}
              >
                <Lightbulb size={22} strokeWidth={1.8} />
              </div>

              <p
                className="text-xs font-bold uppercase tracking-[1.8px]"
                style={{ color: "var(--green)" }}
              >
                Before you build
              </p>

              <h2 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">
                Get the fundamentals right.
              </h2>

              <p
                className="mt-3 text-sm leading-7"
                style={{ color: "var(--muted)" }}
              >
                Better digital projects begin with clear goals, a real
                problem to solve, and an understanding of the people you want
                to help.
              </p>

              <div
                className="mt-5 flex items-start gap-3 border-t pt-4 text-sm leading-6"
                style={{ borderColor: "var(--border)" }}
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0"
                  style={{ color: "var(--green)" }}
                />
                <span>Start with purpose. Build with direction.</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Search and resource library */}
      <section className="section">
        <div className="container">
          <div className="mb-8">
            <p className="eyebrow">Explore the library</p>
            <h2 className="section-title">
              Useful ideas. Practical next steps.
            </h2>
            <p className="muted mt-4 max-w-2xl">
              Explore a topic, search for something specific, and open a guide
              when you want to learn more.
            </p>
          </div>

          <div
            className="mb-6 flex items-center gap-3 rounded-xl border px-4"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <Search
              size={19}
              className="shrink-0"
              style={{ color: "var(--muted)" }}
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search guides, topics, or ideas..."
              aria-label="Search resources"
              className="min-h-12 w-full border-0 bg-transparent py-3 text-sm outline-none"
              style={{ color: "var(--foreground)" }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="rounded-lg p-2"
                style={{ color: "var(--muted)" }}
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const selected = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={selected}
                  className="rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: selected
                      ? "var(--green)"
                      : "var(--surface)",
                    color: selected ? "#ffffff" : "var(--foreground)",
                    borderColor: selected
                      ? "var(--green)"
                      : "var(--border)",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p
            className="mb-5 text-sm"
            style={{ color: "var(--muted)" }}
            aria-live="polite"
          >
            {filteredResources.length}{" "}
            {filteredResources.length === 1 ? "guide" : "guides"} found
          </p>

          {filteredResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {filteredResources.map((resource) => {
                const Icon = resource.icon;
                const isExpanded = expandedResource === resource.number;

                return (
                  <article
                    key={resource.number}
                    className="min-w-0 rounded-2xl border p-6 transition-colors sm:p-8"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: "var(--soft)",
                          color: "var(--green)",
                        }}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--muted)" }}
                      >
                        {resource.number}
                      </span>
                    </div>

                    <p
                      className="mt-6 text-xs font-bold uppercase tracking-[1.5px]"
                      style={{ color: "var(--green)" }}
                    >
                      {resource.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                      {resource.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-7"
                      style={{ color: "var(--muted)" }}
                    >
                      {resource.description}
                    </p>

                    <div
                      className="mt-6 border-t pt-5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p
                        className="mb-4 text-xs font-bold uppercase tracking-[1.2px]"
                        style={{ color: "var(--muted)" }}
                      >
                        Key takeaways
                      </p>

                      <ul className="space-y-3">
                        {resource.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-1 shrink-0"
                              style={{ color: "var(--green)" }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {isExpanded && (
                      <div
                        className="mt-6 rounded-xl border p-4 sm:p-5"
                        style={{
                          backgroundColor: "var(--soft)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <p
                          className="mb-2 text-xs font-bold uppercase tracking-[1.2px]"
                          style={{ color: "var(--green)" }}
                        >
                          Put it into practice
                        </p>
                        <p
                          className="text-sm leading-7"
                          style={{ color: "var(--foreground)" }}
                        >
                          {resource.detail}
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setExpandedResource(isExpanded ? null : resource.number)
                      }
                      aria-expanded={isExpanded}
                      className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--green)" }}
                    >
                      {isExpanded ? "Show less" : "Read practical advice"}
                      <ChevronDown
                        size={17}
                        className={`transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div
              className="rounded-2xl border px-6 py-12 text-center"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <Search
                size={28}
                className="mx-auto mb-4"
                style={{ color: "var(--muted)" }}
              />
              <h3 className="text-lg font-bold">No matching guides</h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: "var(--muted)" }}
              >
                Try another search term or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All resources");
                }}
                className="mt-5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--green)" }}
              >
                Clear filters
              </button>
            </div>
          )}

          <p
            className="mt-6 text-xs leading-6"
            style={{ color: "var(--muted)" }}
          >
            These introductory guides provide a starting point. More detailed
            articles and downloadable resources can be added as the library
            grows.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section
        className="border-y py-16 sm:py-20"
        style={{
          backgroundColor: "var(--soft)",
          borderColor: "var(--border)",
        }}
      >
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

          <div>
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex gap-4 border-b py-5 first:pt-0 last:border-b-0"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--green)" }}
                >
                  0{index + 1}
                </span>
                <p className="text-sm leading-7">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: "var(--surface)",
          color: "var(--foreground)",
        }}
      >
        <div className="container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Ready to get started?</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Turn what you&apos;ve learned into something real.
            </h2>
            <p className="muted mt-4 max-w-xl">
              Tell us what you&apos;re planning, and let&apos;s explore a
              practical way to move your idea forward.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn btn-primary w-fit shrink-0"
          >
            Talk to ZCC <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
