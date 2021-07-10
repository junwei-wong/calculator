import React, {useState} from "react"
import "./App.css"
function App () {
  const [output, changeOutput] = useState('')
  const calculatorButtonsArray = ['(',  ')', '%', 'AC', '7', '8', '9','/','4','5','6','*','1','2','3','-','0','.','=','+']

  const handleOnClick = buttonValue => {
    switch(buttonValue) {
      case "AC": changeOutput(''); break;
      case "=": changeOutput(evaluateResults(output)); break;
      default: changeOutput(output+buttonValue)
    }
  }

  const evaluateResults = output => {
    let results = output
    if(!output === ''){
      for(const i of output){
        if(!calculatorButtonsArray.includes(i))
          return 'HACKER'
      }
      try{
        results = eval(output)
      }
      catch{
        alert('invalid equation')
      }
    }
    return results
  }

  return (
    <div className="container">
      <label htmlFor="output" className="results">{output}</label>
      <div className="buttons-panel">
        {calculatorButtonsArray.map(button=><button className="button" key={button} onClick={event => handleOnClick(button)}>{button}</button>)} </div>
    </div>
  )
}

export default App