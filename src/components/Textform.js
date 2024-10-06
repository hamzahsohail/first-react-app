import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [btntext, setBtnText] = useState("Convert to UPPERCASE");

  // Use state to track flags instead of normal variables
  const [isUppercase, setIsUppercase] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUcClick = () => {
    let UC = text.toUpperCase();
    setIsUppercase(true); // Set state to uppercase
    setText(UC);
    setBtnText("Convert to lowercase");
    props.showAlert("converted to UPPERCASE");
  };

  const handleLcClick = () => {
    let LC = text.toLowerCase();
    setIsUppercase(false); // Set state to lowercase
    setText(LC);
    setBtnText("Convert to UPPERCASE");
    props.showAlert("converted to lowercase");
  };

  const handleBtnClick = () => {
    if (text === "") {
      setText("enter text");
    } else if (!isUppercase) {
      handleUcClick(); // Convert to uppercase if not already
    } else {
      handleLcClick(); // Convert to lowercase if already uppercase
    }
  };

  const handleCopy = () => {
    if (text !== "") {
      navigator.clipboard.writeText(text);
      props.showAlert("copied");
    }
  };

  const handleReset = () => {
    if (text !== "") {
      setText("");
      props.showAlert("reset");
    }
  };

  return (
    <>
      <h3 className="mt-3">{props.heading1}</h3>
      <hr />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Text
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={10}
          defaultValue={""}
          placeholder="lorem ispum"
          onChange={handleOnChange}
          value={text}
          style={{ resize: "none" }}
        />
      </div>
      <div className="mb-3 buttons">
        <button
          className="btn btn-outline-success"
          onClick={handleBtnClick}
          style={{ width: "200px" }}
        >
          {btntext}
        </button>
        <button className="btn btn-outline-secondary" onClick={handleCopy}>
          <i class="fa-regular fa-copy"></i>
        </button>
        <button className="btn btn-outline-danger" onClick={handleReset}>
          Reset
        </button>
      </div>

      <h3>{props.heading2}</h3>
      <hr />
      <p>
        Words:{" "}
        {
          text
            .replace(/\n/g, " ")
            .split(" ")
            .filter((value) => value !== "").length
        }
      </p>
      <p>Characters: {text.trim().length}</p>
      <p>
        Read Time (minutes):{" "}
        {(
          text
            .replace(/\n/g, " ")
            .split(" ")
            .filter((value) => value !== "").length /
          3.05 /
          60
        ).toFixed(2)}
      </p>
    </>
  );
}
