export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative px-4 lg:px-0 max-w-[1344px] mx-auto">
      {children}
    </div>
  );
}
