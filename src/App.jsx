import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

import Skills from "./pages/Skills";

import Achievements from "./pages/Achievements";


function App() {
  return (
    <div className=" min-w-screen min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="w-full pt-24 px-6">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/volunteer" element={<Volunteer />} /> */}
          <Route path="/achievements" element={<Achievements />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
