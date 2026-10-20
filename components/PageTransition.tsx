
"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
        @keyframes zcc-page-enter {
          from {
            opacity: 0;
            transform: translateY(7px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .zcc-page-transition {
          animation: zcc-page-enter 220ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .zcc-page-transition {
            animation: none;
          }
        }
      `}</style>

      <div key={pathname} className="zcc-page-transition">
        {children}
      </div>
    </>
  );
}
