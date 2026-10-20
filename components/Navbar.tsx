
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Our team", href: "/team" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedTheme = window.localStorage.getItem("zcc-theme");

      const nextTheme =
        savedTheme === "dark" ||
        (!savedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      setDarkMode(nextTheme);
      setThemeReady(true);
      document.documentElement.classList.toggle("dark", nextTheme);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("zcc-theme", darkMode ? "dark" : "light");
  }, [darkMode, themeReady]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6e7e0] bg-[#fafaf8]">
      <nav className="container flex min-h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
          aria-label="ZCC home"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#287747] text-lg font-bold text-white transition-transform duration-300 hover:scale-105">
            Z
          </span>

          <span className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">ZCC</span>
            <span className="text-[10px] tracking-[2px] text-[#686b63]">
              Z CODE CRAFTS
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-sm transition-colors duration-200 ${
                  active
                    ? "font-semibold text-[#287747]"
                    : "text-[#55584f] hover:text-[#287747]"
                }`}
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#287747] transition-all duration-300 ease-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <Link href="/contact" className="btn btn-primary">
            Let&apos;s talk <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="rounded-full border border-[#e6e7e0] p-2 text-[#686b63] transition-all duration-200 hover:border-[#287747] hover:text-[#287747]"
            onClick={() => setDarkMode((current) => !current)}
            aria-label={darkMode ? "Use light theme" : "Use dark theme"}
            title={darkMode ? "Use light theme" : "Use dark theme"}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 transition-colors duration-200 hover:text-[#287747] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#e6e7e0] bg-[#fafaf8] px-4 py-5 md:hidden">
          <div className="container flex flex-col items-start gap-5">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`group relative w-fit pb-2 text-sm transition-colors duration-200 ${
                    active
                      ? "font-semibold text-[#287747]"
                      : "font-medium text-[#55584f] hover:text-[#287747]"
                  }`}
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#287747] transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-fit"
            >
              Let&apos;s talk <ArrowUpRight size={16} />
            </Link>

            <button
              type="button"
              className="flex w-fit items-center gap-2 text-sm font-medium text-[#686b63] transition-colors duration-200 hover:text-[#287747]"
              onClick={() => setDarkMode((current) => !current)}
              aria-label={darkMode ? "Use light theme" : "Use dark theme"}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              {darkMode ? "Light theme" : "Dark theme"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
