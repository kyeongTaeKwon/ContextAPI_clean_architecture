import React, { useState, useEffect, useCallback } from "react";
import { StyledContainer } from "../../styles/productStyle/$Container";
import Header from "../sections/header";
import { StyledPageBtn } from "../../styles/productStyle/$PageBtn";
import { useProducts } from "../../Hooks/useProducts";
import { Item } from "../../model/index";
import ProductsList from "../sections/productList";

const Products = () => {
  const { items: products } = useProducts();

  const [items, setItems] = useState<Item[]>(products);
  const [currentPage, setPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const pageSize: number = 5;
  const orderBy = "desc";

  const onPagination = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const result = items.slice(startIndex, startIndex + pageSize);
    setCurrentItems(result);
  };

  const onOrderBy = useCallback(() => {
    let result =
      orderBy === "desc" ? [...items].sort((a, b) => b.score - a.score) : [...items].sort((a, b) => a.score - b.score);

    setItems(result);
  }, [orderBy, items]);

  useEffect(onOrderBy, [orderBy]);
  useEffect(onPagination, [currentPage, items]);

  const onPageSelect = (index: number) => (index === currentPage ? true : false);

  const renderPageBtn = (items: Item[]) => {
    const pageCount = Math.ceil(items.length / pageSize);
    const pageBtns = [];

    for (let index = 1; index <= pageCount; index++) {
      pageBtns.push(
        <StyledPageBtn isSelected={onPageSelect(index)} onClick={() => setPage(index)} key={`pageBtn${index}`}>
          {index}
        </StyledPageBtn>
      );
    }

    return pageBtns;
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <ProductsList items={currentItems} />
        {renderPageBtn(items)}
      </StyledContainer>
    </>
  );
};

export default Products;
