import React from "react";
import { Link } from "react-router-dom";
import { useProductsState } from "../Hooks/useProducts";

const UserInfo = () => {
  const { coupons, cart } = useProductsState();
  return (
    <div>
      <p>{`쿠폰 ${coupons.length}개, 장바구니 ${cart.length}개`}</p>
      <Link to="/cart">장바구니로 이동</Link>
    </div>
  );
};

export default React.memo(UserInfo);
