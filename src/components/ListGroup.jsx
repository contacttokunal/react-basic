function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];
  items = [];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
        {items.length === 0 && <p> No item Found</p>}
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
