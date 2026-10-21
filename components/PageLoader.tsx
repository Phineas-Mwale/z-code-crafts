
"use client";

export default function PageLoader() {
  return (
    <div
      className="page-loader"
      role="status"
      aria-label="Loading Z Code Crafts"
    >
      <div className="flex flex-col items-center">
        <div className="page-loader-mark grid h-16 w-16 place-items-center rounded-[18px] bg-[#2563eb] text-[30px] font-extrabold text-white shadow-[0_18px_45px_rgba(37,99,235,0.25)]">
          Z
        </div>
      </div>

      <div className="absolute bottom-[27%] flex w-full flex-col items-center px-5">
        <div className="page-loader-line h-[3px] w-[90px] overflow-hidden rounded-full bg-[#dbeafe] dark:bg-[#1e293b]" />

        <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[3px] text-[#475569] dark:text-[#cbd5e1]">
          Crafting digital experiences
        </p>

        <p className="mt-2 text-center text-[10px] font-medium tracking-[1.5px] text-[#64748b] dark:text-[#94a3b8]">
          Z CODE CRAFTS
        </p>
      </div>
    </div>
  );
}
