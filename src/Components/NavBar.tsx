const NavBar = () => {
  return (
    <span className="sticky top-[30px] flex justify-center  z-1">
      <div className="bg-gray-300 w-1/2 rounded-xl backdrop-blur-sm flex flex-row justify-between items-center px-4">
        <a className="text-3xl font-bold text-blue-50" href="/">
          Pavan
        </a>

        <div className="flex py-4 gap-7">
          <a
            href="#projects"
            className="text-white hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-white hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </span>
  );
};

export default NavBar;
