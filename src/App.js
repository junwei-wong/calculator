import React, { useState } from "react";
import { calculatorButtonsArray } from "./config";
import "./App.css";

function App() {
  const [equation, changeEquation] = useState("");
  const [output, changeOutput] = useState("");

  const handleOnClick = (buttonValue) => {
    if (calculatorButtonsArray.includes(buttonValue))
      switch (buttonValue) {
        case "AC":
          changeEquation("");
          changeOutput("");
          break;
        case "=": {
          if (evaluateResults(equation))
            changeOutput(evaluateResults(equation).toString().substring(0, 15));
          break;
        }
        case "<":
          changeEquation((preEquation) =>
            preEquation.toString().substring(0, preEquation.length - 1)
          );
          break;
        default:
          changeEquation(
            (preEquation) =>
              preEquation + buttonValue.toString().substring(0, 15)
          );
      }
  };

  const evaluateResults = (equationString) => {
    if (equationString) {
      try {
        return eval(equationString);
      } catch {
        alert("invalid equation");
        return false;
      }
    }
  };

  return (
    <div className="container">
      <div className="output-panel">
        <label className="equation invisible-scrollbar">
          {equation ? equation : ""}
        </label>
        <label className="results invisible-scrollbar">
          {output ? output : ""}
        </label>
      </div>
      <div className="buttons-panel">
        {calculatorButtonsArray.map((button) => (
          <button
            type="button"
            className={`button button-${button}`}
            key={button}
            onClick={() => handleOnClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
