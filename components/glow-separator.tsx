import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface GlowSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof Separator> {
  orientation?: "vertical" | "horizontal";
}

export default function GlowSeparator({
  className,
  orientation,
}: GlowSeparatorProps) {
  return (
    <div className={cn("relative rounded-lg", className)}>
      <Separator
        orientation={orientation}
        className="absolute inset-0 h-0.5 animate-breathe rounded-full bg-gradient-to-r from-accent/50 via-accent-foreground to-accent/50 blur-sm"
      />
      <Separator
        orientation={orientation}
        className="relative rounded-full bg-gradient-to-r from-accent/50 via-accent-foreground to-accent/50"
      />
    </div>
  );
}
