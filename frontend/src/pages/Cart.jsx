import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems,removeFromCart  } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
           <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
