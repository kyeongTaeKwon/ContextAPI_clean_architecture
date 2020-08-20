import React, { useState } from "react";
import { productsItems, Item } from "../fakeData";
import ProductsList from "../components/productList";

const Products = () => {
  const [items, setItems] = useState<Item[]>(productsItems);

  return (
    <div>
      <ProductsList items={items} />
    </div>
  );
};

export default Products;
