import BentoCard from "@/components/bento-card";

export default function Hero() {
  return (
    <BentoCard className="group text-center md:text-left">
      <h1 className="font-semibold leading-tight tracking-tighter">
        <span className="mb-2 inline-block text-4xl sm:text-5xl md:text-6xl">
          Sunnie Kapar
        </span>
        <br />
        <span className="bg-gradient-to-b from-accent to-accent/20 bg-clip-text text-2xl text-transparent transition-all duration-500 md:group-hover:bg-accent/80 sm:text-3xl md:text-4xl">
          is a Full Stack developer studying Computer Engineering.
        </span>
      </h1>
    </BentoCard>
  );
}