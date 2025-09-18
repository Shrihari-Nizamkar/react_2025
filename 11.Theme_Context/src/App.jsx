import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

//passing theme to other components

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
