import React from "react";
import BentoCard from "@/components/bento-card";
import Link from "next/link";
import FlipLink from "./flip-link";

export default function Footer({ ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <footer {...props} className="w-full">
      <BentoCard className="flex flex-col items-center justify-between !px-6 !py-4 sm:flex-row">
        <p className="font-medium">Sunnie Kapar. </p>
        <FlipLink
          href="https://ece.engineering/"
          className="text-accent-foreground hover:text-accent"
        >
          ece.engineering
        </FlipLink>
      </BentoCard>
    </footer>
  );
}
