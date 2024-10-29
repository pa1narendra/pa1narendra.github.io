import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import More from "./Components/More";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/More" element={<More />} />
    </Routes>
  );
};
export default App;
