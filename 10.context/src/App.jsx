import { createContext } from "react";
import CompA from "./CompA";

//to add more than one value in context

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <FirstName.Provider value={"Shrihari"}>
      <LastName.Provider value={"Nizamkar"}>
        <CompA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export default App;
export { FirstName, LastName };
