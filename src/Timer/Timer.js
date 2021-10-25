import React, { useState } from 'react';
import "./Timer.css";

export default function Timer({ time }) {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState("00");
  const [days, setDays] = useState("00")
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  React.useEffect(() => {
    let intervalId;

    if (time.days !== "00" || time.hours !== "00" || time.minutes !== "00") {
      setMinute(time.minutes);
      setHour(time.hours);
      setDays(time.days)
    }

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const hourCounter = Math.floor(minuteCounter / 60);
        const dayCounter = Math.floor(hourCounter / 24)

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
        const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;
        const computedDay = String(dayCounter).length === 1 ? `0${dayCounter}`: dayCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);
        setDays(computedDay)

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

  return (
    <div>
      <div className="container">
        <div className="time">
          <div className="days">
            <h4>Days</h4>
            <span className="day">{days}</span>
          </div>
          {/* <span className="colon">:</span> */}
          <div className="hours">
            <h4>Hours</h4>
            <span>{hour}</span>
          </div>
          {/* <span className="colon">:</span> */}
          <div className="minutes">
            <h4>Minutes</h4>
            <span>{minute} </span>
          </div>
          {/* <span className="colon">:</span> */}
          <div className="seconds">
            <h4>Seconds</h4>
            <span>{second}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="buttons">
          <button onClick={() => setIsActive(!isActive)} className="start">
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={() => null} className="reset">Reset</button>
        </div>
      </div>
    </div>
  )
}