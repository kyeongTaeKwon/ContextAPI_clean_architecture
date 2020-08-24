import React from "react";
import { useProductsState } from "../../Hooks/useProducts";
import { UserInfoBox, UserInfoText, CartLink } from "../../styles/headerStyle/userInfoItem";
const UserInfo = () => {
  const { coupons, cart } = useProductsState();
  return (
    <UserInfoBox>
      <UserInfoText>{`쿠폰 ${coupons.length}개`}</UserInfoText>
      <CartLink to={"/cart"}>{`장바구니 ${cart.length}개`}</CartLink>
    </UserInfoBox>
  );
};

export default React.memo(UserInfo);
