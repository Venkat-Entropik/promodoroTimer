import React from "react";
import "./timer.css";

const CircleProgressBar = ({ remainingTime, circleWidth }) => {
  const radius = circleWidth / 2 - 10;
  const percentage = ((remainingTime / 1500) * 100).toFixed(2); // Calculate percentage
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fill="white"
        >
          {`${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
        </text>
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          className="circle-percentage"
          fill="white"
        >
          Time Left
        </text>
      </svg>
    </div>
  );
};

export default CircleProgressBar;
