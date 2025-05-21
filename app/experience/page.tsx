import FadeIn from "@/components/fade-in";
import NavigationMenu from "@/components/navigation-menu";
import Template from "@/components/template";
import Link from "next/link";
import { HiMiniFolder, HiMiniHome } from "react-icons/hi2";
import Background from "./components/background";
import ExperienceCard from "./components/experience-card";

export const metadata = {
  title: "Experience | Sunnie Kapar",
  description: "Sunnie Kapar - Experience",
};

const experiences = [
  {
    role: "Software Engineer",
    company: "HappyRobot",
    date: "2025",
    href: "happyrobot",
    description: "AI workflows for the future of communication.",
  },
  {
    role: "Software Engineer",
    company: "OICR",
    date: "2025",
    href: "oicr",
    description:
      "Building tools to make hereditary cancer research data more available to researchers.",
  },
  {
    role: "Frontend Lead",
    company: "Wat Street",
    date: "2024",
    href: "wat-street",
    description:
      "Developing visualizations for financial data and quantitative machine learning algorithms.",
  },
  {
    role: "Software Developer",
    company: "i4i",
    date: "2024",
    href: "i4i",
    description:
      "Built an internal tool to streamline and organize employee training resources.",
  },
  {
    role: "Fullstack Lead",
    company: "UWPM",
    date: "2024",
    href: "uwpm",
    description:
      "Making resources and opportunities more accessible for aspiring product managers.",
  },
];

export default function page() {
  const navigationMenuButtons = [
    { Icon: HiMiniHome, label: "Home", href: "/" },
    { Icon: HiMiniFolder, label: "Projects", href: "/projects" },
  ];
  return (
    <>
      <Background />
      <Template className="max-w-screen-lg">
        <FadeIn>
          <div className="mb-12">
            <h1 className="mb-8 text-5xl font-semibold">Experience.</h1>
            <p className="mb-4 font-medium text-muted-foreground">
              You can learn more about me on{" "}
              <span className="font-semibold italic underline underline-offset-2">
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/sunnie-kapar"
                >
                  Linkedin
                </Link>
              </span>
            </p>
            <NavigationMenu buttons={navigationMenuButtons} />
          </div>
          <FadeIn className="space-y-20">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.href}
                role={experience.role}
                company={experience.company}
                date={experience.date}
                href={experience.href}
                description={experience.description}
              />
            ))}
          </FadeIn>
        </FadeIn>
      </Template>
    </>
  );
}
