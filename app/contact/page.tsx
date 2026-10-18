
"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpLeft,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: serviceFromUrl,
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `ZCC project enquiry — ${form.service || "General enquiry"}`
    );

    const body = encodeURIComponent(
      `Hello Z Code Crafts,

Name: ${form.name}
Email: ${form.email}
Service: ${form.service || "Not specified"}
Budget: ${form.budget || "Not specified"}

Project details:
${form.message}

Sent from the ZCC website.`
    );

    setSubmitted(true);
    window.location.href = `mailto:hello@zcodecrafts.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold"
          >
            Your name *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.target.value })
            }
            placeholder="What should we call you?"
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Email address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="you@example.com"
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold"
          >
            What do you need?
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(event) =>
              setForm({ ...form, service: event.target.value })
            }
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          >
            <option value="">Select a service</option>
            <option>Website Development</option>
            <option>App Development</option>
            <option>Brand Identity & Design</option>
            <option>UI/UX Design</option>
            <option>Digital Solutions</option>
            <option>Website Support</option>
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-sm font-semibold"
          >
            Estimated budget
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(event) =>
              setForm({ ...form, budget: event.target.value })
            }
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          >
            <option value="">Prefer to discuss</option>
            <option>Under K2,000</option>
            <option>K2,000 – K5,000</option>
            <option>K5,000 – K10,000</option>
            <option>K10,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold"
        >
          Tell us about your idea *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          placeholder="What are you hoping to build, improve, or achieve?"
          className="w-full resize-y rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full sm:w-auto"
      >
        Prepare enquiry <Send size={16} />
      </button>

      {submitted && (
        <p className="flex items-start gap-2 text-sm leading-6 text-[#287747]">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          Your email app should open with your enquiry prepared. Please send
          the email to complete the process.
        </p>
      )}

      <p className="text-xs leading-5 text-[#85877f]">
        This form prepares an email using your device&apos;s configured email
        application. It does not send or store your information on the website.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-20 text-sm text-[#686b63]">
          Loading contact form...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}

function ContactContent() {
  return (
    <>
      <section className="border-b border-[#e6e7e0] bg-white">
        <div className="container py-12 sm:py-16">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#686b63] transition-colors hover:text-[#287747]"
          >
            <ArrowUpLeft size={16} />
            Back home
          </Link>

          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="eyebrow">Contact ZCC</p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Have an idea?
                <br />
                <span className="text-[#287747]">Let&apos;s talk.</span>
              </h1>

              <p className="muted mt-6 max-w-xl">
                Whether you have a detailed brief or just the beginning of an
                idea, tell us what you have in mind. We&apos;ll work out the
                next step together.
              </p>
            </div>

            <div className="rounded-xl bg-[#e4eddf] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#287747]">
                What happens next?
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#287747]">
                    1
                  </span>
                  <div>
                    <h2 className="text-sm font-bold">You share your idea</h2>
                    <p className="mt-1 text-sm leading-6 text-[#55584f]">
                      Tell us what you need and what you hope to achieve.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#287747]">
                    2
                  </span>
                  <div>
                    <h2 className="text-sm font-bold">We discuss the details</h2>
                    <p className="mt-1 text-sm leading-6 text-[#55584f]">
                      We clarify the scope, priorities, and possible approach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#287747]">
                    3
                  </span>
                  <div>
                    <h2 className="text-sm font-bold">We plan a way forward</h2>
                    <p className="mt-1 text-sm leading-6 text-[#55584f]">
                      If it&apos;s a good fit, we can agree on the next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="section-title">Tell us what you&apos;re thinking.</h2>

            <p className="muted mt-5">
              A little context goes a long way. Share as much or as little as
              you know right now.
            </p>

            <div className="mt-10 border-t border-[#e6e7e0] pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Email enquiry</h3>
                  <p className="mt-2 text-sm leading-6 text-[#686b63]">
                    Fill in the form and prepare an email with your project
                    details.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">No pressure</h3>
                  <p className="mt-2 text-sm leading-6 text-[#686b63]">
                    You don&apos;t need a perfect brief to start a conversation.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-xl border border-[#e6e7e0] bg-white p-6 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[#1d5c36] py-14 text-white">
        <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-white/65">
              Still exploring?
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              See what we&apos;ve been working on.
            </h2>
          </div>

          <Link
            href="/projects"
            className="btn w-fit bg-white !text-[#1d5c36] hover:bg-[#edf2e9]"
          >
            Explore our work <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
    