import "./App.css";
import React, { useState } from "react";

import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

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

  return (
    <Router>
      <div id="wrapper" style={pageStyle}>
        <Navbar title="TEXT-UTILS" toggleDarkMode={toggleDarkMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Textform
                  heading1="Text Form"
                  heading2="Text Summary"
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
