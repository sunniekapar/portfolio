import { projectData } from '@/data';
import Test from './Test';

export function generateStaticParams() {
  return projectData.map((project) => {
    return { projectName: project.projectPage };
  });
}

export default function Page({ params }: { params: { projectName: string } }) {
  const project = projectData.find((p) => params.projectName === p.projectPage);
  return (
    <Test {...project!} />
  );
}
