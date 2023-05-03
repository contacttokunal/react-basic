interface Props {
  listItemCount: number;
}

const NavBar = ({ listItemCount }: Props) => {
  return <div>NavBar : {listItemCount}</div>;
};

export default NavBar;
