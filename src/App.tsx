import About from "./Components/About";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import LEDBoard from "./Components/LedBoard";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <LEDBoard word="PAVAN NARENDRA" />
      <Hero />
      <About />
    </div>
  );
};

export default App;
