import "./App.css";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  let darkStyle = {
    color: "white",
    backgroundColor: "black",
  };

  return (
    <>
      <div style={darkStyle}>
        <Navbar title="TEXT-UTILS" />
        <div className="container">
          <Textform heading1="Text Form" heading2="Text Summary"/>
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
