import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  z-index: 100;
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
  font-family: "Playwrite DE Grund", Arial, sans-serif;
`;

export const NavLink = styled.li`
  margin-right: 1.5rem;
  position: relative;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export const Notification = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.secondary};
  color: white;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 12px;
  animation: fadeInOut 3s;
  white-space: nowrap;
`;
