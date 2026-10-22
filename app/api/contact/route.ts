
import { NextResponse } from "next/server";

const destinationEmail = "zcodecrafts@gmail.com";
const defaultFromEmail = "Z Code Crafts <contact@zcodecrafts.dev>";

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || defaultFromEmail;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Please contact us on WhatsApp.",
        },
        { status: 503 }
      );
    }

    const data = await request.json();

    const name = clean(data.name, 100);
    const email = clean(data.email, 254);
    const service =
      clean(data.service, 100) || "General enquiry";
    const budget =
      clean(data.budget, 100) || "Not specified";
    const message = clean(data.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Please provide your name, email address, and project details.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [destinationEmail],
          reply_to: email,
          subject: `ZCC project enquiry — ${service}`,
          text: [
            "New enquiry from the Z Code Crafts website",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Service: ${service}`,
            `Budget: ${budget}`,
            "",
            "Project details:",
            message,
          ].join("\n"),
        }),
        cache: "no-store",
      }
    );

    if (!emailResponse.ok) {
      const providerError = await emailResponse.text();
      console.error("Resend email delivery error:", providerError);

      return NextResponse.json(
        {
          error:
            "We couldn't send your enquiry right now. Please try WhatsApp instead.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
