import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London"];

  //Evnet Hanler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
        {items.length === 0 && <p> No item Found</p>}
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
