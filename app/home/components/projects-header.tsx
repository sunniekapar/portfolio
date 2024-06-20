import BentoCard from "@/components/bento-card";

const ScrollingText = () => {
  return (
    <p className="flex animate-infinite-scroll gap-8 whitespace-nowrap text-4xl font-semibold tracking-widest text-accent">
      <span className="font-light text-accent-foreground">Projects.</span>
      <span>Projects.</span>
      <span className="font-light text-accent-foreground">Projects.</span>
      <span> Projects.</span>
    </p>
  );
};

export default function ProjectsHeader() {
  return (
    <BentoCard className="!px-8 !py-6">
      <div className="flex items-center justify-center gap-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ScrollingText />
        <ScrollingText />
        <ScrollingText />
        <ScrollingText />
      </div>
    </BentoCard>
  );
}
