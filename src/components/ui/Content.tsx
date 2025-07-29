export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative px-[5%] max-w-[1920px] mx-auto">{children}</div>
  );
}
