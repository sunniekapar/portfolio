import BentoCard from "@/components/bento-card";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiBun,
  SiExpo,
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

const icons = [
  <SiReact key="SiReact" />,
  <SiTypescript key="SiTypescript" />,
  <SiNextdotjs key="SiNextdotjs" />,
  <SiExpo key="SiExpo" />,
  <SiBun key="SiBun" />,
  <SiExpress key="SiExpress" />,
  <SiMongodb key="SiMongodb" />,
  <SiSupabase key="SiSupabase" />,
  <SiTailwindcss key="SiTailwindcss" />,
  <SiFramer key="SiFramer" />,
];

export default function Technologies() {
  return (
    <BentoCard className="relative flex w-full flex-col items-center justify-between md:items-start ">
      <h2 className="mb-6 text-2xl font-semibold leading-tight sm:text-3xl">
        What I like to use.
      </h2>
      <div className="mb-6 flex flex-wrap justify-center gap-6 text-3xl text-accent-foreground md:items-start md:text-4xl">
        {icons.map((icon) => {
          return (
            <div key={icon.key} className="group">
              {icon}
              <span className="absolute -right-5 -bottom-5 text-[150px] text-accent-foreground opacity-0 duration-200 hover:!opacity-0 group-hover:opacity-15">
                {icon}
              </span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
}
