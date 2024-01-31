import React from 'react';
import BentoCard from '@/components/BentoCard';
import Image from 'next/image'
type ExperienceCard = React.ComponentProps<typeof BentoCard>;

interface ExperienceCardProps extends ExperienceCard {
  jobTitle: string;
  jobDate: string;
  jobImage: string;
  jobDescription: string[];
}

export default function ExperienceCard({
  jobTitle,
  jobDate,
  jobImage,
  jobDescription,
}: ExperienceCardProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 mt-8">
        {jobTitle}{' '}
        <span className="text-muted-foreground italic inline-block">— {jobDate}</span>
      </h2>
      <BentoCard className="rounded-3xl mb-8 !p-4 ">
        <div className="aspect-[2/1] w-full overflow-hidden rounded-xl bg-gradient-to-br from-background to-transparent bg-cover mb-8">
          <Image
            src={`/images/${jobImage}.png`}
            alt={jobTitle}
            width={600}
            height={300}
            quality={80}
            className="aspect-[2/1] rounded-xl min-w-full min-h-full object-cover"
          />
        </div>

        {jobDescription.map((paragraph, index) => {
          return (
            <p key={index} className="mb-2 leading-6">
              {paragraph}
            </p>
          );
        })}
      </BentoCard>
    </>
  );
}
