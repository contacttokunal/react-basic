import Like from "./components/Like";

const handleClick = () => console.log("Clicked");

function App() {
  return (
    <div>
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;
