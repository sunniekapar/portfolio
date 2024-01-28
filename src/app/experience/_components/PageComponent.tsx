'use client';
import FadeIn, { FadeInChild } from '@/components/FadeIn';
import GlowSeparator from '@/components/GlowSeparator';
import NavigationMenu from '@/components/NavigationMenu';
import { HiMiniHome, HiMiniFolder } from 'react-icons/hi2';
import ExperienceCard from './ExperienceCard';
import { useEffect } from 'react';
import Link from 'next/link';

export default function PageComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationMenuButtons = [
    { Icon: HiMiniHome, label: 'Home', href: '/' },
    { Icon: HiMiniFolder, label: 'Projects', href: '/projects' },
  ];
  return (
    <>
      <div className="relative overflow-hidden min-h-[100vh]">
        <div className="animate-fade-in duration-1000">
          <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
          <div className="absolute -left-20  h-full w-1/4 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
          <div className="absolute  -right-20 bottom-0 h-3/4 w-5/6 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        </div>

        <main className="relative z-10 max-w-screen-2xl max-h-min min-h-[100vh] mx-auto px-4 md:px-8 py-16 gap-4">
          <FadeIn className="relative z-10 max-w-screen-md mx-auto">
            <FadeInChild className="mb-8">
              <h1 className="mb-8 text-5xl font-semibold">Experience.</h1>
              <p className="mb-4 font-medium">
                You can learn more about me on{' '}
                <span className="font-semibold underline underline-offset-2 italic">
                  <a
                    target="_blank"
                    href="https://linkedin.com/in/sunnie-kapar"
                  >
                    Linkedin
                  </a>
                </span>{' '}
                or check out my{' '}
                <span className="font-semibold underline underline-offset-2 italic">
                  <Link href="/pdf/resume.pdf" target="_blank" locale={false}>
                    resume.
                  </Link>
                </span>
              </p>
              <NavigationMenu buttons={navigationMenuButtons} />
            </FadeInChild>

            <FadeInChild>
              <FadeIn list className="mx-auto">
                <GlowSeparator />
                <ExperienceCard
                  jobTitle={'Lead Frontend Developer'}
                  jobDate={'Dec. 2022'}
                  jobImage={
                    'https://source.unsplash.com/random/?MinimalRender&1'
                  }
                  jobDescription={[
                    'I was the lead frontend developer for Craig Kielburger Secondary School, where I mentored and taught my peers basic frontend skills.',
                    'During this time, I created my first-ever project called Druiven Box, for over 100 kids in the Halton District School Board computer engineering program.',
                    'This was my first-ever experience teaching others HTML, CSS, SCSS, and TypeScript, yet programming alone. I learned and taught skills like Bootstrap, image compression, and mobile-first design.',
                  ]}
                />
                <GlowSeparator />
              </FadeIn>
            </FadeInChild>
          </FadeIn>
        </main>
      </div>
    </>
  );
}
