import NavigationMenu from "@/components/navigation-menu";
import FadeIn from "@/components/fade-in";
import GlowSeparator from "@/components/glow-separator";
import Link from "next/link";
import { HiMiniHome, HiMiniFolder } from "react-icons/hi2";
import ExperienceCard from "./components/experience-card";
import Template from "@/components/template";
import Background from "./components/background";

export const metadata = {
  title: "Experience | Sunnie Kapar",
  description: "Sunnie Kapar - Experience",
};

export default function page() {
  const navigationMenuButtons = [
    { Icon: HiMiniHome, label: "Home", href: "/" },
    { Icon: HiMiniFolder, label: "Projects", href: "/projects" },
  ];
  return (
    <>
      <Background />
      <Template className="max-w-[1000px]">
        <FadeIn>
          <div className="mb-20">
            <h1 className="mb-10 text-5xl font-semibold">Experience.</h1>
            <p className="mb-4 font-medium">
              You can learn more about me on{" "}
              <span className="font-semibold italic underline underline-offset-2">
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/sunnie-kapar"
                >
                  Linkedin
                </Link>
              </span>{" "}
              or check out my{" "}
              <span className="font-semibold italic underline underline-offset-2">
                <Link href="/pdf/resume.pdf" target="_blank" locale={false}>
                  resume.
                </Link>
              </span>
            </p>
            <NavigationMenu buttons={navigationMenuButtons} />
          </div>
          <FadeIn className="space-y-20">
            <ExperienceCard
              role={"Full Stack Developer"}
              company="UWPM"
              date={"2024"}
              href={"uwpm"}
              description={
                "We are currently redesigning the website with a new tech stack. In the future, we will focus on hosting events for students"
              }
            />
            <ExperienceCard
              role={"Software Quality Analyst"}
              company="i4i"
              date={"2024"}
              href={"i4i"}
              description={
                "I am working on the quality control team, where we test software for pharmaceutical companies."
              }
            />
            <ExperienceCard
              role={"Lead Frontend Developer"}
              company="CKSS"
              date={"2022"}
              href={"frontend"}
              description={
                "I was the lead frontend developer at Craig Kielburger Secondary School, where I mentored and taught my peers basic web development skills. During this time, I created Druiven Box, a project for over 100 kids in the Halton District School Board’s computer engineering program."
              }
            />
          </FadeIn>
        </FadeIn>
      </Template>
    </>
  );
}
