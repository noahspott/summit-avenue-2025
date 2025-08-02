export default function Section({
  children,
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-24 ${className}`} {...props}>
      {children}
    </section>
  );
}
