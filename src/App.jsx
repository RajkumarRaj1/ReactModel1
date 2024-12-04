import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
