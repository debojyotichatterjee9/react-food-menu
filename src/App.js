import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartModalFlag, setCartModalFlag] = useState(false);

  const showCartHandler = () => {
    setCartModalFlag(true);
  }
  const hideCartHandler = () => {
    setCartModalFlag(false);
  }
  return (
    <CartProvider>
      {cartModalFlag && <Cart onClose={hideCartHandler}/>}
      <Header onCartClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
