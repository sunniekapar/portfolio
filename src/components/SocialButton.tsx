import React, { ReactNode } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

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
        <a href={href} target="_blank">
          <div className="text-3xl transition-all duration-200 hover:text-accent">
            {icon}
          </div>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit text-sm p-2">
        {description}
      </HoverCardContent>
    </HoverCard>
  );
}
