import React from "react";

const ListItem = ({ text }) => {
  return (
    <li className="text-sm font-medium text-grey1 flex">
      <p className="pr-2">-</p>
      {text}
    </li>
  );
};

export default ListItem;
