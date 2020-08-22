import React from "react";
import { Item } from "../fakeData";
import {
  ProductBox,
  ProductImg,
  ProductPrice,
  ProductTitle,
} from "../styles/productStyle/Item";
import {
  useProductsState,
  useProductsDispatch,
} from "../contexts/ProductsContext";

type Props = {
  item: Item;
};

const Product = ({ item }: Props) => {
  const { cart } = useProductsState();
  const dispatch = useProductsDispatch();

  const putItem = (item: Item) => {
    dispatch({ type: "PUT_ITEM", item });
  };
  const takeOutItem = (id: string) => {
    dispatch({ type: "TAKEOUT_ITEM", id });
  };
  const makeCommaPrice = (price: number) => {
    const stringPrice = price.toString();
    return stringPrice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };

  console.log("프로덕트 렌더링 확인");
  return (
    <ProductBox>
      {cart.find(el => el.id === item.id) && <p>장바구니에 있습니다.</p>}
      <ProductImg
        src={item.coverImage}
        alt={item.title}
        onClick={() => {
          //TODO: 이 부분 클릭시 매번 반복을 돌기 때문에 시간복잡도를 줄일 수 있는 방법 모색해보기 , 하지만 현시점에서는 장바구니 수량이 3개로 제한되어 있어 당장 중요하진 않음!

          if (cart.length < 3) {
            cart.find(el => el.id === item.id)
              ? takeOutItem(item.id)
              : putItem(item);
          } else {
            cart.find(el => el.id === item.id)
              ? takeOutItem(item.id)
              : alert("장바구니는 3개까지 추가 가능합니다");
          }
        }}
      />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{makeCommaPrice(item.price)}원</ProductPrice>
    </ProductBox>
  );
};

export default React.memo(Product);
