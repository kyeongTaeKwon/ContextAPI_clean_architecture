import React from "react";
import { usePayments } from "../../Hooks/usePaymentList";

const AmountSection = () => {
  const { totalOrderAmount } = usePayments();
  return (
    <div>
      <h1>{totalOrderAmount}</h1>
    </div>
  );
};

export default AmountSection;
