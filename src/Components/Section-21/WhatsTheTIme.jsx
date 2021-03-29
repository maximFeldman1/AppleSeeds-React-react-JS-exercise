import React, { useState } from "react";

const Time = () => {
  const [seconds, setSeconds] = useState("");

  const onChangeInput = (event) => {
    if (event.target.name === "seconds") {
      setSeconds(event.target.value);
    } else if (event.target.name === "minutes") {
      setSeconds(event.target.value * 60);
    } else if (event.target.name === "hours") {
      setSeconds(event.target.value * 60);
    }
  };

  return (
    <div>
      <div>
        <label>
          Seconds:
          <input
            type="number"
            name="seconds"
            value={seconds}
            onChange={onChangeInput}
          />
        </label>
      </div>
      <div>
        <label>
          Minuts:
          <input
            type="number"
            name="minutes"
            value={seconds/60}
            onChange={onChangeInput}
          />
        </label>
      </div>
      <div>
        <label>
          Hours:
          <input
            type="numeber"
            name="hours"
            value={seconds/3600}
            onChange={onChangeInput}
          />
        </label>
      </div>
    </div>
  );
};

export default Time;
