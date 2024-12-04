import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <button className="rounded-lg p-2" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
