import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  max-width: 120rem;
  height: 5.2rem;
  margin: auto;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* background: yellow; */
`;
export const UserInfoBox = styled.div`
  width: 20rem;
  position: relative;
  right: 0rem;
  display: flex;
  float: right;
`;

export const UserInfoText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: right;
  margin: 1.6rem 2rem 0 0;
`;

export const CartLink = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  margin: 1.6rem 0;
  text-align: right;
  text-decoration: none;
`;
