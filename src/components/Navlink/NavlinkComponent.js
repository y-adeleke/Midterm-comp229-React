import React from "react";
import { Link } from "react-router-dom";

const NavLinkComponent = () => {
  return (
    <div className="nav-link-container">
      <Link to="/add-product">Add Product</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
export default NavLinkComponent;
