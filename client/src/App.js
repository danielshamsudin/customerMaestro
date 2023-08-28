import logo from "./logo.svg";
import "./App.css";
import "./Master/master.js"
import Master from "./Master/master.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Master />
  );
}

// Default means it is the main function of the file
export default App;

export function Square() {
  return 
  <>
  {/* React can only return one JSX component */}
  <button className="square">X</button>
  <button className="square">X</button>
  </>
}