import React, { useRef, useState } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);
  //   let timer;
  //   const startTimer = () => {
  //     timer = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //   };

  //   console.log("timer", timer);

  //stopTimer function not working is because the timer variable  gets re-initialized every time the component re-renders. React's re-renders can happen when state changes (in this case, when count is updated), and on each re-render, the timer value gets reset to undefined.

  // To fix this issue, we should use a useRef to persist the timer value across renders without it being reset on every re-render.

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals from being set
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  console.log(intervalRef);
  //here intervalRef not clears the value if component is rerendering

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset the timer to null
  };
  return (
    <div>
      <h2>{count} Seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Example2;
