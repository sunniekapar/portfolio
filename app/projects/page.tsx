import FadeIn from "@/components/fade-in";
import NavigationMenu from "@/components/navigation-menu";
import Template from "@/components/template";
import { projectData } from "@/data";
import Link from "next/link";
import { HiBriefcase, HiMiniHome } from "react-icons/hi2";
import Background from "./components/background";
import ProjectCard from "./components/project-card";

export const metadata = {
  title: "Projects | Sunnie Kapar",
  description: "Sunnie Kapar - Projects Tab",
};

export default function page() {
  const navigationMenuButtons = [
    { Icon: HiMiniHome, label: "Home", href: "/" },
    { Icon: HiBriefcase, label: "Experience", href: "/experience" },
  ];

  return (
    <>
      <Background />
      <Template className="max-w-screen-xl">
        <FadeIn>
          <div className="mb-12">
            <h1 className="mb-8 text-5xl font-semibold"> Projects.</h1>
            <p className="mb-1 font-medium">
              Here are some of the projects I have been building over the past
              year.
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              View all projects on{" "}
              <Link
                className="cursor-pointer font-semibold underline underline-offset-4"
                href="https://github.com/sunniekapar"
                target="_blank"
              >
                GitHub.
              </Link>
            </p>

            <NavigationMenu buttons={navigationMenuButtons} />
          </div>

          <FadeIn staggerChildren={0.2} className="grid gap-8 md:grid-cols-2">
            {projectData.map((project) => {
              return <ProjectCard key={project.title} {...project} />;
            })}
          </FadeIn>
        </FadeIn>
      </Template>
    </>
  );
}
