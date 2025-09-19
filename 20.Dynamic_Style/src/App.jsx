import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        title="Primary Card"
        description="This card is blue left border"
        type="primary"
      />
      <Card
        title="Success Card"
        description="This card is green left border"
        type="success"
      />
      <Card
        title="Danger Card"
        description="This card is red left border"
        type="danger"
      />
    </>
  );
}

export default App;
