interface Props {
  listItem: string[];
  clearCart: () => void;
}

const Cart = ({ listItem, clearCart }: Props) => {
  return (
    <>
      <div>Cart</div>
      {listItem.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={clearCart}>Clear</button>
    </>
  );
};

export default Cart;
