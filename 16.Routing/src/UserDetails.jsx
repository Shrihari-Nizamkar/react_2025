import React from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>UserDetails</h2>
      <button onClick={btnClick}>Go to Home</button>
    </div>
  );
};

export default UserDetails;
