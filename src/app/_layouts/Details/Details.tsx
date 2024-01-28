import BentoCard from '@/components/BentoCard';
import FadeIn, { FadeInChild } from '@/components/FadeIn';
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
} from 'react-icons/si';

export default function Details() {
  const icons = [
    <SiMongodb />,
    <SiExpress />,
    <SiReact />,
    <SiNodedotjs />,
    <SiExpo />,
    <SiNextdotjs />,
    <SiFirebase />,
    <SiTypescript />,
    <SiTailwindcss />,
  ];
  return (
    <FadeIn list delay={0.5} className="grid xl:grid-cols-seven-ten mt-4 gap-4">
      <FadeInChild>
        <BentoCard className="flex items-center">
          <p className="text-center md:text-left text-lg sm:text-xl md:text-2xl font-medium leading-tight">
            I'm an 18 year-old self taught full-stack developer,{' '}
            <span className="opacity-80">
              currently studying computer engineering at University of Waterloo.
            </span>
          </p>
        </BentoCard>
      </FadeInChild>

      <FadeInChild>
        <BentoCard className="flex flex-col justify-between items-center md:items-start">
          <p className="text-2xl sm:text-3xl font-semibold leading-tight mb-4 ">
            My Tech Stack.
          </p>
          <FadeIn list delay={0.15} className="flex flex-wrap gap-6 text-3xl md:text-4xl mb-8 justify-center md:items-start">
            {icons.map((icon, index) => {
              return <FadeInChild key={index}>{icon}</FadeInChild>;
            })}
          </FadeIn>
          <p className="text-sm opacity-80">
            This website was made using Next.js
          </p>
        </BentoCard>
      </FadeInChild>
    </FadeIn>
  );
}
