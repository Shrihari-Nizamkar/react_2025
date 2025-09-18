import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Home = () => {
  const { user, login } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h2>You are logged in as {user.name}</h2>
      ) : (
        <button onClick={() => login("Shrihari")}>Login as Shrihari</button>
      )}
    </div>
  );
};

export default Home;
