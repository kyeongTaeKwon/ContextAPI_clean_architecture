import React from "react";
import { Item } from "../fakeData";

type Props = {
  item: Item;
};
const Product = ({ item }: Props) => {
  return (
    <div>
      <img src={item.coverImage} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.price}</p>
    </div>
  );
};

export default Product;
