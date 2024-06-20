import BentoCard from "@/components/bento-card";
import React from "react";

export default function AboutMe() {
  return (
    <BentoCard className="flex items-center">
      <p className="text-center text-lg font-medium leading-snug sm:text-xl md:text-left lg:text-2xl">
        I&apos;m an 18 year-old self taught full-stack developer,{" "}
        <span className="">
          currently studying computer engineering at University of Waterloo.
        </span>
      </p>
    </BentoCard>
  );
}
