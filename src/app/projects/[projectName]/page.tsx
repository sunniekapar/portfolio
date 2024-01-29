import { projectData } from '@/data';
import { notFound } from 'next/navigation';
import Test from './Test';

export function generateStaticParams() {
  return projectData.map((project) => {
    return {
      params: {
        projectName: project.projectPage,
      },
    };
  });
}

export default function Page({ params }: { params: { projectName: string } }) {
  const allPaths = generateStaticParams();
  const isValidPath = allPaths.some(
    (path) => path.params.projectName === params.projectName
  );
  if (!isValidPath) notFound();
  const project = projectData.find((p) => params.projectName === p.projectPage);
  return (
    <Test {...project!} />
  );
}
