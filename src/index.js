import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Add, { Sub, Mul, Div } from "./Components";

ReactDOM.render(
  <>
    <ul>
      <li>sum of two num 44 90 is- {Add(44, 90)} </li>
      <li>subtraction of two num 44 5 is- {Sub(44, 5)} </li>
      <li>multiplication of two num 44 5 is- {Mul(44, 5)} </li>
      <li>division of two num 44 5 is- {Div(44, 5)} </li>
    </ul>
  </>,
  document.getElementById("root")
);
