'use client';

import FadeIn from '@/components/FadeIn';
import ProjectDescription from '@/app/projects/_components/ProjectDescription';
import { projectData } from '@/data';
import React from 'react';
import GlowSeparator from '@/components/GlowSeparator';
import Link from 'next/link';
import { HiMiniHome } from 'react-icons/hi2';
import { HiBriefcase } from 'react-icons/hi';
import NavigationMenu from '@/components/NavigationMenu';

export default function page() {
  const navigationMenuButtons = [
    { Icon: HiMiniHome, label: 'Home', href: '/' },
    { Icon: HiBriefcase, label: 'Experience', href: '/experience' },
  ];

  return (
    <main className="relative overflow-clip pb-12">
      <div className="animate-fade-in duration-1000">
        <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        <div className="absolute rotate-12 top-40 -left-20 h-3/4 w-1/2 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] opacity-25 blur-3xl" />
        <div className="absolute rotate-12 -right-20 top-96 h-3/4 w-1/2 bg-[radial-gradient(ellipse_at_right,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
      </div>

      <FadeIn className="relative z-10 max-w-screen-md mx-auto px-8 py-16">
        <div className="mb-8">
          <h1 className="mb-8 text-5xl font-semibold"> Projects.</h1>

          <p className="mb-2 font-medium">
            Here are some of the projects I have been building over the past
            year.
          </p>
          <p className="mb-8 text-muted-foreground text-sm">
            View all projects on{' '}
            <Link
              className="font-semibold underline-offset-4 underline cursor-pointer"
              href="https://github.com/sunniekapar"
              target="_blank"
            >
              GitHub.
            </Link>
          </p>

          <NavigationMenu buttons={navigationMenuButtons} />
        </div>

        <GlowSeparator />
        <FadeIn className="fade-siblings">
          {projectData.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <ProjectDescription {...project} />
                <GlowSeparator />
              </React.Fragment>
            );
          })}
        </FadeIn>
      </FadeIn>
    </main>
  );
}
