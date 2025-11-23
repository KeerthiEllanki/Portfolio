
const Navbar = () => {

  const navItems = [
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Education", path: "#education" },
    { name: "Achievements", path: "#achievements" },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-900 shadow-md z-50">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-100">KEERTHI REDDY ELLANKI</h1>

        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="text-sky-200 hover:text-stone-50 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
