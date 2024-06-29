import NavigationMenu from "@/components/navigation-menu";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import { projectData } from "@/data";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import SocialButton from "@/components/social-button";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

export async function generateStaticParams() {
  return projectData.map((project) => {
    return { slug: project.title };
  });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let project = projectData.find((post) => post.title === params.slug);
  if (!project) {
    return;
  }

  let { title, summary: description } = project;

  return {
    title: `${title} | Sunnie Kapar`,
    description,
    openGraph: {
      title: `${title} - Sunnie Kapar`,
      description,
      type: "website",
      url: `https://sunniekapar.com/project/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Sunnie Kapar`,
      description,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const navButtons = [{ Icon: FiArrowLeft, label: "Back", href: "/projects" }];
  const clean = (slug: string) => slug.toLowerCase().replaceAll(" ", "-");
  let project = projectData.find(
    (project) => clean(project.title) === params.slug,
  );
  if (!project) return;
  const { title, description, tags } = project;
  const cleanTitle = clean(title);
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-background overflow-clip opacity-15 duration-1000 ease-smooth">
        <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
        <div className="absolute -left-20 h-full w-1/4 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-3/4 w-5/6 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)),transparent,transparent)] blur-3xl" />
      </div>
      <Template className="grid min-h-dvh gap-10 lg:grid-cols-2">
        <FadeIn className="max-w-[60ch] place-self-center">
          <div className="mb-5 flex flex-wrap items-baseline gap-8">
            <h1 className="text-6xl font-semibold">{title}.</h1>
            <span className="flex items-center gap-4">
              <SocialButton
                icon={<SiGithub className="text-2xl" />}
                description="Repository"
                href={`https://github.com/sunniekapar/${cleanTitle}`}
              />

              {project.href ? (
                <SocialButton
                  description={"Website"}
                  icon={<FiExternalLink />}
                  href={project.href}
                />
              ) : null}
            </span>
          </div>

          <FadeIn staggerChildren={0.1} className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="rounded-full bg-accent-foreground px-3 py-1 text-xs text-accent transition hover:bg-accent hover:text-accent-foreground"
              >
                {tag}
              </p>
            ))}
          </FadeIn>

          <div className="mb-8">{description}</div>

          <NavigationMenu buttons={navButtons} />
        </FadeIn>

        <div className="relative aspect-[4/3] w-full max-w-[600px] animate-appear place-self-center rounded-lg duration-1000 ease-smooth">
          <div className="absolute -inset-0.5 h-full w-full animate-tilt rounded-lg bg-gradient-to-tr from-accent to-accent-foreground opacity-100 blur-xl" />
          <Image
            src={`/images/projects/${cleanTitle}.jpg`}
            alt={title}
            fill
            className="pointer-events-none relative rounded-lg object-cover"
          />
        </div>
      </Template>
    </>
  );
}
