export default function ButtonPrimary({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`group rounded-4xl p-[2px] button-primary__border hover:cursor-pointer hover:scale-[101%] active:scale-[99%] shadow-2xl ${className}`}
      {...props}
    >
      <div className="gradient-blue-bg rounded-4xl flex gap-2.5 items-center py-4 px-8">
        <div className="group-hover:cursor-pointer text-lg sm:text-xl font-montserrat text-white ">
          {children}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-move-right-icon lucide-move-right button__arrow"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </div>
    </button>
  );
}
