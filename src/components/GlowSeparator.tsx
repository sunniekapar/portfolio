import React from 'react';
import { Separator } from './ui/separator';

export default function GlowSeparator() {
  return (
    <div className="relative rounded-lg">
      <Separator className="animate-breathe absolute h-0.5 inset-0 bg-gradient-to-r to-teal-50/50 via-accent from-teal-50/50 rounded-full blur-sm" />
      <Separator className="relative rounded-full my-4 bg-gradient-to-r via-accent to-teal-50/50 from-teal-50/50 " />
    </div>
  );
}
