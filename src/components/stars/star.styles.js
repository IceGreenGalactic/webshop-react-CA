import styled from "styled-components";

export const StarIcon = styled.span`
  color: ${({ filled, theme }) => (filled ? theme.color.secondary : "#CCC")};
  font-size: 1.5rem;
`;
