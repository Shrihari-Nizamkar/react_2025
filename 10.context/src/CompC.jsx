import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

const CompC = () => {
  const context1 = useContext(FirstName);
  const context2 = useContext(LastName);
  return (
    <>
      <div>
        Comp C : {context1} {context2}
      </div>
    </>
  );
};

export default CompC;
