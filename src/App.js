import "./App.css";
import React, { useState } from "react";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [pageStyle, setPageStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [alert, setAlert] = useState(null);

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

  const showAlert = (msg) => {
    setAlert(msg)
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <div style={pageStyle}>
        <Navbar title="TEXT-UTILS" toggleDarkMode={toggleDarkMode} />
        <Alert alert={alert}/>
        <div className="container">
          <Textform heading1="Text Form" heading2="Text Summary" showAlert={showAlert}/>
          <About />
        </div>
        
      </div>
    </>
  );
}

export default App;
