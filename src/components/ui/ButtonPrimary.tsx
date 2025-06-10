export default function ButtonPrimary({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`group rounded-4xl p-[2px] button-primary__border hover:cursor-pointer hover:shadow-md hover:scale-[101%] ${className}`}
    >
      <div className="bg-white rounded-4xl flex gap-2.5 items-center py-4 px-8">
        <div className="group-hover:cursor-pointer text-xl font-montserrat font-2 rounded-4xl button-primary__text">
          {children}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1d3557"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-move-right-icon lucide-move-right button-primary__arrow"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </div>
    </button>
  );
}
