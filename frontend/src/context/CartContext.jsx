import { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

//Create provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  //Function to add item
  function addToCart(product) {
    try {
      fetch(`http://localhost:5000/api/cart/${product.id}`);
    } catch (error) {
        console.error("Failed to call cart API"); 
    }
  setCartItems((prevItems) => {
    // check if product already exists in cart
    const existingItem = prevItems.find(
      (item) => item.id === product.id
    );

    // if product exists, increase quantity
    if (existingItem) {
      return prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // if product does not exist, add with quantity = 1
    return [...prevItems, { ...product, quantity: 1 }];
  });
}
function removeFromCart(productId) {
  setCartItems((prevItems) => {
    return prevItems.filter((item) => item.id !== productId);
  });
}
  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
