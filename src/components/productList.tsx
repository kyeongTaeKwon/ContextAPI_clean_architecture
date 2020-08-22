import React from "react";
import Product from "./product";
import { Item } from "../fakeData";
import { ProductsListWrapper } from "../styles/productStyle/List";
type Props = {
  items: Item[];
};
const ProductList = ({ items }: Props) => {
  const renderProductList = (items: Item[]) => {
    return items.map(item => <Product item={item} key={item.id} />);
  };

  return <ProductsListWrapper>{renderProductList(items)}</ProductsListWrapper>;
};

export default ProductList;
