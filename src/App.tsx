import { useTheme } from './hooks/useTheme';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import EngineeringThinking from './components/EngineeringThinking';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="font-sans">
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <EngineeringThinking />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
