import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e6e7e0] bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-2 md:items-end">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight">
            ZCC<span className="text-[#287747]">.</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#686b63]">
            Digital experiences, thoughtful design and technology built to
            move ideas forward.
          </p>
          <p className="mt-5 text-xs text-[#85877f]">
            Zambia · Working everywhere
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          <Link href="/projects" className="text-sm hover:text-[#287747]">
            Work
          </Link>
          <Link href="/services" className="text-sm hover:text-[#287747]">
            Services
          </Link>
          <Link href="/team" className="text-sm hover:text-[#287747]">
            Team
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-sm hover:text-[#287747]"
          >
            Contact <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="border-t border-[#e6e7e0]">
        <div className="container flex flex-col gap-2 py-5 text-xs text-[#85877f] sm:flex-row sm:justify-between">
          <span>© 2026 Z Code Crafts.</span>
          <span>Designed with purpose. Built with care.</span>
        </div>
      </div>
    </footer>
  );
}