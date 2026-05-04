import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import ScrollReveal from "./common/ScrollReveal";
import FloatingNav from "./components/FloatingNav/FloatingNav";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ReparoIntro from "./components/ReparoIntro/ReparoIntro";

function App() {
  return (
    <ReparoIntro>
      <LoadingScreen />
      <FloatingNav />
      <div className="app-container">
        <main>
          <Hero />
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
        </main>
        <Footer />
      </div>
    </ReparoIntro>
  );
}

export default App;
