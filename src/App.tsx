import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Fransisco", "Tokyo", "London"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
