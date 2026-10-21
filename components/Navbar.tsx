
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/projects", number: "01" },
  { label: "Services", href: "/services", number: "02" },
  { label: "Our team", href: "/team", number: "03" },
  { label: "Resources", href: "/resources", number: "04" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("zcc-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme =
      savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", initialTheme);
    setDarkMode(initialTheme);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("zcc-theme", darkMode ? "dark" : "light");
  }, [darkMode, themeReady]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function toggleTheme() {
    setDarkMode((current) => !current);
  }

  return (
    <>
      <style jsx global>{`
        .zcc-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 10px 0;
          color: #334155 !important;
          font-size: 14px;
          transition: color 180ms ease, transform 180ms ease;
        }

        .zcc-nav-link::after {
          position: absolute;
          right: 0;
          bottom: 3px;
          left: 0;
          height: 2px;
          border-radius: 2px;
          background: #2563eb;
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .zcc-nav-link:hover,
        .zcc-nav-link[aria-current="page"] {
          color: #2563eb !important;
        }

        .zcc-nav-link:hover {
          transform: translateY(-1px);
        }

        .zcc-nav-link:hover::after,
        .zcc-nav-link[aria-current="page"]::after {
          transform: scaleX(1);
        }

        html.dark .zcc-nav-link {
          color: #e5e7eb !important;
        }

        html.dark .zcc-nav-link:hover,
        html.dark .zcc-nav-link[aria-current="page"] {
          color: #60a5fa !important;
        }

        .zcc-mobile-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 15px;
          min-height: 57px;
          padding: 12px 8px;
          border-bottom: 1px solid #dce3ee;
          color: #334155 !important;
          transition:
            color 180ms ease,
            background-color 180ms ease,
            padding-left 180ms ease;
        }

        .zcc-mobile-link::after {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          content: "";
          transition: width 220ms ease;
        }

        .zcc-mobile-link:hover,
        .zcc-mobile-link[aria-current="page"] {
          color: #2563eb !important;
          background: #eaf2ff;
        }

        .zcc-mobile-link:hover {
          padding-left: 13px;
        }

        .zcc-mobile-link:hover::after,
        .zcc-mobile-link[aria-current="page"]::after {
          width: 100%;
        }

        html.dark .zcc-mobile-link {
          border-color: #262626;
          color: #e5e7eb !important;
        }

        html.dark .zcc-mobile-link:hover,
        html.dark .zcc-mobile-link[aria-current="page"] {
          color: #60a5fa !important;
          background: #101827;
        }

        .zcc-menu-panel {
          animation: zcc-menu-enter 180ms ease-out both;
        }

        @keyframes zcc-menu-enter {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zcc-nav-link,
          .zcc-nav-link::after,
          .zcc-mobile-link,
          .zcc-mobile-link::after {
            transition: none;
          }

          .zcc-menu-panel {
            animation: none;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-[#e6e7e0] bg-[#fafaf8] dark:border-[#262626] dark:bg-black">
        <nav
          className="container flex min-h-[76px] items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Z Code Crafts home"
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#287747] text-lg font-bold text-white transition-transform duration-200 group-hover:rotate-[-4deg]">
              Z
            </span>

            <span className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#101827] dark:text-white">
                ZCC
              </span>
              <span className="text-[10px] tracking-[2px] text-[#686b63] dark:text-gray-400">
                Z CODE CRAFTS
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="zcc-nav-link"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact" className="btn btn-primary">
              Let&apos;s talk <ArrowUpRight size={16} />
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              disabled={!themeReady}
              aria-label={
                darkMode ? "Switch to light theme" : "Switch to dark theme"
              }
              title={darkMode ? "Light mode" : "Dark mode"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dce3ee] text-[#334155] transition-all duration-200 hover:border-[#2563eb] hover:text-[#2563eb] disabled:opacity-50 dark:border-[#374151] dark:text-gray-200"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              disabled={!themeReady}
              aria-label={
                darkMode ? "Switch to light theme" : "Switch to dark theme"
              }
              title={darkMode ? "Light mode" : "Dark mode"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dce3ee] text-[#334155] transition-colors hover:border-[#2563eb] hover:text-[#2563eb] disabled:opacity-50 dark:border-[#374151] dark:text-gray-200"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="zcc-mobile-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                menuOpen
                  ? "border-[#2563eb] bg-[#2563eb] text-white"
                  : "border-[#dce3ee] text-[#334155] hover:border-[#2563eb] hover:text-[#2563eb] dark:border-[#374151] dark:text-gray-200"
              }`}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="zcc-mobile-navigation"
            className="zcc-menu-panel border-t border-[#dce3ee] bg-[#fafaf8] dark:border-[#262626] dark:bg-black md:hidden"
          >
            <div className="container py-3">
              <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#2563eb]">
                NAVIGATION
              </p>

              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="zcc-mobile-link"
                  >
                    <span className="w-6 text-xs font-semibold tabular-nums text-[#2563eb]">
                      {link.number}
                    </span>

                    <span className="flex-1 text-[15px] font-medium">
                      {link.label}
                    </span>

                    {active && (
                      <span className="text-[10px] font-semibold tracking-wide text-[#2563eb]">
                        YOU ARE HERE
                      </span>
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex min-h-12 items-center justify-between rounded-lg bg-[#2563eb] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
              >
                Let&apos;s talk
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
