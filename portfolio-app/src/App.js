// import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Skills from "./components/Skills";
// import TranslationsI18next from "./components/TranslationsI18next";
import Work from "./components/Work";

import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="bg-[#0a192f]  flex justify-center items-center w-full h-[100vh]">
          <PuffLoader
            color={"#36d7b7 "}
            loading={loading}
            size={150}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <div>
          <NavBar />
          <Home />

          <Work />
          {/* <Skills /> */}

          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
