import React from "react";
import Product from "./product";
import { Item } from "../fakeData";

type Props = {
  items: Item[];
};
const ProductList = ({ items }: Props) => {
  const renderProductList = (items: Item[]) => {
    return items.map(item => <Product item={item} key={item.id} />);
  };

  return <div>{renderProductList(items)}</div>;
};

export default ProductList;
