import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AddProduct from "./components/AddProduct/addproduct";
import SignUpUser from "./components/SignUpUser/signupuser";
import NavLinkComponent from "./components/Navlink/NavlinkComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavLinkComponent />
      <Routes>
        <Route path="/" element={<NavLinkComponent />} />
        <Route index path="/add-product" element={<AddProduct />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="*" element={<h1>No page Found!!!</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
