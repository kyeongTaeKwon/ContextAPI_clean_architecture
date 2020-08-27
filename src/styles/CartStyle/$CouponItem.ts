import styled from "styled-components";

export const StyledCouponItemBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.6rem;
`;

export const StyledCouponTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const StyeldApplyBtn = styled.button`
  /* height: 2rem; */
  border: none;
  background: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-align: left;
  margin-left: auto;
  cursor: pointer;
`;
