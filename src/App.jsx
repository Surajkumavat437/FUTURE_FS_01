import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-[#07070A] min-h-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education/>
        <Contact />
       <Trial/>
      </main>
    </>
  );
}

export default App;
