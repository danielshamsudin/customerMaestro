import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";

import "./App.css";

// Testing purposes import
import Master from "./Master/master.js";
// import Login from "./Login/login";
// import Register from './Register/register.js';
// import Admin from './Admin/admin';
// import ViewProduct from './Product/viewproduct';
// import ViewAllProduct from './Product/viewallproduct';
// import AddProduct from './Product/addproduct';
// import ViewTask from './Task/viewtask';
// import ViewAllTask from './Task/viewalltask';
// // import AddTask from './Task/addtask';
// import ViewSales from './Sales/viewsales';
// import ViewAllSales from './Sales/viewallsales';
// import AddSale from './Sales/addsale';
import ViewCustomer from './Customer/viewcustomer';
import ViewAllCustomer from './Customer/viewallcustomer';


import './Utilities/colors.css'
import './Utilities/fonts/fonts.css'

function App() {
  return ( <>
    <Master />
    <ViewAllCustomer />
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