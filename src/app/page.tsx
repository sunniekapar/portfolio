'use client';

import Header from './_layouts/Header/Header';
import Navbar from '@/app/_layouts/Navbar/Navbar';
import Projects from './_layouts/Projects/Projects';
import FadeIn from '@/components/FadeIn';
import Footer from './_layouts/Footer/Footer';
import Details from '@/app/_layouts/Details/Details';

export default function page() {
  return (
    <div className="relative overflow-hidden">
      <div className="animate-fade-in duration-1000">
        <div className="absolute top-0 h-1/4 w-full bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        <div className="absolute -rotate-12 -top-40 -left-20 h-3/4 w-1/2 bg-[radial-gradient(ellipse_at_left,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        <div className="absolute -rotate-12 -right-20 top-96 h-3/4 w-1/2 bg-[radial-gradient(ellipse_at_right,hsl(var(--accent)),transparent,transparent)] opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-52 w-1/3 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)),transparent,transparent)] blur-3xl opacity-50" />
      </div>

      <main className="relative z-10 max-w-screen-2xl mx-auto px-4 lg:px-8 py-16">
        <FadeIn>
          <Navbar />
          <Header />
          <Details />
          <div id="projects">
            <Projects />
          </div>
          <Footer className="mt-4" />
        </FadeIn>
      </main>
    </div>
  );
}
