const ListItem = ({ text }) => {
  return (
    <li className="flex text-sm font-medium text-grey1">
      <p className="pr-2">-</p>
      {text}
    </li>
  );
};

export default ListItem;
