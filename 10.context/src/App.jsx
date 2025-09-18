import { createContext } from "react";
import CompA from "./CompA";

//By using useContext Hook

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <FirstName.Provider value={"Shrihari"}>
      <LastName.Provider value={"N"}>
        <CompA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export default App;
export { FirstName, LastName };
