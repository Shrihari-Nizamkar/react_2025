import "./App.css";
import Content from "./Content";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

//passing theme to other components

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
