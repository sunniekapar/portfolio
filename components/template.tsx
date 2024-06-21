import { cn } from "@/lib/utils";

export default function Template({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main {...props} className={cn("container px-4 py-4 md:py-16 md:px-8", className)}>
      {children}
    </main>
  );
}
