export default function Background() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-background overflow-clip opacity-15 duration-1000 ease-smooth">
      <div className="h-96 w-full -translate-y-1/2 bg-[radial-gradient(ellipse,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
      <div className="absolute top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-[radial-gradient(ellipse,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
      <div className="absolute right-0 top-0 h-full w-3/4 translate-x-1/2 bg-[radial-gradient(ellipse,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
      <div className="absolute bottom-1/4 left-1/2 h-full w-full -translate-x-1/2 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)),transparent,transparent)] blur-2xl" />
    </div>
  );
}
