import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  margin: 0 auto;
  width: 100%;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.li`
  margin-right: 1.5rem;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;
