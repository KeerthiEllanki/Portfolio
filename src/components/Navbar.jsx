import { Link } from "react-router-dom";

const Navbar = () => {

  const navItems = [
    { name: "About", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    // { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    // { name: "Volunteer", path: "/volunteer" },
    { name: "Achievements", path: "/achievements" },
   
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name on the left with light blue color */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-sky-800 via-purple-800 to-blue-800 text-transparent bg-clip-text">KEERTHI REDDY ELLANKI</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
        {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-black hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
