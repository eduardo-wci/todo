import logo from "./logo.svg";
import "./App.css";
import Table from "./shared/Table";

function App() {
  return (
    <div>
      <h1>Starting point</h1>
      <Table data={[1,2,3]}/>
    </div>
  );
}

export default App;
