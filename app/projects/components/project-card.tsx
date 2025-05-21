import FadeIn from "@/components/fade-in";
import { ProjectDataProps } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ title, summary }: ProjectDataProps) {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  return (
    <Link href={`/projects/${slug}`}>
      <FadeIn className="group flex flex-col gap-4 hover:cursor-pointer">
        <div className="group relative aspect-video w-full max-w-screen-sm rounded-sm bg-gradient-to-br from-background to-transparent bg-cover">
          <Image
            quality={1}
            src={`/images/projects/${slug}.png`}
            alt={title}
            fill
            className="absolute inset-0 object-cover opacity-0 blur-3xl saturate-200 transition-opacity duration-300 ease-smooth group-hover:opacity-80"
          />
          <Image
            src={`/images/projects/${slug}.png`}
            alt={title}
            fill
            className="relative aspect-video rounded-sm object-cover"
          />
        </div>

        <div className="flex h-full flex-col justify-center gap-1">
          <span className="flex items-center gap-4">
            <h3 className="font-medium"> {title} </h3>
            <FaArrowRight className="-translate-x-1 scale-95 opacity-0 duration-200 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
          </span>
          <p className="whitespace-pre-wrap text-accent-foreground">
            {summary}
          </p>
        </div>
      </FadeIn>
    </Link>
  );
}
