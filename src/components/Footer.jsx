import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 px-6 py-4 mt-4">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between">

        <p className="text-sm text-center md:text-right w-full md:w-auto">
          © {new Date().getFullYear()} - Keerthi Reddy Ellanki
        </p>

        <div className="flex space-x-4 mb-3 md:mb-0">
          <a
            href="https://www.linkedin.com/in/keerthi-reddy-ellanki/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/KeerthiEllanki/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:keerthireddyellanki303@gmail.com"
            className="hover:text-red-600"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Right Side - Copyright */}
        
      </div>
    </footer>
  );
};

export default Footer;
