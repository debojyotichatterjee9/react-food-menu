import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [cartModalFlag, setCartModalFlag] = useState(false);

  const showCartHandler = () => {
    setCartModalFlag(true);
  }
  const hideCartHandler = () => {
    setCartModalFlag(false);
  }
  return (
    <React.Fragment>
      {cartModalFlag && <Cart />}
      <Header onCartClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
