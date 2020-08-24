import React from "react";
import { StyledHeader } from "../styles/headerStyle/userInfoItem";
import UserInfo from "./userInfo";

const Header = () => {
  return (
    <StyledHeader>
      <UserInfo />
    </StyledHeader>
  );
};

export default React.memo(Header);
