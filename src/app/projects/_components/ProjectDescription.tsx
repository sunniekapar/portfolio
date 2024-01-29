import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import FadeIn, { FadeInChild } from '../../../components/FadeIn';
import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import Image from 'next/image';
import { ProjectDataProps } from '@/data';

interface ProjectDescriptionProps extends ProjectDataProps {}

export default function ProjectDescription({
  projectPage,
  projectName,
  projectShortDescription,
  imageAlt,
}: ProjectDescriptionProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <FadeInChild>
      <BentoCard className="!p-2 rounded-3xl">
        <Link href={`/projects/${projectPage}`} passHref>
          <FadeIn
            list
            className="flex flex-col sm:grid sm:grid-cols-four-ten gap-4 group hover:cursor-pointer"
          >
            <FadeInChild className="aspect-video lg:aspect-[4/3]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-background to-transparent bg-cover">
                <Image
                  src={`/images/${projectPage}.png`}
                  alt={imageAlt}
                  width="800"
                  height="600"
                  className="aspect-video lg:aspect-[4/3] object-cover rounded-lg max-h-full max-w-full min-w-full min-h-full"
                />
              </div>
            </FadeInChild>

            <FadeInChild className="flex flex-col gap-4 justify-center px-4 pb-4">
              <span className="flex gap-4 items-center">
                <h3 className="font-semibold "> {projectName} </h3>
                <FaArrowRight className="-translate-x-1 opacity-0 scale-95 group-hover:scale-100 duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
              <p className="text-muted-foreground whitespace-pre-wrap">{projectShortDescription}</p>
            </FadeInChild>
          </FadeIn>
        </Link>
      </BentoCard>
    </FadeInChild>
  );
}
