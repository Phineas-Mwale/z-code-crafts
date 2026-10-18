import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Recycle,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      {/* Page introduction */}
      <section className="border-b border-[#e6e7e0] bg-white">
        <div className="container py-10 sm:py-14">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#686b63] transition-colors hover:text-[#287747]"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <p className="eyebrow">OUR PORTFOLIO</p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-2.5px] sm:text-7xl">
            Ideas in progress.
            <br />
            <span className="text-[#287747]">Built with purpose.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#686b63] sm:text-lg">
            Explore the digital products, creative concepts and practical
            solutions we&apos;re working on. Every project starts with a problem
            worth solving.
          </p>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="container">
          <div className="mb-10 flex items-center justify-between">
            <p className="eyebrow">FEATURED PROJECT</p>
            <span className="rounded-full border border-[#dce6d8] bg-white px-3 py-2 text-xs text-[#287747]">
              01 / Selected work
            </span>
          </div>

          <article className="overflow-hidden rounded-2xl border border-[#e6e7e0] bg-white">
            <div className="grid lg:grid-cols-2">
              {/* Project visual */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#e5eddf] p-8 sm:min-h-[440px]">
                <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-[#b7cbb0]" />
                <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full border border-[#b7cbb0]" />

                <div className="relative w-full max-w-[340px] rotate-[-2deg] rounded-2xl border border-black/5 bg-white p-6 shadow-[0_24px_70px_rgba(28,65,37,0.12)] sm:p-8">
                  <div className="flex items-center justify-between border-b border-[#e6e7e0] pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#287747] text-white">
                        <Recycle size={23} />
                      </div>
                      <div>
                        <p className="font-bold">Drop2Earn</p>
                        <p className="text-xs text-[#686b63]">
                          Circular economy platform
                        </p>
                      </div>
                    </div>
                    <Sparkles size={19} className="text-[#287747]" />
                  </div>

                  <p className="mt-6 text-xs text-[#686b63]">
                    COLLECTION OVERVIEW
                  </p>
                  <div className="mt-3 rounded-xl bg-[#f5f7f2] p-5">
                    <p className="text-sm text-[#686b63]">
                      Verified recyclable waste
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      Track. Verify. Earn.
                    </p>
                    <div className="mt-5 flex gap-2">
                      <span className="h-2 flex-1 rounded-full bg-[#287747]" />
                      <span className="h-2 flex-1 rounded-full bg-[#b5d0ae]" />
                      <span className="h-2 flex-1 rounded-full bg-[#dce8d7]" />
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-xs text-[#287747]">
                    <Code2 size={15} />
                    Digital product development
                  </div>
                </div>

                <span className="absolute bottom-5 left-5 text-[10px] font-semibold tracking-[2px] text-[#50674b]">
                  ZCC / CASE STUDY 001
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap gap-2">
                  {["WEB APPLICATION", "SUSTAINABILITY"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e6e7e0] px-3 py-2 text-[10px] font-semibold tracking-[1px] text-[#686b63]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Drop2Earn
                </h2>

                <p className="mt-5 text-base leading-8 text-[#686b63]">
                  A Zambian recycling platform concept designed to connect
                  waste collectors, collection points and recycling businesses
                  through traceable collections and transparent earnings.
                </p>

                <div className="mt-8 border-t border-[#e6e7e0] pt-6">
                  <p className="text-xs font-semibold tracking-[1.5px] text-[#287747]">
                    THE APPROACH
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { number: "01", label: "Collect" },
                      { number: "02", label: "Verify" },
                      { number: "03", label: "Calculate" },
                    ].map((item) => (
                      <div key={item.number}>
                        <p className="text-xs text-[#85877f]">
                          {item.number}
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://drop2earn-zambia.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Visit live project <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://github.com/Phineas-Mwale/Drop2Earn"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    View source <Code2 size={16} />
                  </a>
                </div>

                <p className="mt-4 text-xs leading-6 text-[#85877f]">
                  A developing MVP. The platform&apos;s features and operational
                  partnerships continue to evolve.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Future portfolio */}
      <section className="border-y border-[#e6e7e0] bg-white">
        <div className="container py-20">
          <p className="eyebrow">MORE FROM ZCC</p>
          <h2 className="section-title">
            A growing collection of creative work.
          </h2>
          <p className="muted max-w-2xl text-sm">
            As our studio grows, this space will showcase more websites,
            applications, brand identities and design projects.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-dashed border-[#cfd4c9] bg-[#fafaf8] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6efe2] text-[#287747]">
                <Palette size={23} />
              </div>
              <p className="mt-6 text-xs font-semibold tracking-[1.5px] text-[#85877f]">
                DESIGN & BRANDING
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Visual identities
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#686b63]">
                Logos, brand systems, graphics and creative direction for
                businesses and organisations.
              </p>
              <span className="mt-5 inline-block text-xs text-[#85877f]">
                Portfolio entries coming soon
              </span>
            </div>

            <div className="rounded-xl border border-dashed border-[#cfd4c9] bg-[#fafaf8] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9e7f1] text-[#51466f]">
                <Code2 size={23} />
              </div>
              <p className="mt-6 text-xs font-semibold tracking-[1.5px] text-[#85877f]">
                WEB & DIGITAL PRODUCTS
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Digital experiences
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#686b63]">
                Websites, interfaces and useful digital tools designed around
                real needs.
              </p>
              <span className="mt-5 inline-block text-xs text-[#85877f]">
                More projects to be showcased
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-[#1d5c36] px-7 py-12 text-white sm:px-12 sm:py-16">
            <p className="text-xs font-semibold tracking-[2px] text-[#c5dfc5]">
              HAVE SOMETHING IN MIND?
            </p>
            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Your idea could be our next project.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                  Tell us what you&apos;re planning. Let&apos;s explore how we can help
                  bring it to life.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn w-fit bg-white !text-[#173b70] hover:bg-[#edf2f9]"
              >
                Start a conversation <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}