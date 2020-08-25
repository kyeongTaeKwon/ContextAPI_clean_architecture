import React from "react";
import CartProudct from "../items/cartProduct";
import { usePayments } from "../../Hooks/usePaymentList";

const CartList = () => {
  const { paymentList, totalOrderAmount } = usePayments();
  const renderCartList = () => {
    return paymentList.map(item => <CartProudct item={item} key={item.id} />);
  };
  return (
    <div>
      {renderCartList()} <p>{totalOrderAmount}</p>
    </div>
  );
};

export default CartList;
