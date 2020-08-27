import styled from "styled-components";

type StyleProps = {
  visible: boolean;
};

export const StyledModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props: StyleProps) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const StyledModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props: StyleProps) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const StyledModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
  background-color: ${props => props.theme.colors.background};
  color: white;
  border-radius: 8px;
  width: 40rem;
  max-width: 48rem;
  height: 52rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 2rem;
`;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 3.2rem;
`;
