import React, { useState, useEffect } from "react";
import { Item } from "../../model/index";
import {
  StyledProductBox,
  StyledProudctImgBox,
  StyledProductImg,
  StyledProductPrice,
  StyledProductTitle,
  StyledAddCartBtn,
  StyledAddCartMotionDiv,
  StyledLinkToCart,
  StyledAddCartText,
} from "../../styles/productStyle/$Product";
import { makeCommaPrice } from "../../util/makeComma";

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
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => setAnimation(false), 4000);
    return () => clearTimeout(timeOut);
  }, [animation]);

  return (
    <StyledProductBox>
      <StyledProudctImgBox>
        <StyledProductImg src={item.coverImage} alt={item.title} />
        <StyledAddCartMotionDiv animate={animation ? "visible" : "hidden"}>
          <StyledAddCartText>장바구니에 담겼습니다.</StyledAddCartText>
          {animation && <StyledLinkToCart to={"/cart"}>장바구니로 가기</StyledLinkToCart>}
        </StyledAddCartMotionDiv>
      </StyledProudctImgBox>
      <div>
        <StyledProductTitle>{item.title}</StyledProductTitle>
        <StyledProductPrice>{makeCommaPrice(item.price)}원</StyledProductPrice>
        <StyledAddCartBtn onClick={handleClick}>{isInCart ? "장바구니에서 빼기" : "장바구니에 담기"}</StyledAddCartBtn>
      </div>
    </StyledProductBox>
  );
};

export default React.memo(Product);
