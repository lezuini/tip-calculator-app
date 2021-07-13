import logo from "./images/logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Calculator />
    </div>
  );
}

export default App;
