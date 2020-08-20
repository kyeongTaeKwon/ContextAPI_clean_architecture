import React, { useState, useEffect } from "react";
import { productsItems, Item } from "../fakeData";
import ProductsList from "../components/productList";
import _ from "lodash";
const Products = () => {
  const [items, setItems] = useState<Item[]>(productsItems);
  const [currentPage, setPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const pageSize = 5;
  const orderBy = "desc";

  const handlePagination = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const result = _.slice(items, startIndex, startIndex + pageSize);
    setCurrentItems(result);
  };

  const handleOrderBy = () => {
    orderBy === "desc"
      ? items.sort((a, b) => b.score - a.score)
      : items.sort((a, b) => a.score - b.score);
  };

  useEffect(handleOrderBy, [orderBy]);
  useEffect(handlePagination, [currentPage, items]);

  return (
    <div>
      <ProductsList items={currentItems} />
    </div>
  );
};

export default Products;
