import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "",
    address: {
      city: "San Fransico",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    const updatedCustomer = {
      ...customer,
      address: { ...customer.address, zipCode: 80001 },
    };
    setCustomer(updatedCustomer);
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default App;
