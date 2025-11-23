import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

import Skills from "./pages/Skills";

import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className=" min-w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col relative">
      <Navbar />
      <div
        className="absolute inset-0 bg-contain bg-center bg-repeat opacity-20"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-background-with-waves-glow-vector-illustration-blue-background_1182-2394.jpg?semt=ais_hybrid&w=740&q=80')" }}
      ></div>
      <div className="relative z-10">
        <main className="w-[90%] overflow-x-hidden mx-auto pt-24 px-6 flex-grow">
          <section id="about" className="scroll-mt-24"><About /></section>
          <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <section id="experience" className="scroll-mt-24"><Experience /></section>
          <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <section id="projects" className="scroll-mt-24"><Projects /></section>
          <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <section id="skills" className="scroll-mt-24"><Skills /></section>
          <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <section id="education" className="scroll-mt-24"><Education /></section>
          <div className="my-18 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <section id="achievements" className="scroll-mt-24"><Achievements /></section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
