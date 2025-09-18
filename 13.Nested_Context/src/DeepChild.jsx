import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const DeepChild = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>DeepChild : {user.name}</h4>
    </div>
  );
};

export default DeepChild;
