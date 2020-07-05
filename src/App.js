import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useEffect } from "react";
import "./App.css";
import Footer from "./reusable/footer";

const App = () => {
  const [selected, setSelected] = useState();
  const [originalText, setOriginalText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  function handleCheck(event) {
    setSelected(Number(event.target.id));
  }

  function handleOriginalText(event) {
    setOriginalText(event.target.value);
  }

  useEffect(() => {
    let aux = "";
    switch (selected) {
      case 1:
        aux = sentenceCase(originalText);
        setConvertedText(aux);
        break;
      case 2:
        aux = lowerCase(originalText);
        setConvertedText(aux);
        break;
      case 3:
        aux = upperCase(originalText);
        setConvertedText(aux);
        break;
      case 4:
        aux = capitalizedCase(originalText);
        setConvertedText(aux);
        break;
      case 5:
        aux = alternatingCase(originalText);
        setConvertedText(aux);
        break;
      case 6:
        aux = titleCase(originalText);
        setConvertedText(aux);
        break;
      case 7:
        aux = inverseCase(originalText);
        setConvertedText(aux);
        break;
      default:
        console.log("Invalido");
    }
  }, [originalText, selected]);

  function sentenceCase(text) {
    let auxText = text.split(".");
    auxText = auxText.filter((chr) => {
      return chr !== "" && chr !== " ";
    });

    for (let i = 0; i < auxText.length; i++) {
      auxText[i] = auxText[i].trim();
      console.log(auxText[i]);
      if (auxText[i].length === 0) continue;
      auxText[i] = auxText[i][0].toUpperCase() + auxText[i].slice(1);
    }
    auxText = auxText.join(". ");
    auxText = auxText + ".";
    return auxText;
  }

  function lowerCase(text) {
    return text.toLowerCase();
  }

  function upperCase(text) {
    return text.toUpperCase();
  }

  function capitalizedCase(text) {}
  function alternatingCase(text) {
    let auxText = text.toUpperCase().split("");
    for (let i = 0; i < auxText.length; i += 2) {
      auxText[i] = auxText[i].toLowerCase();
    }
    auxText = auxText.join("");
    return auxText;
  }

  function titleCase(text) {
    let auxText = text.toLowerCase().split(" ");
    for (let i = 0; i < auxText.length; i++) {
      auxText[i] = auxText[i][0].toUpperCase() + auxText[i].slice(1);
    }
    auxText = auxText.join(" ");
    return auxText;
  }

  function inverseCase(text) {
    let auxText = text.split("");
    for (let i = 0; i < auxText.length; i++) {
      if (auxText[i] === auxText[i].toUpperCase()) {
        auxText[i] = auxText[i].toLowerCase();
      } else {
        auxText[i] = auxText[i].toUpperCase();
      }
    }
    auxText = auxText.join("");
    return auxText;
  }

  return (
    <div className="wrapper">
      <h1>TEXT Converter</h1>

      <textarea
        placeholder="Enter your text and choose from one of the options"
        rows="6"
        onChange={handleOriginalText}
      />

      <form>
        <input type="radio" id="1" name="textMode" onClick={handleCheck} />
        <label htmlFor="1">Sentence case</label>
        <input type="radio" id="2" name="textMode" onClick={handleCheck} />
        <label htmlFor="2">lower case</label>
        <input type="radio" id="3" name="textMode" onClick={handleCheck} />
        <label htmlFor="3">UPPER CASE</label>
        {/*         <input type="radio" id="4" name="textMode" onClick={handleCheck} />
        <label htmlFor="4">Capitalized Case</label>{" "} */}
        <input type="radio" id="5" name="textMode" onClick={handleCheck} />
        <label htmlFor="5">aLtErNaTiNg cAsE</label>
        <input type="radio" id="6" name="textMode" onClick={handleCheck} />
        <label htmlFor="6">Title Case</label>
        <input type="radio" id="7" name="textMode" onClick={handleCheck} />
        <label htmlFor="7">iNVERSE cASE</label>
      </form>

      <FaArrowDown />

      <textarea rows="6" readOnly value={convertedText} />
    </div>
  );
};

export default App;
