import React, { useState, useEffect } from "react";
import { productsItems, Item } from "../fakeData";
import ProductsList from "../components/productList";

const Products = () => {
  const [items, setItems] = useState<Item[]>(productsItems);
  const [currentPage, setPage] = useState<number>(2);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
  const pageSize = 5;

  const handlePagination = () => {
    const startIndex = (currentPage - 1) * pageSize;
    let result = items.slice(startIndex, startIndex + pageSize);
    setCurrentItems(result);
  };

  useEffect(handlePagination, [currentPage, items]);

  return (
    <div>
      <ProductsList items={currentItems} />
    </div>
  );
};

export default Products;
