type LinkSecondaryProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  className?: string;
  arrowHex?: string;
};

export default function LinkSecondary({
  children,
  className = "",
  arrowHex = "#ffffff",
  ...props
}: LinkSecondaryProps) {
  return (
    <a
      {...props}
      className={`button-secondary relative flex flex-row gap-2.5 items-center ${className}`}
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="button__arrow"
      >
        <path d="M18 8L22 12L18 16" />
        <path d="M2 12H22" />
      </svg>
    </a>
  );
}
