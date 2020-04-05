import React from "react";
import "./List.css";
const List = (props) => (
  <ul className="unorderGrocery-list">
    <h1>Grocery List Items</h1>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
