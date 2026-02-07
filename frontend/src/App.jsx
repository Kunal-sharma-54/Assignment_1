import { useContext } from 'react';
import Product from './pages/Product'
import { CartContext } from './context/CartContext';
import Cart from "./pages/Cart"
const App = () => {
   const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>Products</h1>
     <p>
       Cart items:{" "}
       {cartItems.reduce((total, item) => total + item.quantity, 0)}
      </p>
      <Product/>
      <Cart/>
    </div>
  )
}

export default App

