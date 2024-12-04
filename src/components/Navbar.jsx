import React from "react";

const Navbar = ({ cartCount, openModal }) => {
  return (
    <nav>
      <div className="navbar">
        <h1>Shopping Cart</h1>
        <button  className="rounded-lg p-4 bg-purple-700  hover:divide-red-500" onClick={openModal}>Cart ({cartCount}) </button>
      </div>
    </nav>
  );
};

export default Navbar;
