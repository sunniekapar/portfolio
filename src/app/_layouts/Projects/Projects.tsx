import BentoCard from '@/components/BentoCard';
import FadeIn from '@/components/FadeIn';
import ProjectCard from '@/app/_layouts/Projects/components/ProjectCard';
import React, { useEffect, useState } from 'react';
import { projectData } from '@/data';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

export default function Projects() {
  const [slidesPerView, setSlidesPerView] = useState(3); // Default value

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesPerView(1); // For small screens
    } else if (width < 1024) {
      setSlidesPerView(2); // For medium screens
    } else {
      setSlidesPerView(3); // For large screens
    }
  };

  useEffect(() => {
    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'free',
      slides: {
        perView: slidesPerView,
        spacing: 16,
      },
      defaultAnimation: {
        duration: 1500,
      }
    },
    [
      (slider) => {
        let timeout : any;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 7500);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  const ScrollingText = () => {
    return (
      <p className="flex gap-8 font-semibold text-4xl whitespace-nowrap animate-infinite-scroll tracking-widest">
        <span className="font-light text-muted-foreground">Projects.</span>
        <span>Projects.</span>
        <span className="font-light text-muted-foreground">Projects.</span>
        <span> Projects.</span>
      </p>
    );
  };

  return (
    <>
      <FadeIn>
        <BentoCard className="mt-4 !py-6 !px-8">
          <div className="overflow-hidden flex justify-center gap-8 items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ScrollingText />
            <ScrollingText />
            <ScrollingText />
            <ScrollingText />
          </div>
        </BentoCard>

        <div className="mt-4 min-w-full">
          <div ref={ref} className="keen-slider">
            {projectData.map((project, index) => {
              return (
                <Link
                  key={index}
                  href={`/projects/${project.projectPage}`}
                  passHref
                  className="keen-slider__slide"
                >
                  <BentoCard className="flex-shrink-0 ease-out bg-cover group aspect-[4/3] !duration-0 bg-gradient-to-br from-primary-foreground to-background !p-0 ">
                    <ProjectCard {...project} />
                  </BentoCard>
                </Link>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
