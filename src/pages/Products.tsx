import React, { useState, useEffect } from "react";
import { useProductsState } from "../contexts/ProductsContext";
import { Item } from "../fakeData";
import ProductsList from "../components/productList";
import _ from "lodash";

const Products = () => {
  const products = useProductsState();

  const [items, setItems] = useState<Item[]>(products);
  const [currentPage, setPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const pageSize: number = 5;
  const orderBy = "desc";

  const handlePagination = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const result = _.slice(items, startIndex, startIndex + pageSize);
    setCurrentItems(result);
  };

  const handleOrderBy = () => {
    //! 상태 불변성을 위해 concat 메소드 추가
    let result =
      orderBy === "desc"
        ? [...items].sort((a, b) => b.score - a.score)
        : [...items].sort((a, b) => a.score - b.score);

    setItems(result);
  };

  const renderPageBtn = (items: Item[]) => {
    const pageCount = Math.ceil(items.length / pageSize);
    const pageBtns = [];

    for (let index = 1; index <= pageCount; index++) {
      pageBtns.push(
        <button onClick={() => setPage(index)} key={`pageBtn${index}`}>
          {index}
        </button>
      );
    }

    return pageBtns;
  };

  useEffect(handleOrderBy, [orderBy]);
  useEffect(handlePagination, [currentPage, items]);

  return (
    <div>
      <ProductsList items={currentItems} />
      {renderPageBtn(items)}
    </div>
  );
};

export default Products;
