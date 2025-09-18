import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#eee" : "#333",
        padding: "1rem",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Design and Develop By : Shrihari
    </div>
  );
};

export default Footer;
