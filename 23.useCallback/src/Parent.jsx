import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  const toggle = () => {
    setOther((prev) => !prev);
    console.log("Toggle", other);
  };

  const childBtn = useCallback(() => {
    console.log("btn clicked");
  }, []); //[] as an empty array means that the function childBtn does not depend on any external values (like props or state).

  console.log("Parent rendered");
  return (
    <div>
      <h1>Parent : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={toggle}>Toggle</button>
      <Child childBtn={childBtn} />
    </div>
  );
};

export default Parent;
