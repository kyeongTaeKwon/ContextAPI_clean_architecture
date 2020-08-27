import styled from "styled-components";

export const StyledAmountSection = styled.section`
  position: relative;
  height: 20rem;
  max-width: 68rem;
  margin-left: 8.8rem;
  margin-right: 4rem;
  /* margin: auto; */
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  /* background-color: red; */
`;

export const StyledAmountSectionFlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledHeaderText = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
`;
export const StyledAmountBox = styled.div`
  margin-left: auto;
`;
export const StyledAmountTextBox = styled.div`
  width: 32rem;
  height: 4rem;
  display: flex;
  position: relative;
`;

export const StyledSubText = styled.h3`
  font-size: 1.5rem;

  color: #aeaeae;
  :nth-child(1) {
    margin-right: auto;
  }
  :nth-child(2) {
    margin-left: auto;
  }
`;

export const StyledAmountText = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  :nth-child(1) {
    margin-right: auto;
  }
  :nth-child(2) {
    margin-left: auto;
  }
`;

export const StyledApplyCouponBox = styled.div`
  height: 10rem;
`;
export const StyledAplliedCouponText = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.4rem;
`;
export const StyledAddCouponBtn = styled.button`
  height: 2rem;
  align-self: flex-end;
  border: none;
  background: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: left;
  cursor: pointer;
`;
