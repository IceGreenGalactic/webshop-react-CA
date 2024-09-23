// Footer.jsx
import React from 'react';
import { StyledFooter, FooterSection, SocialIcons, Icon, FooterLinks, FooterLink, Copyright } from './Footer.styles.js';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterSection>
        <div><h5>Follow Us</h5>
           <SocialIcons>
            <Icon href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Icon>
            <Icon href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Icon>
            <Icon href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Icon>
          </SocialIcons>
        </div>
      </FooterSection>

      <FooterLinks>
      <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/#">Terms & Conditions</FooterLink>
        <FooterLink href="/#">Privacy Policy</FooterLink>
        <FooterLink href="/#">Return Policy</FooterLink>
      </FooterLinks>

      <Copyright>© 2024 ECCOH Store. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

export default Footer;
