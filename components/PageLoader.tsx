
"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="page-loader"
      role="status"
      aria-label="Loading Z Code Crafts"
      style={{
        animation: "loader-exit 500ms ease 2400ms forwards",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="page-loader-mark">Z</div>

        <p className="mt-2 text-sm font-extrabold tracking-[0.3em] text-[#101827] dark:text-white">
          Z CODE CRAFTS
        </p>

        <p className="text-xs tracking-wide text-[#5f6b7a] dark:text-gray-400">
          Crafting digital experiences.
        </p>
      </div>

      <div className="page-loader-line" />
    </div>
  );
}
