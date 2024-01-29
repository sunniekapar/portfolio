import BentoCard from '@/components/BentoCard';
import { cn } from '../../../lib/utils';
import React from 'react';
import FadeIn from '@/components/FadeIn';

interface FooterProps extends React.HTMLProps<HTMLDivElement> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <FadeIn>
      <footer {...props} className={cn('w-full', className)}>
        <BentoCard className="!px-6 !py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="font-semibold">Sunnie Kapar.</p>
          <p className="text-sm opacity-75">all rights reserved. 2023 ©</p>
        </BentoCard>
      </footer>
    </FadeIn>
  );
}
