import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  arrowHex?: string;
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  arrowHex = "#ffffff",
  ...props
}: ButtonProps) {
  const baseArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={arrowHex}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="button__arrow"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );

  const variants = {
    primary: (
      <button
        {...props}
        className={clsx(
          "group rounded-4xl p-[2px] gradient-blue-bg hover:cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[101%]",
          className
        )}
      >
        <div className="rounded-4xl flex gap-2.5 items-center py-4 px-8">
          <div className="text-white text-lg sm:text-xl font-montserrat font-2">
            {children}
          </div>
          {baseArrow}
        </div>
      </button>
    ),
    secondary: (
      <button
        {...props}
        className={clsx(
          "button-secondary px-8 relative flex flex-row gap-2.5 items-center",
          className
        )}
      >
        <div className="text-xl link-underline font-montserrat font-2 pt-4 mb-4">
          {children}
        </div>
        {baseArrow}
      </button>
    ),
    tertiary: (
      <button
        {...props}
        className={clsx(
          "text-lg font-montserrat font-2 underline hover:text-blue-600 transition-colors",
          className
        )}
      >
        {children}
      </button>
    ),
  };

  return variants[variant];
}
