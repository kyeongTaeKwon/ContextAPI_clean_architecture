import React, { useCallback } from "react";
import Product from "./product";
import { Item } from "../core/data";
import { ProductsListWrapper } from "../styles/productStyle/List";
import { useProductsState, useProductsDispatch } from "../contexts/ProductsContext";

type Props = {
  items: Item[];
};

const ProductList = ({ items }: Props) => {
  const { cart } = useProductsState();
  const { putCart, takeOutCart } = useProductsDispatch();

  const _onClick = useCallback(
    (isInCart: boolean, item: Item) => {
      if (cart.length < 3) {
        isInCart ? takeOutCart(item.id) : putCart(item);
      } else {
        isInCart ? takeOutCart(item.id) : alert("장바구니에는 3개까지만 담을 수 있습니다");
      }
      return cart.length;
    },
    [cart, putCart, takeOutCart]
  );

  const isInCart = useCallback((item: Item) => (cart.find(el => el.id === item.id) ? true : false), [cart]);

  const renderProductList = (items: Item[]) => {
    return items.map(item => <Product item={item} key={item.id} isInCart={isInCart(item)} onClick={_onClick} />);
  };

  return <ProductsListWrapper>{renderProductList(items)}</ProductsListWrapper>;
};

export default React.memo(ProductList);
