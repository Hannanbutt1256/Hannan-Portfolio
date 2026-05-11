import { Suspense, lazy } from "react";
import Hero from "./components/Hero/Hero";
import ScrollReveal from "./common/ScrollReveal";
import FloatingNav from "./components/FloatingNav/FloatingNav";
import BackgroundGlow from "./components/BackgroundGlow/BackgroundGlow";

const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects   = lazy(() => import("./components/Projects/Projects"));
const Skills     = lazy(() => import("./components/Skills/Skills"));
const Education  = lazy(() => import("./components/Education/Education"));
const Contact    = lazy(() => import("./components/Contact/Contact"));
const Footer     = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <BackgroundGlow />
      <FloatingNav />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <ScrollReveal delay={0}>
            <Experience />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Projects />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Skills />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Education />
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Contact />
          </ScrollReveal>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
