import type React from "react";

export default function ButtonSecondary({
  children,
  href,
  className,
  arrowHex = "#ffffff",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  arrowHex?: string;
}) {
  return (
    <a
      className={`button-secondary relative flex flex-row gap-2.5 items-center  ${className}`}
      href={href}
    >
      <div className="text-xl link-underline font-montserrat font-2 pt-4 mb-4">
        {children}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={arrowHex}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="button__arrow"
      >
        <path d="M18 8L22 12L18 16" />
        <path d="M2 12H22" />
      </svg>
    </a>
  );
}
