import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Headshot from "../assets/images/headshot2.png";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row items-center justify-between pt-15 px-10 pb-10">
      {/* Left Side - Text Content */}
      <div className="md:w-2/3 text-left">
        <h2 className="text-4xl font-bold text-sky-900"> I am a Full-Stack Developer</h2>
        <h2 className="text-2xl font-bold text-sky-900 mt-2">Specialized in Cloud, DevOps & Distributed Systems</h2>
        <h3 className="text-xl font-bold text-sky-900 mt-6">React · Angular · Spring Boot · FastAPI · Python · Java · AWS · CI/CD</h3>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I’m a full-stack software developer with strong experience in building scalable, cloud-native applications across the entire development lifecycle.
          I work across frontend, backend, and DevOps—creating intuitive user interfaces, designing robust APIs, and deploying secure systems on AWS with CI/CD best practices.
        </p>

        <p className="mt-2 text-gray-700">
          My engineering approach focuses on clean architecture, performance, and developer experience.
          I enjoy solving complex problems, optimizing workflows, and delivering products that are both user-centric and technically sound.
        </p>

        <p className="mt-2 text-gray-700">
          Outside of tech, I’m passionate about reading 📚, photography 📸, and creative projects like arts & crafts ✍️🎨, and experimenting with new recipes in the kitchen.
          These help me stay grounded and keep my creativity flowing.
        </p>

        <p className="mt-2 text-gray-700">
          Always up for a good tech chat, brainstorming creative ideas, or learning something new. Let’s connect!<br />
          Feel free to reach out at <strong>keerthireddyellanki303@gmail.com</strong>.
        </p>

        {/* Strengths with Dots */}
        <div className="mt-6">
          <p className="text-gray-700">
            Adaptable • Impact-Driven • Problem-Solver • Analytical • Quick Learner • Cloud Enthusiast
          </p>
        </div>

        <div className="mt-6 flex flex-wrap">
          {/* Resume Button */}
          <a
            href="/Portfolio/KeerthiReddyEllanki_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-sky-900 text-sky-100 font-semibold rounded-3xl hover:bg-sky-200 hover:text-sky-900 transition-colors duration-300 shadow-lg"
          >
            Download Resume
          </a>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-wrap gap-4">

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/keerthi-reddy-ellanki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 p-2 bg-sky-900 rounded-full hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <FaLinkedin className="w-8 h-8 text-sky-100 hover:text-sky-900 transition-colors duration-300" />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/KeerthiEllanki/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 p-2 bg-sky-900 rounded-full hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <FaGithub className="w-8 h-8 text-sky-100 hover:text-sky-900 transition-colors duration-300" />
          </a>

          {/* Email Button */}
          <a
            href="mailto:keerthireddyellanki303@gmail.com"
            className="flex items-center justify-center w-16 h-16 p-2 bg-sky-900 rounded-full hover:bg-sky-200 transition duration-300 shadow-lg"
          >
            <FaEnvelope className="w-7 h-8 text-sky-100 hover:text-sky-900 transition-colors duration-300" />
          </a>



        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
        <div className="relative w-100 h-100 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-sky-500 via-sky-400 to-sky-300 w-full h-full "></div>
          <img
            src={Headshot}
            alt="Keerthi Reddy Ellanki"
            className="relative w-full h-full rounded-full object-cover  border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
