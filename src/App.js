import React, { useState } from 'react';

import './App.css';
import Timer from './Timer/Timer';
import ColorPicker from './ColorPicker/ColorPicker';

function App() {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  const changeHandler = ({ target }) => {
    setTime({
      ...time,
      [target.name]: target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="form-div">
      <p>Input starting time:</p>
        <form onSubmit={submitHandler} className="form">
          <label className="days">
            <p>Days:</p>
            <input
              type="text"
              name="days"
              value={time.days}
              onChange={changeHandler}
              maxLength="2"
              max="31" />
          </label>
          <label className="hours">
            <p>Hours:</p>
            <input
              type="text"
              name="hours"
              value={time.hours}
              onChange={changeHandler}
              maxLength="2"
              max="24" />
          </label>
          <label className="minutes">
            <p>Minutes:</p>
            <input
              type="text"
              name="minutes"
              value={time.minutes}
              onChange={changeHandler}
              maxLength="2"
              max="60" />
          </label>
        </form>
      </div>
      <div className="timer">
        <Timer time={time} />
      </div>
    </div>
  );
}

export default App;
