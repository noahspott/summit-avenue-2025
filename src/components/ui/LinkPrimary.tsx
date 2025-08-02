type LinkPrimaryProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function LinkPrimary({
  children,
  className = "",
  ...props
}: LinkPrimaryProps) {
  return (
    <a
      {...props}
      className={`group rounded-4xl p-[2px] gradient-blue-bg hover:cursor-pointer shadow-md hover:shadow-lg hover:scale-[101%] ${className}`}
    >
      <div className="rounded-4xl flex gap-2.5 items-center py-4 px-8">
        <div className="text-white group-hover:cursor-pointer text-lg sm:text-xl font-montserrat font-2 rounded-4xl">
          {children}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-right-icon lucide-move-right button__arrow"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </div>
    </a>
  );
}
