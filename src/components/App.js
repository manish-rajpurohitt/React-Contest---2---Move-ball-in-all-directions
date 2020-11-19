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

  const handleUserKeyPress = (e) => {
    console.log(e.keyCode);
    let valueX = x;
    let valueY = y;
    if (e.keyCode === 39) {
      valueX += 5;
      setX(valueX);
    }
    if (e.keyCode === 40) {
      valueY += 5;
      setY(valueY);
    }
    if (e.keyCode === 38) {
      valueY -= 5;
      setY(valueY);
    }
    if (e.keyCode === 37) {
      valueX -= 5;
      setX(valueX);
    }
    setBallPosition({ left: valueX + "px", top: valueY + "px" });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleUserKeyPress);
    return () => {
      document.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  const reset = () => {};
  const renderChoice = (renderBall) => {
    if (!renderBall) {
      return (
        <button className="start" onClick={() => setRenderBall(true)}>
          Start
        </button>
      );
    } else {
      return <div className="ball" style={ballPosition}></div>;
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
