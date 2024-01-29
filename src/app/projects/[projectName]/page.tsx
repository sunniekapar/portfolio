import { projectData } from '@/data';
import { notFound } from 'next/navigation';
import Test from './Test';

export function generateStaticParams() {
   return [{ projectName: '1' }, { projectName: '2' }, { projectName: '3' }]
}

export default function Page({ params }: { params: { projectName: string } }) {
  const project = projectData.find((p) => params.projectName === p.projectPage);
  return (
    <Test {...project!} />
  );
}
