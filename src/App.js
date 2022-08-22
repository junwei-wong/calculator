import React, { useState } from "react";
import { calculatorButtonsArray } from "./config";
import "./App.css";
function App() {
  const [equation, changeEquation] = useState("");
  const [output, changeOutput] = useState("");

  const handleOnClick = (buttonValue) => {
    switch (buttonValue) {
      case "AC":
        changeEquation("");
        changeOutput("");
        break;
      case "=":
        changeOutput(evaluateResults(equation).toString().substr(0, 15));
        break;
      case "<":
        changeEquation(equation.toString().substring(0, equation.length - 1));
        break;
      default:
        changeEquation((equation + buttonValue).toString().substr(0, 15));
    }
  };

  const evaluateResults = (equationString) => {
    let results = "";
    if (!(equationString === "" || !equation)) {
      for (const i of equationString) {
        if (!calculatorButtonsArray.includes(i)) return "HACKER";
      }
      try {
        results = eval(equationString);
      } catch {
        alert("invalid equation");
      }
    }
    return results;
  };

  return (
    <div className="container">
      <div className="output-panel">
        <label className="equation">{equation ? equation : ""}</label>
        <label className="results">{output ? output : ""}</label>
      </div>
      <div className="buttons-panel">
        {calculatorButtonsArray.map((button) => (
          <button
            className="button"
            key={button}
            id={`button-${button}`}
            onClick={(event) => handleOnClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
