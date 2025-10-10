import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Content from "./components/Content";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeSwitcher />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
