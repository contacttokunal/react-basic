import Button from "./components/Button";

const handleClick = () => console.log("Clicked");

function App() {
  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        My Button
      </Button>
    </div>
  );
}

export default App;
