import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import More from "./Components/More";
import PreLoader from "./Components/PreLoader";
import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a data-fetching scenario
    const fetchData = async () => {
      try {
        // Simulate a delay, like an API call
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delay
        setIsLoading(false); // Once data is loaded, set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Hide preloader even if an error occurs
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        {/* Show the preloader while isLoading is true */}
        {isLoading && <PreLoader />}

        {!isLoading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/More" element={<More />} />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
