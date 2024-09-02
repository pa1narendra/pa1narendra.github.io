import Hero from "./Hero";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <span className="sticky top-[30px] flex justify-center z-1">
        <div className="bg-opacity-10 bg-black w-1/2 rounded-xl backdrop-blur-md flex flex-row justify-between items-center px-4">
          <a className="text-3xl font-bold text-blue-700" href="/">
            Pavan
          </a>

          <div className="flex py-4 gap-7">
            <a
              href="#projects"
              className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      </span>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default NavBar;
