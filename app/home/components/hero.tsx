import BentoCard from "@/components/bento-card";

export default function Hero() {
  return (
    <BentoCard className="group grid text-center md:text-left">
      <h1 className="place-self-center font-semibold leading-tight tracking-tighter">
        <span className="mb-2 inline-block text-4xl sm:text-5xl md:text-6xl">
          Sunnie Kapar
        </span>
        <br />
        <span className="bg-gradient-to-b from-accent to-accent/20 bg-clip-text text-2xl text-transparent transition-all duration-500 sm:text-3xl md:text-4xl md:group-hover:bg-accent/80">
          is a Full Stack developer studying Computer Engineering.
        </span>
      </h1>
    </BentoCard>
  );
}
