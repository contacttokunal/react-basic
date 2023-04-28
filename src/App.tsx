import { BsFillCalendarFill } from "react-icons/bs";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const items = ["red", "green", "blue"];

  return (
    <div>
      <BsFillCalendarFill color="red" size="40" />
    </div>
  );
}

export default App;
