import React from "react";

const ListItem = ({ text }) => {
  return (
    <li>
      <span className="pr-2">-</span>
      {text}
    </li>
  );
};

export default ListItem;
