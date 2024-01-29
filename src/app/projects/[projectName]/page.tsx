import { projectData } from '@/data';
import PageComponent from './PageComponent';

export function generateStaticParams() {
  return projectData.map((project) => {
    return { projectName: project.projectPage };
  });
}

export default function Page({ params }: { params: { projectName: string } }) {
  const project = projectData.find((p) => params.projectName === p.projectPage);
  return (
    <PageComponent {...project!} />
  );
}
