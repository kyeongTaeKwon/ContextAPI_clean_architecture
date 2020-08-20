import React, { useState } from "react";
import { productsItems, Item } from "../fakeData";

const Products = () => {
  const [items, setItems] = useState<Item[]>(productsItems);
  return (
    <div>
      {items.map(item => (
        <div>
          <img src={item.coverImage} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
