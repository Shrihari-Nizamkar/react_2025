import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const person = {
    id: 10,
    name: "Shrihari",
  };

  const btnClick = () => {
    navigate("/user-details", { state: { person } });
  };

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
      <button onClick={btnClick}>Go to User Details</button>
    </div>
  );
};

export default Home;
