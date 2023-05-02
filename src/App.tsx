import { useState } from "react";

const App = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add new item in array
    setTags([...tags, "exciting"]);

    //remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {tags}
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default App;
