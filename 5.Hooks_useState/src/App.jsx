import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const buttonEvent = () => {
    setCounter(counter + 1); //assign new value to counter
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={buttonEvent}>Click Me</button>
    </>
  );
}

export default App;
