import React, { useState } from "react";
import "./App.css";

function App() {
  const [prev, setPrev] = useState("");
  const [cur, setCur] = useState("");
  const [operator, setOperator] = useState("");

  const inputNum = (e) => {
    if (cur.includes(".") && e.target.value === ".") return;
    cur ? setCur((prev) => prev + e.target.value) : setCur(e.target.value);
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
    if (cur === "") return;
    if (prev !== "") calculate();
    else {
      setPrev(cur);
      setCur("");
    }
  };

  const calculate = () => {
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(prev) / parseFloat(cur));
        break;

      case "+":
        cal = String(parseFloat(prev) + parseFloat(cur));
        break;
      case "X":
        cal = String(parseFloat(prev) * parseFloat(cur));
        break;
      case "-":
        cal = String(parseFloat(prev) - parseFloat(cur));
        break;
      default:
        return;
    }

    setPrev(cal);
    setCur("");
  };

  const reset = () => {
    setCur("");
    setPrev("");
    setOperator("");
  };
  const buttonsArray = [];
  for (let i = 0; i <= 9; i++) {
    buttonsArray.push(i);
  }
  buttonsArray.push(".");

  const ops = ["+", "-", "X", "/"];
  return (
    <div>
      {/* Header of the react app */}
      <header className="header">
        <h1 className="header-title">Basic Calculator using React</h1>

        <h3 className="header-description">
          Calculator made with HTML, CSS and React.js for simple arithmetic
          operations.
        </h3>
      </header>

      {/* Calculator begins here */}
      <div className="container glass">
        <div className="display">
          <span className="operator">{operator}</span>
          {cur ? (
            // current input num = cur
            // previous input num = prev
            <div className="data-in"> {cur}</div>
          ) : (
            <div className="data-in"> {prev}</div>
          )}
        </div>

        <div className="buttons-num">
          {/* AC clears the display of the calculator by setting all states to empty string */}
          <button value="AC" className="btn btn-pink" onClick={reset}>
            {" "}
            AC
          </button>
          {/* Operators are handled in this using switch case */}
          {ops.map((el) => (
            <button value={el} className="btn" onClick={handleOperator}>
              {el}
            </button>
          ))}
          {/* mapped through the array of numbers */}
          {buttonsArray.map((el) => (
            // an event is put to handle the input number value
            <button value={el} className="btn" onClick={inputNum}>
              {el}
            </button>
          ))}
          <button value="=" className="btn btn-pink" onClick={calculate}>
            {" "}
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
