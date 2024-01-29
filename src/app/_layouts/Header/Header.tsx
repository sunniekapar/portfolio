import BentoCard from '@/components/BentoCard';
import FadeIn from '@/components/FadeIn';
import SocialButton from '@/components/SocialButton';
import { SiGithub, SiGmail, SiLinkedin, SiX } from 'react-icons/si';

export default function Header() {
  const socialButtonsData = [
    {
      icon: <SiGmail />,
      description: 'kaparsunnie@gmail.com',
      href: 'mailto:kaparsunnie@gmail.com',
    },
    {
      icon: <SiGithub />,
      description: 'sunniekapar',
      href: 'https://github.com/sunniekapar',
    },
    {
      icon: <SiLinkedin />,
      description: 'Sunnie Kapar',
      href: 'https://www.linkedin.com/in/sunnie-kapar/',
    },
    {
      icon: <SiX />,
      description: 'sunniekapar',
      href: 'https://www.x.com/sunniekapar',
    },
  ];
  return (
    <>
      <FadeIn className="mt-4 grid xl:grid-cols-ten-seven gap-4">
        <BentoCard className="group group text-center md:text-left">
          <h1 className="leading-tight tracking-tighter font-semibold">
            <span className="inline-block text-4xl sm:text-5xl md:text-7xl mb-2">
              Sunnie Kapar
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl gradient-text group-hover:gradient-text-animate">
              is a Full Stack developer studying Computer Engineering.
            </span>
          </h1>
        </BentoCard>

        <BentoCard className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <p className="text-lg sm:text-2xl leading-tight">
            I love meeting new people and I&apos;m always up for a great
            conversation.
            <span className="opacity-80">
              {' '}
              Feel free to reach out and chat about anything.
            </span>
          </p>

          <FadeIn delay={0.3} className="mt-8 flex gap-6">
            {socialButtonsData.map((button, index) => (
              <SocialButton
                key={index}
                icon={button.icon}
                description={button.description}
                href={button.href}
              />
            ))}
          </FadeIn>
        </BentoCard>
      </FadeIn>
    </>
  );
}
