import NavBar from "./Components/NavBar";
import LEDBoard from "./Components/LedBoard";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Demo from "./Components/Demo";

const App = () => {
  return (
    < div className="bg-zinc-800 text-gray-50">
      <NavBar />
      <Hero />
      <About />
      <LEDBoard word="Pavan Narendra" />
      <Projects />
        <Demo />
    </div>
  );
};

export default App;
