import "./App.css";
import CollapsibleTable from "./component/Table";
import wfimg from "./WF_logo.png";

function App() {
  return (
    <div className="App">
      <h1>
        <img src={wfimg} className="img"/>
      </h1>
      <CollapsibleTable />
    </div>
  );
}

export default App;
