import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  //nest the above relted component in object but avoid nested object structure
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    contact: {
      address: { street: "" },
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  return <div></div>;
}

export default App;
