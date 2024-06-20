"use client";
import BentoCard from "@/components/bento-card";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import FlipLink from "./flip-link";

export default function Navbar() {
  return (
    <BentoCard className="flex items-center justify-between !px-8 !py-6">
      <div className="group relative size-8 rounded-full bg-accent transition duration-500 ease-smooth hover:shadow-md hover:shadow-accent-foreground">
        <div className="translate-x relative size-7 translate-x-4 translate-y-0.5 rounded-full bg-accent mix-blend-difference transition duration-500 group-hover:translate-x-0.5" />
      </div>

      <div className="hidden gap-6 text-lg font-medium md:flex">
        <NavLinks />
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <Button variant="ghost" size="icon">
            <HiMenuAlt3 className="text-3xl" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex h-full w-2/3 flex-col place-items-center justify-center gap-8 bg-background/95 md:hidden md:flex-row">
          <NavLinks />
        </SheetContent>
      </Sheet>
    </BentoCard>
  );
}

const NavLinks = () => {
  return (
    <>
      <FlipLink href="/projects" className="hover:text-accent">
        Projects.
      </FlipLink>
      <FlipLink href="/experience" className="hover:text-accent">
        Experience.
      </FlipLink>
    </>
  );
};
