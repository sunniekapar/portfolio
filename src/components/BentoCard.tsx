import React from 'react';
import { Card } from './ui/card';
import { cn } from '../lib/utils';

type CardProps = React.ComponentProps<typeof Card>;

export interface BentoCardProps extends CardProps {}

const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="relative rounded-lg h-full">
        <div className="absolute ring-accent/15 inset-0 ring rounded-3xl blur-sm animate-breathe" />
        <Card
          {...props}
          className={cn(
            'z-10 relative transition duration-500 px-8 py-6 gradient-border md:px-16 md:py-12 h-full border-primary/5 rounded-lg bg-transparent border-2 hover:border-2 hover:border-accent/15',
            props.className
          )}
        />
      </div>
    );
  }
);

export default BentoCard;
