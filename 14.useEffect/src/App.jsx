import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }

  //call only once, when page is render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <ul>
        {users.map((obj, index) => {
          return <li key={index}>{obj.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
