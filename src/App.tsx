import "./styles/App.css";
import "./styles/HTMLCheatsheet.css";
import "./styles/HTMLEditor.css";
import HTMLCheatsheet from "./components/HTMLCheatsheet";

function App() {
  return (
    <div className="App">
      <span>
        <h1>HTML Cheatsheet</h1>
      </span>
      <HTMLCheatsheet />
    </div>
  );
}

export default App;
