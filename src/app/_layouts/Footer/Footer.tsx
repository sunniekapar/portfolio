import BentoCard from '@/components/BentoCard';
import { cn } from '../../../lib/utils';
import React from 'react';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

interface FooterProps extends React.HTMLProps<HTMLDivElement> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <FadeIn>
      <footer {...props} className={cn('w-full', className)}>
        <BentoCard className="!px-6 !py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="font-semibold">Sunnie Kapar. </p>
          <Link
            href="https://ece.engineering/"
            target="_blank"
            className="ml-4 bg-clip-text bg-gradient-to-tr from-accent to-zinc-50 text-transparent inline-block
                          hover:text-accent transition duration-500 group"
          >
            ece.engineering
            <span className="block origin-right max-w-0 group-hover:max-w-full transition-all duration-200 -mt-1 h-0.5 bg-accent" />
          </Link>
        </BentoCard>
      </footer>
    </FadeIn>
  );
}
