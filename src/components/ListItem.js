import React from "react";

const ListItem = ({ text }) => {
  return (
    <li className="text-sm font-medium">
      <span className="pr-2">-</span>
      {text}
    </li>
  );
};

export default ListItem;
