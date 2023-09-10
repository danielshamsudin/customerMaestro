import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Testing purposes import
import Master from "./Master/master.js";
import Login from "./Login/login";
import Register from "./Register/register.js";
import Admin from "./Admin/admin";
import ViewProduct from "./Product/viewproduct";
import ViewAllProduct from "./Product/viewallproduct";
import AddProduct from "./Product/addproduct";
import ViewTask from "./Task/viewtask";
import ViewAllTask from "./Task/viewalltask";
import AddTask from "./Task/addtask";
import ViewSales from "./Sales/viewsales";
import ViewAllSales from "./Sales/viewallsales";
import AddSale from "./Sales/addsale";
import ViewCustomer from "./Customer/viewcustomer";
import ViewAllCustomer from "./Customer/viewallcustomer";

import AddCustomer from "./Customer/addcustomer";

import "./Utilities/colors.css";
import "./Utilities/fonts/fonts.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addcust" element={<AddCustomer />} />
          <Route path="/customer" element={<ViewAllCustomer />} />
          <Route path="/customer/:id" element={<ViewCustomer />} />
          <Route path="/addsale" element={<AddSale />} />
          <Route path="/viewallsales" element={<ViewAllSales />} />
          <Route path="/viewsales" element={<ViewSales />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/viewalltask" element={<ViewAllTask />} />
          <Route path="/viewtask" element={<ViewTask />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/viewallproduct" element={<ViewAllProduct />} />
        </Routes>
      </Router>
    </>
  );
};

// Default means it is the main function of the file
export default App;

export function Square() {
  return;
  <>
    {/* React can only return one JSX component */}
    <button className="square">X</button>
    <button className="square">X</button>
  </>;
}
