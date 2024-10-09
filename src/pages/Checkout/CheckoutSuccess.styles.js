import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  height: 50px;
  width: 50px;
  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
  @media (min-width: 1024px) {
    height: 100px;
    width: 100px;
  }
`;

export const HomeButton = styled.button`
      color: ${({ theme }) => theme.color.primary};

    &:hover {
      color: ${({ theme }) => theme.color.secondary};`;
