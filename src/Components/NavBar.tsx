import "../App.css";

const NavBar = () => {
  return (
    <div className="navbar sticky top-[30px] flex justify-center h-16 z-1">
      <div className="bg-opacity-10 bg-gray-400 w-3/4 md:w-1/2 rounded-xl backdrop-blur-md flex flex-row justify-between items-center px-6">
        <a className="text-3xl font-bold text-blue-700" href="#">
          Pavan
        </a>

        <div className="flex py-4 gap-5">
          <a
            href="#about"
            className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-4 py-4 rounded-md transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-4 py-4 rounded-md transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-4 py-4 rounded-md transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
