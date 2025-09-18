import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#eee" : "#000",
        padding: "1rem",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam
        unde at cumque beatae magni reprehenderit sed repellat nihil? Debitis
        harum quo officiis deserunt temporibus suscipit velit necessitatibus
        vero nam?
      </p>
    </div>
  );
};

export default Content;
