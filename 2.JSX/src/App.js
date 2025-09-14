function App() {
  const name = "Shrihari";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 1 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }

  const heading = {
    color: "red",
    textTransform: "capitalize",
    fontWeight: "bold",
  };

  return (
    <>
      <h1>Welcome</h1>
      <h3 style={heading}>My name is {name}</h3>
      <h3>Date: {date}</h3>
      <h3>Time : {time}</h3>
      <h3>{greeting}!!!</h3>
    </>
  );
}

export default App;
