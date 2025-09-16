import { useState } from "react";
import "./App.css";
import List from "./List.jsx";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = (e) => {
    setItem(e.target.value);
  };

  function addItem() {
    setList((prev) => {
      return [...prev, item];
    });
    setItem("");
  }

  function deleteItem(id) {
    setList((oldItems) => {
      return oldItems.filter((val, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item"
            value={item}
            onChange={inputHandler}
          />
          <button onClick={addItem}>+</button>
          <ol>
            {list.map((item, index) => {
              return (
                <List key={index} text={item} id={index} delete={deleteItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
