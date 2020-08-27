import React from "react";
import { useProducts } from "../../Hooks/useProducts";
import { StyledUserInfoBox, StyledUserInfoText, StyledCartLink } from "../../styles/headerStyle/$userInfoItem";
const UserInfo = () => {
  const { coupons, cart } = useProducts();
  return (
    <StyledUserInfoBox>
      <StyledUserInfoText>{`쿠폰 ${coupons.length}개`}</StyledUserInfoText>
      <StyledCartLink to={"/cart"}>{`장바구니 ${cart.length}개`}</StyledCartLink>
    </StyledUserInfoBox>
  );
};

export default React.memo(UserInfo);
