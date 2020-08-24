import React from "react";
import { StyledHeader } from "../../styles/headerStyle/userInfoItem";
import UserInfo from "../items/userInfo";

const Header = () => {
  return (
    <StyledHeader>
      <UserInfo />
    </StyledHeader>
  );
};

export default React.memo(Header);
