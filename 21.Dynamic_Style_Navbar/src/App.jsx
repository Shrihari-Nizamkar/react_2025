import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>🏠 Home Page</h2>} />
        <Route path="/about" element={<h2>ℹ️ About Page</h2>} />
        <Route path="/contact" element={<h2>📞 Contact Page</h2>} />
      </Routes>
    </>
  );
}

export default App;
