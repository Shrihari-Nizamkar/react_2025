import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "15px",
          padding: "10px",
          background: "#eee",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
