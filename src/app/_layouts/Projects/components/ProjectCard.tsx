import { ProjectDataProps } from '@/data';
import Image from 'next/image';

interface ProjectCardData extends ProjectDataProps {}

export default function ProjectCard({
  imageAlt,
  projectName,
  projectDate,
  projectPage,
  projectShortDescription,
}: ProjectCardData) {
  return (
    <>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-background to-transparent bg-cover">
        <Image
          src={`https://sunniekapar.github.io/portfolio/images/${projectPage}.png`}
          alt={imageAlt}
          key={projectPage}
          quality={80}
          width={500}
          height={375}
          priority
          className="aspect-[4/3] pointer-events-none min-h-full min-w-full !object-cover duration-300 scale-100 brightness-90 select-none group-hover:scale-105 group-hover:brightness-[20%]"
        />
      </div>

      <div className="absolute z-10 flex flex-wrap items-center my-4 space-x-2 text-sm xl:text-lg  duration-300 ease-out select-none h-fit px-8 bottom-4 opacity-0 translate-y-32 group-hover:opacity-100 group-hover:-translate-y-0">
        <h2 className="font-semibold text-secondary dark:text-primary">
          {projectName}
        </h2>
        <p className="italic font-normal text-secondary/75 dark:text-muted-foreground">
          — {projectDate}
        </p>
        <p className="!ml-0 basis-full text-secondary/75 dark:text-muted-foreground">
          {projectShortDescription}
        </p>
      </div>
    </>
  );
}
