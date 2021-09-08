import React, { useState, useEffect } from "react";
import "./App.css";
import Symbol from "./components/operators";
import Numbers from "./components/numbers";
import Equal from "./components/equal";

function App() {
  const [expression, setExpression] = useState("");
  const operations = ["+", "-", "*", "/"];
  const numbers = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "AC"],
  ];
  let oper = "";
  let num = "";
  const handleReset = () => {
    setExpression("");
  };
  const handleClick = (sign, type) => {
    let lastZero = expression.slice(-1); 
    if (type === "number") {
      if (num.length === 1 && num === "0" && sign === ".") {
        num = sign;
        setExpression(expression + num);
      } else if (num.length > 1 && sign === ".") {
        num += sign;
      } else if (lastZero === "." && sign === ".") {
        return;
      } else if (num === "" && sign === "0") {
        num += sign;
        setExpression(expression + num);
        lastZero = expression.slice(-1);
        if (expression.length === 1 && expression[0]=== '0') {
          setExpression(expression.replace(/^0+/, "") + num);
        } else if (lastZero === "0" && sign === "0") {
          let newExpres = expression.split("");
          let lastSign = newExpres.pop();
          oper = sign;
          setExpression(newExpres.join("") + num);
        } 
      } else if (num === "0" && sign === "0") {
        return;
      } else if (num.length === 1 && num === "0") {
        num += sign;
        setExpression( + num);
      } else {
        if(expression[0] === '0'&& type !== 'number') {
          num = sign;
          setExpression(num);
        } else {
          num = sign;
          setExpression(expression + num);
        }
      }
    }

    if (type === "operator") {
      var last = expression.slice(-1);
      if (last === "+" || last === "-" || last === "*" || last === "/") {
        let newExpres = expression.split("");
        let lastSign = newExpres.pop();
        oper = sign;
        setExpression(newExpres.join("") + oper);
      } else {
        oper = sign;
        setExpression(expression + oper);
        num = "";
      }
    }
  };

  const handleEqual = () => {
    var last = expression.slice(-1);
    if (
      last === "+" ||
      last === "-" ||
      last === "*" ||
      last === "/" ||
      last === "."
    )
      return;
    const result = eval(expression).toString();
    setExpression(result.toString());
  };

  return (
    <div className="calculator">
      <div className="input">{expression}</div>
      <div className="buttons">
        <div className="operators">
          {operations.map((operation) => (
            <Symbol key={operation} symbol={operation} onClick={handleClick} />
          ))}
        </div>
        <div className="leftPanel">
          {numbers.map((numbers, index) => (
            <Numbers
              key={index}
              numbers={numbers}
              onClick={handleClick}
              onReset={handleReset}
            />
          ))}
        </div>
        <Equal onEqual={handleEqual} />
      </div>
    </div>
  );
}

export default App;
