import BentoCard from "@/components/bento-card";
import FadeIn from "@/components/fade-in";
import Image from "next/image";
import React from "react";
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
    <FadeIn className="group">
      <div className="relative mb-4 aspect-[2/1]">
        <Image
          quality={1}
          src={`/images/experience/${href}.png`}
          alt={role}
          fill
          className="absolute inset-0 object-cover opacity-0 blur-3xl saturate-200 transition-opacity duration-300 ease-smooth group-hover:opacity-40"
        />
        <Image
          src={`/images/experience/${href}.png`}
          alt={role}
          fill
          quality={100}
          className="relative rounded-lg object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium">
          {company} <span className="text-accent-foreground"> — {date}</span>
        </h3>
        <p className="self-center text-accent-foreground">{description}</p>
      </div>
    </FadeIn>
  );
}
