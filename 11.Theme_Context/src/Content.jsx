import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const value = useContext(ThemeContext);
  return (
    <div>
      <h1> Content : {value} </h1>
    </div>
  );
};

export default Content;
