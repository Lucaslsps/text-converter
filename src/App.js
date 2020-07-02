import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [selected, setSelected] = useState();
  const [originalText, setOriginalText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  function handleCheck(event) {
    setSelected(event.target.id);
  }

  function handleOriginalText(event) {
    setOriginalText(event.target.value);
  }

  useEffect(() => {
    setConvertedText(originalText);
    console.log("te");
  }, [originalText, selected]);

  return (
    <div className="wrapper">
      <h1>TEXT Converter</h1>

      <textarea
        placeholder="Enter your text and choose from one of the options"
        rows="6"
        onChange={handleOriginalText}
      />

      <form>
        <label htmlFor="1">Sentence case</label>
        <input type="radio" id="1" name="textMode" onClick={handleCheck} />
        <label htmlFor="2">lower case</label>
        <input type="radio" id="2" name="textMode" onClick={handleCheck} />
        <label htmlFor="3">UPPER CASE</label>
        <input type="radio" id="3" name="textMode" onClick={handleCheck} />
        <label htmlFor="4">Capitalized Case</label>{" "}
        <input type="radio" id="4" name="textMode" onClick={handleCheck} />
        <label htmlFor="5">aLtErNaTiNg cAsE</label>
        <input type="radio" id="5" name="textMode" onClick={handleCheck} />
        <label htmlFor="6">Title Case</label>
        <input type="radio" id="6" name="textMode" onClick={handleCheck} />
        <label htmlFor="7">InVeRsE CaSe</label>
        <input type="radio" id="7" name="textMode" onClick={handleCheck} />
      </form>

      <FaArrowDown />

      <textarea rows="6" readOnly value={convertedText} />
    </div>
  );
};

export default App;
