
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
  AlertCircle,
  ExternalLink,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/260973146216";

type FormStatus = "idle" | "sending" | "success" | "error";

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

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Your message could not be sent. Please try again."
        );
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact us on WhatsApp."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.target.value })
            }
            placeholder="What should we call you?"
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm text-[#101827] outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="you@example.com"
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm text-[#101827] outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) =>
              setForm({ ...form, service: event.target.value })
            }
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm text-[#101827] outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
          >
            <option value="">Select a service</option>
            <option>Website Development</option>
            <option>App Development</option>
            <option>Brand Identity &amp; Design</option>
            <option>UI/UX Design</option>
            <option>Digital Solutions</option>
            <option>Website Support</option>
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-semibold">
            Estimated budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(event) =>
              setForm({ ...form, budget: event.target.value })
            }
            className="w-full rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm text-[#101827] outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
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
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Tell us about your idea *
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          placeholder="What are you hoping to build, improve, or achieve?"
          className="w-full resize-y rounded-md border border-[#e6e7e0] bg-white px-4 py-3 text-sm leading-6 text-[#101827] outline-none transition focus:border-[#287747] focus:ring-2 focus:ring-[#287747]/10"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending enquiry..." : "Send enquiry"}
        <Send size={16} />
      </button>

      {status === "success" && (
        <p role="status" className="flex items-start gap-2 text-sm leading-6 text-[#287747]">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          Your enquiry has been sent successfully. Thank you for contacting Z Code Crafts!
        </p>
      )}

      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 text-sm leading-6 text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>
            {errorMessage}{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline"
            >
              Contact us on WhatsApp instead.
            </a>
          </span>
        </div>
      )}

      <p className="text-xs leading-5 text-[#85877f]">
        Your enquiry is sent securely through our email service. We use your
        details to respond to your message.
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
                    Send your project details directly to our inbox using the
                    form.
                  </p>
                  <a
                    href="mailto:zcodecrafts@gmail.com"
                    className="mt-2 inline-block text-sm font-semibold text-[#287747] hover:underline"
                  >
                    zcodecrafts@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Chat on WhatsApp</h3>
                  <p className="mt-2 text-sm leading-6 text-[#686b63]">
                    Prefer messaging? Contact us directly on WhatsApp Business.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb957]"
                  >
                    <MessageCircle size={17} />
                    Chat with us
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e4eddf] text-[#287747]">
                  <CheckCircle2 size={20} />
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
