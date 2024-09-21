import "./App.css";
import React, { useState } from "react";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const [pageStyle, setPageStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setPageStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setMode("light");
      setPageStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
      <div style={pageStyle}>
        <Navbar title="TEXT-UTILS" toggleDarkMode={toggleDarkMode} />
        <div className="container">
          <Textform heading1="Text Form" heading2="Text Summary" />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
