// Footer.jsx
import React from "react";
import {
  StyledFooter,
  FooterSection,
  SocialIcons,
  Icon,
  FooterLinks,
  FooterLink,
  Copyright,
} from "./Footer.styles.js";

const Footer = () => {
  return (
    <StyledFooter className="mt-4">
      <FooterSection>
        <div>
          <h5>Follow Us</h5>
          <SocialIcons>
            <Icon href="https://facebook.com" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </Icon>
            <Icon href="https://instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </Icon>
            <Icon href="https://twitter.com" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Icon>
          </SocialIcons>
        </div>
      </FooterSection>

      <FooterLinks className="d-flex">
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/page-not-found">Terms & Conditions</FooterLink>
        <FooterLink to="/page-not-found">Privacy Policy</FooterLink>
        <FooterLink to="/page-not-found">Return Policy</FooterLink>
      </FooterLinks>

      <Copyright>© 2024 ECCOH Store. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

export default Footer;
