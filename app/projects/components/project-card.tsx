import BentoCard from "@/components/bento-card";
import FadeIn from "@/components/fade-in";
import { ProjectDataProps } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ title, summary }: ProjectDataProps) {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  return (
    <Link href={`/projects/${slug}`}>
      <BentoCard className="!p-2">
        <FadeIn className="group flex flex-col gap-4 hover:cursor-pointer sm:grid sm:grid-cols-four-ten">
          <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-gradient-to-br from-background to-transparent bg-cover">
            <Image
              src={`/images/projects/${slug}.jpg`}
              alt={title}
              fill
              className="relative aspect-[4/3] object-cover"
            />
          </div>

          <div className="flex h-full flex-col justify-center gap-4 px-4 pb-4">
            <span className="flex items-center gap-4">
              <h3 className="font-semibold"> {title} </h3>
              <FaArrowRight className="-translate-x-1 scale-95 opacity-0 duration-200 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
            </span>
            <p className="whitespace-pre-wrap text-muted-foreground">
              {summary}
            </p>
          </div>
        </FadeIn>
      </BentoCard>
    </Link>
  );
}
