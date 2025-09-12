import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

import Skills from "./pages/Skills";

import Achievements from "./pages/Achievements";


function App() {
  return (
    <div className=" min-w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Navbar />
      <main className="w-[90%] overflow-x-hidden mx-auto pt-24 px-6 flex-grow">
        {/* <Routes> */}
        {/* <Route path="" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="skills" element={<Skills />} /> */}
        {/* <Route path="/volunteer" element={<Volunteer />} /> */}
        {/* <Route path="achievements" element={<Achievements />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        {/* </Routes> */}
        <section id="about" className="scroll-mt-24"><About /></section>
        <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <section id="experience" className="scroll-mt-24"><Experience /></section>
        <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <section id="skills" className="scroll-mt-24"><Skills /></section>
        <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <section id="education" className="scroll-mt-24"><Education /></section>
        <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <section id="achievements" className="scroll-mt-24"><Achievements /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
