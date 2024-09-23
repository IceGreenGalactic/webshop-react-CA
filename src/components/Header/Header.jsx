import React from 'react';
import { StyledHeader, Nav, Logo, NavLinks, NavLink } from './Header.styles.js';
import logo from "../../assets/images/logo.png"


const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <div className="logo">
          <img src={logo} alt="ECCOH store logo"></img>
        </div>
        <NavLinks>
          <NavLink><a href="/">Home</a></NavLink>
          <NavLink><a href="/contact">Contact</a></NavLink>
          <NavLink><a href="/cart">🛒 (0)</a></NavLink>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
};

export default Header;