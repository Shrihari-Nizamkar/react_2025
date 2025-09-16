/*Task
1. When you click on Start button then show current date and time
2. Make it live.
3.Why is useEffect used here?
🔹 Purpose: Cleanup on Component Unmount
This useEffect runs only once when the component mounts ([] dependency array).
It returns a cleanup function that will run when the component unmounts.
*/

import { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState();
  const intervalRef = useRef(null); // To store interval ID

  const updateTime = () => {
    // Prevent multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  };

  useEffect(() => {
    //cleanup on unmount
    //we return a cleanup function to clear the interval when the component unmounts.
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <h2>Time : {time}</h2>
      <button onClick={updateTime}>Start Live</button>
      <button
        onClick={() => {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }}
      >
        Stop
      </button>
    </>
  );
}

export default App;
