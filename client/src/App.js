import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";

import "./App.css";

// Testing purposes import
import Master from "./Master/master.js";
import Login from "./Login/login";
import Register from './Register/register.js';

function App() {
  return ( <>
    <Master />
    <Register />
  </> 
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