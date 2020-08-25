import React from "react";
import { PaymentItem } from "../../model/index";
import { makeCommaPrice } from "../../util/makeComma";
import { useProductsDispatch } from "../../Hooks/useProducts";
import { usePayments } from "../../Hooks/usePaymentList";
type Props = {
  item: PaymentItem;
};
const CartProduct = ({ item }: Props) => {
  const { takeOutCart } = useProductsDispatch();
  const { paymentList, plusAmount, minusAmount, handleSelect } = usePayments();
  console.log("d", paymentList);
  return (
    <div>
      <img src={item.coverImage} alt={item.title} style={{ width: "15rem", height: "8.4rem" }} />
      <div>
        <button onClick={() => handleSelect(item.id)}>핸들 선택</button>
        <p>{item.isSelected && "선택되었습니다."}</p>
        <h1>{item.title}</h1>
        <p>{makeCommaPrice(item.price)}</p>
        <div>
          <p>수량</p>
          <p>{item.amount}</p>
          <button
            onClick={() => {
              plusAmount(item);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              minusAmount(item);
            }}
          >
            -
          </button>
        </div>
      </div>
      <div>
        <p>{item.amount * item.price}</p>
      </div>
      <div>
        <button
          onClick={() => {
            takeOutCart(item.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
