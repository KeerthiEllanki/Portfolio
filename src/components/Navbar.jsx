import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name on the left with light blue color */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-sky-800 via-purple-800 to-blue-800 text-transparent bg-clip-text">KEERTHI REDDY ELLANKI</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {[
            "About",
            "Education",
            "Experience",
            "Projects",
            "Skills",
            "Volunteer",
            "Achievements",
          ].map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-black hover:text-sky-950 transition-colors duration-300"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
