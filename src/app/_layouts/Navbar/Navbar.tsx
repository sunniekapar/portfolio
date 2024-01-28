import BentoCard from '@/components/BentoCard';
import React from 'react';
import FadeIn, { FadeInChild } from '@/components/FadeIn';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { HiMenuAlt3 } from 'react-icons/hi';
import NavLink from './components/NavLink';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const NavLinks = () => {
    return (
      <>
        <FadeInChild>
          <NavLink name="Projects." href="/projects" />
        </FadeInChild>
        <FadeInChild>
          <NavLink name="Experience." href="/experience" />
        </FadeInChild>
      </>
    );
  };
  return (
    <FadeIn className="w-full">
      <BentoCard className="!px-8 !py-6 flex justify-between items-center ">
        <ThemeToggle />

        <FadeIn
          delay={0.25}
          list
          className="text-lg font-semibold gap-6 hidden md:flex"
        >
          <NavLinks />
        </FadeIn>

        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <HiMenuAlt3 className="text-3xl" />
          </SheetTrigger>
          <SheetContent className="bg-background/95 md:hidden w-2/3">
            <FadeIn
              list
              delay={0.15}
              className="h-full flex flex-col gap-8 text-2xl items-center justify-center"
            >
              <NavLinks />
            </FadeIn>
          </SheetContent>
        </Sheet>
      </BentoCard>
    </FadeIn>
  );
}
