import React, { useRef } from "react";

const Example1 = () => {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <input type="text" placeholder="Enter text" />
      <input type="text" placeholder="Enter text" />

      <button onClick={focusInput}>Click to Focus</button>
    </div>
  );
};

export default Example1;
