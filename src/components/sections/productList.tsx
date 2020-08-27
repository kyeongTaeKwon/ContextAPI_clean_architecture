import React, { useCallback } from "react";
import Product from "../items/product";
import { Item } from "../../model/index";
import { StyledProductsListWrapper } from "../../styles/productStyle/$ProductList";
import { useProducts } from "../../Hooks/useProducts";

type Props = {
  items: Item[];
};

const ProductList = ({ items }: Props) => {
  const { cart, putCart, takeOutCart } = useProducts();

  //! 비즈니스 로직은 전부 훅스나 컨텍스트 에서 처리할 수 있게 옮기기
  const onClick = useCallback(
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
    return items.map(item => <Product item={item} key={item.id} isInCart={isInCart(item)} onClick={onClick} />);
  };

  return <StyledProductsListWrapper>{renderProductList(items)}</StyledProductsListWrapper>;
};

export default React.memo(ProductList);
