import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0",
    top: "0"
  });
  useEffect(() => {
    document.addEventListener("keydown", (event) => handleKeyDown);
  });
  const handleKeyDown = (event) => {
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 39:
        let p = ballPosition["left"];
        p = parseInt(p) + 5;
        setBallPosition({ left: p });
        break;
      case 38:
        let q = ballPosition["left"];
        q = parseInt(q) + 5;
        setBallPosition({ top: q });
        break;
      case 40:
        let r = x;
        r = parseInt(r) + 5;
        setX(r);
        break;
      case 37:
        let s = y;
        s = parseInt(s) + 5;
        setY(s);
        break;
      default:
        break;
    }
  };
  const reset = () => {};
  const renderChoice = (renderBall) => {
    console.log(renderBall);
    if (!renderBall) {
      return (
        <button className="start" onClick={() => setRenderBall(true)}>
          Start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{
            right: `${x.toString()}`,
            left: ballPosition["left"],
            top: ballPosition["top"],
            bottom: `${y.toString()}`
          }}
        ></div>
      );
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice(renderBall)}
    </div>
  );
};

export default App;
