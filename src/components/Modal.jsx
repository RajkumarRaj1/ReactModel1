import React from "react";
import CartItem from "./CartItem";

const Modal = ({ isOpen, closeModal, cart, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        <h2>Cart Items</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
