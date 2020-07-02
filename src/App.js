import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState();

  function handleCheck(event) {
    console.log(event);
    console.log(event.target);
    setSelected(event.target.id);
  }

  return (
    <div className="wrapper">
      <h1>TEXT Converter</h1>

      <input
        type="textarea"
        placeholder="Enter your text and choose from one of the options"
      />

      <form>
        <label htmlFor="1">Sentence case</label>
        <input
          type="radio"
          id="1"
          name="textMode"
          onClick={handleCheck}
          placeholder="asfasf"
        />
        <label htmlFor="2">lower case</label>
        <input type="radio" id="2" name="textMode" onClick={handleCheck} />
        <label htmlFor="3">UPPER CASE</label>
        <input type="radio" id="3" name="textMode" onClick={handleCheck} />
        <label htmlFor="4">Capitalized Case</label>{" "}
        <input
          type="radio"
          label="Capitalized Case"
          id="4"
          name="textMode"
          onClick={handleCheck}
        />
        <label htmlFor="5">aLtErNaTiNg cAsE</label>
        <input
          type="radio"
          label="aLtErNaTiNg cAsE"
          id="5"
          name="textMode"
          onClick={handleCheck}
        />
        <label htmlFor="6">Title Case</label>
        <input
          type="radio"
          label="Title Case"
          id="6"
          name="textMode"
          onClick={handleCheck}
        />
        <label htmlFor="7">InVeRsE CaSe</label>
        <input
          type="radio"
          inline
          label="InVeRsE CaSe"
          id="7"
          name="textMode"
          onClick={handleCheck}
        />
      </form>
    </div>
  );
};

export default App;
