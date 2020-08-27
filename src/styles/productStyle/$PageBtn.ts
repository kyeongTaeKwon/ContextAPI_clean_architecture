import styled, { ThemeProps } from "styled-components";

interface StateProps extends ThemeProps<StateProps> {
  isSelected?: boolean;
}

export const StyledPageBtn = styled.button<StateProps>`
  width: 3.6rem;
  height: 3.6rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;

  outline: none;
  margin-right: 1.2rem;

  cursor: ${props => {
    const { isSelected } = props;
    return isSelected ? "default" : "pointer";
  }};

  background-color: ${props => {
    const { isSelected, theme } = props;
    return isSelected ? theme.colors.primary : "transparent";
  }};

  border: ${props => {
    const { isSelected, theme } = props;
    return isSelected ? `0px solid` : `2px solid ${theme.colors.primary}`;
  }};

  border-radius: 8px;
`;
