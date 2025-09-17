import { createContext } from "react";
import "./App.css";
import CompA from "./CompA";

const FirstName = createContext();
function App() {
  return (
    <FirstName.Provider value={"Shrihari"}>
      <CompA />
    </FirstName.Provider>
  );
}

export default App;
export { FirstName };
