export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 max-w-[1344px] mx-auto">
      {children}
    </div>
  );
}
