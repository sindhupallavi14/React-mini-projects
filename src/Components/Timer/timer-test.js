import React, { useState } from "react";
import Timer from "./timer";
import "./timer.css";

export default function TimerTest() {
  const [isTimeUp, setIsTimeUp] = useState(false);

  function handleTimeFinish() {
    setIsTimeUp(true);
  }

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      {isTimeUp ? (
        <h2>Time up............!!!!</h2>
      ) : (
        <Timer initialTime={50} onTimeFinish={handleTimeFinish} />
      )}
    </div>
  );
}
