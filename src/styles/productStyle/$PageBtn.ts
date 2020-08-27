import styled from "styled-components";

interface StateProps {
  isSelected?: boolean;
}

export const PageBtn = styled.button<StateProps>`
  width: 3.6rem;
  height: 3.6rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;

  outline: none;
  margin-right: 1.2rem;

  cursor: ${(props: any) => {
    const { isSelected } = props;
    return isSelected ? "default" : "pointer";
  }};

  background-color: ${(props: any) => {
    const { isSelected, theme } = props;
    return isSelected ? theme.colors.primary : "transparent";
  }};

  border: ${(props: any) => {
    const { isSelected, theme } = props;
    return isSelected ? `0px solid` : `2px solid ${theme.colors.primary}`;
  }};

  border-radius: 8px;
`;
