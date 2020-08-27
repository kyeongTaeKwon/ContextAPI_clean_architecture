import styled, { ThemeProps } from "styled-components";
import { ProductTitle, ProductPrice } from "../productStyle/$Product";

interface Props extends ThemeProps<Props> {
  isSeleted: boolean;
}
export const CProductBox = styled.div`
  display: flex;
  height: 8.4rem;
  margin-bottom: 4rem;
`;

export const CProductImg = styled.img`
  width: 15rem;
  height: 8.4rem;
  margin-right: 1.6rem;
  border-radius: 4px;
`;

export const CSelectBtn = styled.button`
  background: ${props => (props.isSeleted ? props.theme.colors.primary : "none")};
  border-radius: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  align-self: center;
  border: ${(props: Props) => (props.isSeleted ? "0rem" : "2px solid white")};
  outline: none;
  margin-right: 1.6rem;
  cursor: pointer;
`;

export const CProductInfoBox = styled.div`
  width: 36rem;
  height: 8.4rem;
  position: relative;
  margin-right: 3.2rem;
`;

export const CProductTitle = styled(ProductTitle)`
  margin: 0rem;
  font-weight: normal;
  margin-bottom: 2rem;
`;

export const CProductPrice = styled(ProductPrice)`
  margin: 0rem;
  font-size: 1.4rem;
`;

export const CAmountBox = styled.div`
  height: 3.2rem;
  position: absolute;
  display: flex;
  bottom: 0rem;
  right: 0rem;
  /* background-color: black; */
`;

export const CAmountText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  width: 3rem;
  /* vertical-align: center; */
  margin: 0.8rem 1.2rem;
`;

export const CHandleAmountBtn = styled.button`
  background: none;
  /* background-color: red; */
  border: none;
  outline: none;
  /* padding: 0; */
  color: white;
  font-size: 2.4rem;
  font-weight: bold;
  margin: 0rem;
  cursor: pointer;
`;
export const CSumText = styled.p`
  align-self: center;
  font-size: 1.7rem;
  font-weight: bold;
  margin-right: 1.2rem;
`;

export const CDeleteBtn = styled.button`
  background: none;
  align-self: center;
  outline: none;
  border: none;
  font-weight: bold;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
`;
