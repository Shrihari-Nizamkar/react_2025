import React from "react";

const Child = React.memo(({ childBtn }) => {
  console.log("child rendered");
  return (
    <div>
      <h2>Child</h2>
      <button onClick={childBtn}>Click me</button>
    </div>
  );
});

export default Child;

// export default React.memo(Child);  //another way
