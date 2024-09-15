// import logo from './logo.svg';
import "./App.css";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TEXT-UTILS" />
      <div className="container">
        <Textform heading1="Text Form" heading2="Text Summary"/>
      </div>
    </>
  );
}

export default App;
