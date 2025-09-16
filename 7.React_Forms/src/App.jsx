import { useState } from "react";
import "./App.css";

function App() {
  const [register, setRegister] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const [fullName, setFullName] = useState("");
  const [other, setOther] = useState("");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setRegister((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    setFullName(register.fName + " " + register.lName);
    setOther(register.email + "" + register.phone);
  }

  const clearText = () => {
    setRegister({
      fName: "",
      lName: "",
      email: "",
      phone: "",
    });
    setFullName("");
    setOther("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h1>Welcome {fullName}</h1>
        <h3>{other}</h3>

        <input
          type="text"
          name="fName"
          value={register.fName}
          placeholder="Enter First Name"
          onChange={inputHandler}
        />
        <input
          type="text"
          name="lName"
          value={register.lName}
          placeholder="Enter Last Name"
          onChange={inputHandler}
        />
        <input
          type="email"
          name="email"
          value={register.email}
          placeholder="Enter Email id"
          onChange={inputHandler}
        />
        <input
          type="number"
          name="phone"
          value={register.phone}
          placeholder="Enter Mobile Number"
          onChange={inputHandler}
        />
        <button>Click Me</button>
        <button onClick={clearText}>CLEAR TEXT</button>
      </div>
    </form>
  );
}

export default App;
