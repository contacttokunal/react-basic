import ListGroup from "./components/ListGroup";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const items = ["red", "green", "blue"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="colors"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
