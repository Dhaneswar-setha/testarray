import React, { useState, useEffect } from "react";

const ItemList = ({ items, classs }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     // Simulate an update with a delay
  //     setSelectedItem(items[Math.floor(Math.random() * items.length)]);
  //   }, 1000);

  //   return () => clearTimeout(timeoutId);
  // }, [items]);

  return (
    <div>
      <h2>Selected Item: {selectedItem}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {" "}
            my Name is {item} class {classs}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
