import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [items, setItems] = useState(["item1", "item2"]);

  const resetCartItem = () => setItems([]);

  return (
    <div>
      <NavBar listItemCount={items.length} />
      <Cart listItem={items} clearCart={resetCartItem} />
    </div>
  );
};

export default App;
