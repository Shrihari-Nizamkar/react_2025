import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const value = useContext(ThemeContext);
  return (
    <div>
      <h1>Header : {value}</h1>
    </div>
  );
};

export default Header;
