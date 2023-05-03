import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    // const items = { ...cart.items };
    // const item = items.find((item) => item.id === 1);
    // if (item) item.quantity = 2;
    setCart({
      ...cart,
      items: {
        ...cart.items.map((item) =>
          item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
        ),
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default App;
