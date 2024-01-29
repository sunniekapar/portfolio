import { projectData } from "@/data";
import PageComponent from "./PageComponent";

export function generateStaticParams() {
  return projectData.map((project) => {
    return {
      params: {
        projectName: project.projectPage,
      },
    };
  });
}
export default function page({ params }: { params: { projectName: string } }) {
  return (
    <PageComponent params={params} />
  )
}