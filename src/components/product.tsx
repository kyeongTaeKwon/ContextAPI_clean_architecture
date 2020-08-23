import React, { useState } from "react";
import { Item } from "../core/data";
import {
  ProductBox,
  ProudctImgBox,
  ProductImg,
  ProductPrice,
  ProductTitle,
  AddCartBtn,
  AddCartMotionDiv,
  LinkToCart,
  AddCartText,
} from "../styles/productStyle/Item";
import { makeCommaPrice } from "../core/util/makeComma";

type Props = {
  item: Item;
  isInCart: boolean;
  onClick: (isInCart: boolean, item: Item) => number;
};

const Product = ({ item, isInCart, onClick }: Props) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const handleClick = () => {
    const cartLength = onClick(isInCart, item);
    if (!isInCart && cartLength < 3) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 4000);
    }
  };

  return (
    <ProductBox>
      <ProudctImgBox>
        <ProductImg src={item.coverImage} alt={item.title} />
        <AddCartMotionDiv animate={animation ? "visible" : "hidden"}>
          <AddCartText>장바구니에 담겼습니다.</AddCartText>
          <LinkToCart to={"/cart"}>장바구니로 가기</LinkToCart>
        </AddCartMotionDiv>
      </ProudctImgBox>
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{makeCommaPrice(item.price)}원</ProductPrice>
      <AddCartBtn onClick={handleClick}>{isInCart ? "장바구니에서 빼기" : "장바구니에 담기"}</AddCartBtn>
    </ProductBox>
  );
};

export default React.memo(Product);
