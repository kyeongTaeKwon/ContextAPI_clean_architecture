import React, { useState, useEffect } from "react";
import { useProductsState } from "../contexts/ProductsContext";
import { Item } from "../fakeData";
import ProductsList from "../components/productList";
import _ from "lodash";

const Products = () => {
  const products = useProductsState();

  //? 전역에서 가져온 아이템 목록으로 만든 베이스 상태인 items와 items를 토대로 실제 뷰로 보여지는 currentItem 으로 상태를 분리했지만 살짝 복잡해진감이 있어 고민 ...
  //? 어처피 컨텍스트로 products 아이템 목록이 있어 굳이 items 상태가 필요한가 싶기도 하지만, 검색,정렬 같은 기능을 생각하면 분리하는게 맞는거 같고..! 좀더 생각해보고 수정할 수 있음 수정하자!
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
