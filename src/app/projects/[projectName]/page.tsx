'use client';

import FadeIn, { FadeInChild } from '@/components/FadeIn';
import NavigationMenu from '@/components/NavigationMenu';
import SocialButton from '@/components/SocialButton';
import { generateStaticParams, projectData } from '@/data';
import { notFound } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';

export default function Page({ params }: { params: { projectName: string } }) {
  const allPaths = generateStaticParams();
  const isValidPath = allPaths.some(
    (path) => path.params.projectName === params.projectName
  );
  if (!isValidPath) notFound();
  const project = projectData.find((p) => params.projectName === p.projectPage);
  const {
    imageSrc,
    imageAlt,
    projectDescription,
    projectName,
    projectTags,
    projectExternalLink,
    projectGithubLink,
    projectPage,
  } = project!;

  const navButtons = [{ Icon: FiArrowLeft, label: 'Back', href: '/projects' }];

  return (
    <div className="relative overflow-hidden">
      <div className="animate-fade-in duration-1000">
        <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        <div className="absolute -left-20  h-full w-1/4 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        <div className="absolute  -right-20 bottom-0 h-3/4 w-5/6 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
      </div>

      <main className="relative z-10 max-w-screen-2xl max-h-min min-h-[100vh] mx-auto px-8 py-16 lg:grid-cols-2 grid justify-center items-center gap-8">
        <FadeIn list className="max-w-[60ch]">
          <FadeInChild className="text-6xl font-semibold mb-4 flex items-baseline">
            {projectName}.
            <span className="ml-8 flex items-center gap-4">
              {projectGithubLink ? (
                <SocialButton
                  icon={<SiGithub className="text-2xl" />}
                  description="Repository"
                  href={projectGithubLink}
                />
              ) : null}
              {projectExternalLink ? (
                <SocialButton
                  description={'Website'}
                  icon={<FiExternalLink />}
                  href={projectExternalLink}
                />
              ) : null}
            </span>
          </FadeInChild>

          <FadeInChild className="mb-4">
            <FadeIn
              list
              delay={projectTags.length * 0.025}
              className="flex-wrap *:rounded-full text-teal-50 *:border *:border-white/20 *:bg-accent *:px-3  *:py-1 dark:accent dark:*:border-accent/15 *:text-xs  dark:*:bg-sky-500/10 flex gap-2"
            >
              {projectTags.map((tag, index) => {
                return (
                  <FadeInChild
                    key={index}
                    className="hover:brightness-95 dark:hover:brightness-125"
                  >
                    {tag}
                  </FadeInChild>
                );
              })}
            </FadeIn>
          </FadeInChild>

          <FadeInChild className="mb-8 font-medium">
            {projectDescription}
          </FadeInChild>

          <FadeInChild>
            <NavigationMenu buttons={navButtons} />
          </FadeInChild>
        </FadeIn>

        <FadeIn>
          <div className="aspect-[4/3] relative rounded-lg group w-fit self-center">
            <div className="animate-tilt absolute -inset-0.5 bg-gradient-to-r from-accent to-muted-foreground opacity-100 aspect-auto rounded-lg blur-xl group-hover:opacity-55 transition-opacity" />
            <Image
              src={`/images/${projectPage}.png`}
              alt={imageAlt}
              width="650"
              height="488"
              quality={100}
              className="relative rounded-lg aspect-[4/3] pointer-events-none max-h-full max-w-full object-cover duration-300"
            />
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
