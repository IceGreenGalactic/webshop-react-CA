import React from "react";
import { StyledHeader, Nav, NavLinks, NavLink, Notification } from "./Header.styles.js";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNotification } from "./NotificationContext"; 

const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  const { itemAdded } = useNotification(); 

  return (
    <StyledHeader>
      <Nav>
        <div className="logo">
        <Link to="/"> 
          <img src={logo} alt="ECCOH store logo" />
          </Link>
            </div>
        <NavLinks>
          <NavLink>
            <Link to="/" className="nav-link">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/ContactForm" className="nav-link">Contact</Link>
          </NavLink>
          <NavLink>
            <Link to="/Cart" className="nav-link d-flex align-items-baseline">
              <i className="fa-solid fa-cart-shopping me-2"></i>({totalQuantity})
              {itemAdded && <Notification> +1 item added</Notification>} 
            </Link>
          </NavLink>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
