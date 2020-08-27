import React from "react";
import { PaymentItem } from "../../model/index";
import { makeCommaPrice } from "../../util/makeComma";
import { useProductsDispatch } from "../../Hooks/useProducts";
import { usePayments } from "../../Hooks/usePayments";
import {
  StyledProductBox,
  StyledProductImg,
  StyledSelectBtn,
  StyledProductInfoBox,
  StyledCProductTitle,
  StyledCProductPrice,
  StyledAmountBox,
  StyledAmountText,
  StyledHandleAmountBtn,
  StyledSumText,
  StyledDeleteBtn,
} from "../../styles/CartStyle/$CartProduct";

type Props = {
  item: PaymentItem;
};
const CartProduct = ({ item }: Props) => {
  const { takeOutCart } = useProductsDispatch();
  const { plusAmount, minusAmount, handleSelect } = usePayments();

  return (
    <StyledProductBox>
      <StyledSelectBtn onClick={() => handleSelect(item.id)} isSeleted={item.isSelected} />
      <StyledProductImg src={item.coverImage} alt={item.title} />
      <StyledProductInfoBox>
        <StyledCProductTitle>{item.title}</StyledCProductTitle>
        <StyledCProductPrice>{makeCommaPrice(item.price)}</StyledCProductPrice>
        <StyledAmountBox>
          <StyledAmountText>수량</StyledAmountText>
          <StyledAmountText>{`${item.amount}개`}</StyledAmountText>
          <StyledHandleAmountBtn
            onClick={() => {
              plusAmount(item);
            }}
          >
            +
          </StyledHandleAmountBtn>
          <StyledHandleAmountBtn
            onClick={() => {
              minusAmount(item);
            }}
          >
            -
          </StyledHandleAmountBtn>
        </StyledAmountBox>
      </StyledProductInfoBox>

      <StyledSumText>{makeCommaPrice(item.amount * item.price)}</StyledSumText>
      <StyledDeleteBtn
        onClick={() => {
          takeOutCart(item.id);
        }}
      >
        삭제
      </StyledDeleteBtn>
    </StyledProductBox>
  );
};

export default React.memo(CartProduct);
