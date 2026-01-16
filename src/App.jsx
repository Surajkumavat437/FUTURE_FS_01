import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-[#07070A] min-h-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <p className="fixed bottom-2 right-2 z-[9999] text-red-500 text-xs">
  BUILD-LATEST
</p>

      </main>
    </>
  );
}


export default App;
