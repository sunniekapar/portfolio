import { ProjectDataProps } from "@/data";
import Image from "next/image";

export default function ProjectCard({
  title,
  summary,
  date,
}: ProjectDataProps) {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  return (
    <>
      <div className="relative h-full w-full rounded-lg">
        <Image
          src={`/images/projects/${slug}.png`}
          alt={title}
          quality={80}
          fill
          className="pointer-events-none aspect-video min-h-full min-w-full scale-100 select-none rounded-lg object-cover brightness-90 duration-300 group-hover:scale-105 group-hover:brightness-[20%]"
        />
      </div>

      <div className="absolute bottom-4 z-10 my-4 flex h-fit translate-y-32 select-none flex-wrap items-center space-x-2 px-8 text-sm opacity-0 duration-300 ease-smooth group-hover:-translate-y-0 group-hover:opacity-100 xl:text-lg">
        <h2 className="font-semibold">{title}</h2>
        <p className="font-normal italic text-accent-foreground">— {date}</p>
        <p className="!ml-0 basis-full text-accent-foreground">{summary}</p>
      </div>
    </>
  );
}
