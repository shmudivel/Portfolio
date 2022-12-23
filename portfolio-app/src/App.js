// import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
// import TranslationsI18next from "./components/TranslationsI18next";
import Work from "./components/Work";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <NavBar />
      <Home />

      <Work />
      <Skills />

      <Contact />
    </div>
  );
}

export default App;
