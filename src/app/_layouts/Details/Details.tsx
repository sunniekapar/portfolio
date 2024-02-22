import BentoCard from '@/components/BentoCard';
import FadeIn from '@/components/FadeIn';
import React from 'react';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiExpo,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from 'react-icons/si';

export default function Details() {
  const icons = [
    <SiReact key="SiReact" />,
    <SiTypescript key="SiTypescript" />,
    <SiNextdotjs key="SiNextdotjs" />,
    <SiExpo key="SiExpo" />,
    <SiNodedotjs key="SiNodedotjs" />,
    <SiExpress key="SiExpress" />,
    <SiMongodb key="SiMongodb" />,
    <SiFirebase key="SiFirebase" />,
    <SiSupabase key="SiSupabase" />,
    <SiTailwindcss key="SiTailwindcss" />,
  ];
  return (
    <FadeIn className="grid xl:grid-cols-seven-ten mt-4 gap-4">
      <BentoCard className="flex items-center">
        <p className="text-center md:text-left text-lg sm:text-xl md:text-2xl font-medium leading-tight">
          I&apos;m an 18 year-old self taught full-stack developer,{' '}
          <span className="opacity-80">
            currently studying computer engineering at University of Waterloo.
          </span>
        </p>
      </BentoCard>

      <BentoCard className="flex flex-col justify-between items-center md:items-start">
        <p className="text-2xl sm:text-3xl font-semibold leading-tight mb-4 ">
          My Tech Stack.
        </p>
        <FadeIn className="flex flex-wrap gap-6 text-3xl md:text-4xl mb-8 justify-center md:items-start">
          {icons.map((icon) => {
            return icon;
          })}
        </FadeIn>
        <p className="text-sm opacity-80">
          This website was made using Next.js
        </p>
      </BentoCard>
    </FadeIn>
  );
}
