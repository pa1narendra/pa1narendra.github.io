const NavBar = () => {
  return (
    <span className="flex justify-center my-5 backdrop-blur-lg sticky">
      <div className=" bg-gray-400 w-1/2 rounded-xl flex flex-row justify-between items-center px-4">
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
