export default function Background() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-background overflow-clip opacity-15 duration-1000 ease-smooth">
      <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
      <div className="absolute -left-20 top-40 h-3/4 w-1/2 rotate-12 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
      <div className="absolute -right-20 top-96 h-3/4 w-1/2 rotate-12 bg-[radial-gradient(ellipse_at_right,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
    </div>
  );
}
