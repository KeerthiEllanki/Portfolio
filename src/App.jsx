import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="w-full mx-auto py-10 px-6">
        <About />
        <Education />
        <Experience/>
        <Skills/>
        <Achievements />
        {/* <Experience />
        <Projects />
        <Skills />
        <Volunteer />
        
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
