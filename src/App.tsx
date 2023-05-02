import { useState } from "react";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    const bugStatus = bugs.map((bug) =>
      bug.id === 1 ? { ...bug, fixed: true } : bug
    );
    setBugs(bugStatus);
  };

  return (
    <div>
      {bugs.map((bug) => bug.fixed)}
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default App;
