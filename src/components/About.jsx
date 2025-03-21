import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Headshot from "../assets/images/headshot.png";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row items-center justify-between mb-10 pt-46 px-10 pb-10">
      {/* Left Side - Text Content */}
      <div className="md:w-2/3 text-left">
        <h2 className="text-3xl font-bold text-sky-900">I'm an End-to-End Developer</h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
        Hey there! 👋 I'm a full-stack software developer with cloud expertise and passionate about building scalable, user-friendly solutions that make a real impact. From crafting seamless 
        digital experiences to optimizing backend systems for efficiency, I love turning ideas into high-performing applications.
        </p>

        <p className="mt-2 text-gray-700">
        When I'm not glued to my screen, you'll probably find me with my nose in a book.
        Beyond code, I’m all about creativity—whether it’s arts and crafts ✍️🎨, photography 📸, or experimenting in the kitchen 🔪. Keeps life interesting!
        </p>

        <p className="mt-2 text-gray-700">
        Always up for a good tech chat, brainstorming creative ideas, or learning something new. Let’s connect!<br/>
        Mail me at 'keerthireddyellanki303@gmail.com' or call me at '+1(470)-929-7757'
        </p>

        {/* Strengths with Dots */}
        <div className="mt-6">  
          <p className="text-gray-700">
            Adaptable • Results-Driven • Problem-Solver • Analytical • Quick Learner • Cloud Enthusiast 
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-wrap gap-4">

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/keerthi-reddy-ellanki" // Replace with actual LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 px-2 py-2 bg-sky-100 rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/KeerthiEllanki/" // Replace with actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 px-2 py-2 bg-sky-100 rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <FaGithub className="w-8 h-8" />
          </a>

          {/* Email Button */}
          <a
            href="mailto:keerthireddyellanki303@gmail.com" // Replace with your actual email
            className="flex items-center justify-center w-16 h-16 px-2 py-2 bg-sky-100 rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf" // Replace with actual resume link
            download="Keerthi_Reddy_Ellanki_Resume.pdf"
            className="flex items-center justify-center px-2 py-2 bg-sky-100 text-white font-semibold rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <IoDocumentText className="mr-2 w-8 h-8"/> Resume
          </a>

        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
        <div className="relative w-52 h-52 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-sky-500 via-sky-400 to-sky-300 w-full h-full rounded-full"></div>
          <img
            src={Headshot}
            alt="Keerthi Reddy Ellanki"
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      <hr className="mt-10 border-t border-gray-300" />
    </section>
  );
};

export default About;
