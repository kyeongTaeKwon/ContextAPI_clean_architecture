import React from "react";
import { PaymentItem } from "../../model/index";
import { makeCommaPrice } from "../../util/makeComma";
import { useProductsDispatch } from "../../Hooks/useProducts";
import { usePayments } from "../../Hooks/usePayments";
import {
  CProductBox,
  CProductImg,
  CSelectBtn,
  CProductInfoBox,
  CProductTitle,
  CProductPrice,
  CAmountBox,
  CAmountText,
  CHandleAmountBtn,
  CSumText,
  CDeleteBtn,
} from "../../styles/CartStyle/$CartProduct";

type Props = {
  item: PaymentItem;
};
const CartProduct = ({ item }: Props) => {
  const { takeOutCart } = useProductsDispatch();
  const { plusAmount, minusAmount, handleSelect } = usePayments();

  return (
    <CProductBox>
      <CSelectBtn onClick={() => handleSelect(item.id)} isSeleted={item.isSelected} />
      <CProductImg src={item.coverImage} alt={item.title} />
      <CProductInfoBox>
        <CProductTitle>{item.title}</CProductTitle>
        <CProductPrice>{makeCommaPrice(item.price)}</CProductPrice>
        <CAmountBox>
          <CAmountText>수량</CAmountText>
          <CAmountText>{`${item.amount}개`}</CAmountText>
          <CHandleAmountBtn
            onClick={() => {
              plusAmount(item);
            }}
          >
            +
          </CHandleAmountBtn>
          <CHandleAmountBtn
            onClick={() => {
              minusAmount(item);
            }}
          >
            -
          </CHandleAmountBtn>
        </CAmountBox>
      </CProductInfoBox>

      <CSumText>{makeCommaPrice(item.amount * item.price)}</CSumText>
      <CDeleteBtn
        onClick={() => {
          takeOutCart(item.id);
        }}
      >
        삭제
      </CDeleteBtn>
    </CProductBox>
  );
};

export default CartProduct;
