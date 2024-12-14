import React, { useRef } from "react";
import Dice from "react-dice-roll";
import Roll, { d, sum } from "@stacon/roll";
import "../src/App.css";

export default function App() {
  const diceRef = useRef();
  const D20 = d(20);
  Roll(D20);
  const roll = () => {
    diceRef.current.click();
  };
  return (
    <div className="App">
      <Dice onRoll={(value) => console.log(value)} />
      <Dice onRoll={(value) => console.log(value)} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
