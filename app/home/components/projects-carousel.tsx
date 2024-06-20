"use client";
import React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import BentoCard from "@/components/bento-card";
import { projectData } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProjectCard from "./project-card";

export default function ProjectsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  return (
    <Carousel
      opts={{
        loop: true,
        dragFree: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {projectData.map((project, index) => {
          const slug = project.title.toLowerCase().replaceAll(' ', '-');
          return (
            <CarouselItem
              key={index}
              className="group aspect-[4/3] basis-full md:basis-1/2 xl:basis-1/3"
            >
              <Link href={`/projects/${slug}`}>
                <BentoCard className="!p-0">
                  <ProjectCard {...project} />
                </BentoCard>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
