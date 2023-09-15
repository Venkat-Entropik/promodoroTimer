import React, { useState, useEffect } from "react";
import "./timer.css";
import bg from "../ImageContainer/background.jpg";
import CircleProgressBar from "./CircleProgressBar";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../authentication/firebaseApp";

const Timer = () => {
  const initialTimeInSeconds = 1500;

  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);
  const [timerRunning, setTimerRunning] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  useEffect(() => {
    let timer;

    if (timerRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerRunning, remainingTime]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setRemainingTime(initialTimeInSeconds);
    setTimerRunning(false);
  };

  const handleLogout = () => {
    signOut(auth);
    toast("Logout Success");
  };

  return (
    <div className="timer" style={backgroundStyle}>
      <div className="containerBox">
        <h3 className="text-light title">Pomodoro Timer</h3>
        <CircleProgressBar remainingTime={remainingTime} circleWidth="200" />
        <div>
          <button className="btn btn-light mt-2 mx-2" onClick={startTimer}>
            Start
          </button>
          <button className="btn btn-light mt-2 mx-2" onClick={stopTimer}>
            Stop
          </button>
          <button className="btn btn-light mt-2 mx-2" onClick={resetTimer}>
            Reset
          </button>
        </div>
        <div>
          <button
            onClick={() => setRemainingTime(1500)}
            className="btn btn-primary mt-3 mx-3"
          >
            Promodoro
          </button>
          <button
            onClick={() => setRemainingTime(300)}
            className="btn btn-danger mt-3 mx-3"
          >
            Short Break
          </button>
        </div>
        <div>
          <button onClick={handleLogout} className="btn btn-warning mt-2">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
