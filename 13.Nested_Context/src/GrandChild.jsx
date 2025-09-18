import React from "react";
import DeepChild from "./DeepChild";

const GrandChild = () => {
  return (
    <div>
      <h3>GrandChild</h3>
      <DeepChild />
    </div>
  );
};

export default GrandChild;
