import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import Background from "./components/background";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Socials from "./components/socials";
import Technologies from "./components/technologies";
import ProjectsHeader from "./components/projects-header";
import ProjectsCarousel from "./components/projects-carousel";

export default function page() {
  return (
    <>
      <Background />
      <Template className="space-y-2.5">
        <FadeIn className="space-y-2.5">
          <Navbar />
          <FadeIn className="grid gap-2.5 lg:grid-cols-ten-seven">
            <Hero />
            <Socials />
          </FadeIn>
          <FadeIn className="grid gap-2.5 lg:grid-cols-seven-ten">
            <AboutMe />
            <Technologies />
          </FadeIn>
          <ProjectsHeader />
          <ProjectsCarousel />
          <Footer />
        </FadeIn>
      </Template>
    </>
  );
}
