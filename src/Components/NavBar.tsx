import Hero from "./Hero";
import "../App.css";
// import {motion,Variants} from 'framer-motion';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar sticky top-[30px] flex justify-center z-10">
        <div className="bg-opacity-10 bg-black w-3/4 md:w-1/2 rounded-xl backdrop-blur-md flex flex-row justify-between items-center px-6">
          <a className="text-3xl font-bold text-blue-700" href="/">
            Pavan
          </a>

          <div className="flex py-4 gap-5">
            <a
              href="#projects"
              className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md transition duration-300 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-blue-700 hover:bg-blue-400 hover:text-slate-900 px-3 py-2 rounded-md transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default NavBar;
