/*Task
1. When you click on Start button then show current date and time
    10:35:10 PM
2. Make it live.

*/

import { useState } from "react";

function App() {
  const [time, setTime] = useState("");

  const updateTime = () => {
    console.log("button clicked");
    setTime(() => new Date().toLocaleTimeString());
    setInterval(updateTime, 1000);
  };

  //updateTime creates an infinite loop!
  //Each time updateTime is called, it sets another interval, so it'll end up with many overlapping timers.

  //so Clean up the interval when the component unmounts
  //React needs a way to clear the interval if the component goes away — otherwise the timer keeps running in memory.

  return (
    <>
      <h2>Time : {time}</h2>
      <button onClick={updateTime}>Start Live</button>
    </>
  );
}

export default App;
