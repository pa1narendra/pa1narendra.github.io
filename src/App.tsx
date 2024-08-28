import HeroSection from "./Components/Herodemo";
import NavBar from "./Components/NavBar";
import Hero from "./Hero";
import "./index.css";

const App = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <Hero />
      <HeroSection />
    </div>
  );
};

export default App;
