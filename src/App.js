import logo from "./logo.svg";
import "./App.css";
import First from "./components/First";
import { Second } from "./components/Second";
import Greet from "./components/Greet";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="container">
      <Register />
    </div>
  );
}

export default App;
