import React, { ReactNode } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";

interface SocialButtonProps {
  icon: ReactNode;
  description: string;
  href: string;
}

export default function SocialButton({
  icon,
  description,
  href,
}: SocialButtonProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={href} target="_blank">
          <div className="text-3xl transition-all duration-200 hover:text-accent-foreground">
            {icon}
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit border-accent bg-accent-foreground/20 px-1.5 py-px text-xs">
        {description}
      </HoverCardContent>
    </HoverCard>
  );
}
