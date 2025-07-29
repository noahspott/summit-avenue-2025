export default function Content({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative px-[5%] max-w-[1920px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
