import React from "react";
import BentoCard from "@/components/bento-card";
import Image from "next/image";
import GlowSeparator from "@/components/glow-separator";
import FadeIn from "@/components/fade-in";
type ExperienceCard = React.ComponentProps<typeof BentoCard>;

interface ExperienceCardProps extends ExperienceCard {
  role: string;
  date: string;
  company: string;
  href: string;
  description: string;
}

export default function ExperienceCard({
  role,
  date,
  href,
  description,
  company,
}: ExperienceCardProps) {
  return (
    <FadeIn>
      <div className="relative aspect-[2/1] mb-10">
        <Image
          src={`/images/experience/${href}.jpg`}
          alt={role}
          fill
          className="relative rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 md:flex-row ">
        <div className=''>
          <h2 className="text-2xl font-semibold">{role}</h2>
          <h4 className="text-base font-medium italic text-accent-foreground">
            {company} — {date}
          </h4>
        </div>
        <GlowSeparator orientation="vertical" className='hidden md:block'/>
        <p className="leading-6 md:basis-[60ch]">{description}</p>
      </div>
    </FadeIn>
  );
}
