import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Kunal" } });
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default App;
