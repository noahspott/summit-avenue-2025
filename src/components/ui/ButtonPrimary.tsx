export default function ButtonPrimary({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`gradient-blue-bg rounded-4xl p-[2px] ${className}`}>
      <div className="bg-white rounded-4xl">
        <button className="text-xl font-montserrat font-2 self-start bg-white py-4 px-8 rounded-4xl gradient-blue-text">
          {children}
        </button>
      </div>
    </div>
  );
}
