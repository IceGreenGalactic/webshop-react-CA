import React from "react";
import { StyledHeader, Nav, NavLinks, NavLink } from "./Header.styles.js";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

  return (
    <StyledHeader>
      <Nav>
        <div className="logo">
          <img src={logo} alt="ECCOH store logo" />
        </div>
        <NavLinks>
          <NavLink>
            <Link to="/" className="nav-link">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/ContactForm" className="nav-link">Contact</Link>
          </NavLink>
          <NavLink>
            <Link to="/Cart" className="nav-link">
              <i className="fa-solid fa-cart-shopping"></i>({totalQuantity})
            </Link>
          </NavLink>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
