import BentoCard from '@/components/BentoCard';
import React from 'react';
import FadeIn from '@/components/FadeIn';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { HiMenuAlt3 } from 'react-icons/hi';
import ThemeToggle from '@/components/ThemeToggle';
import NavLink from './components/NavLink';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const NavLinks = () => {
    return (
      <>
        <NavLink name="Projects." href="/projects" />
        <NavLink name="Experience." href="/experience" />
      </>
    );
  };
  return (
    <FadeIn className="w-full">
      <BentoCard className="!px-8 !py-6 flex justify-between items-center ">
        <ThemeToggle />

        <div className="text-lg font-semibold gap-6 hidden md:flex">
          <NavLinks />
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Button variant="ghost" size="icon">
              <HiMenuAlt3 className="text-3xl" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex md:flex-row flex-col gap-8 items-center justify-center h-full bg-background/95 md:hidden w-2/3">
            <NavLinks />
          </SheetContent>
        </Sheet>
      </BentoCard>
    </FadeIn>
  );
}
