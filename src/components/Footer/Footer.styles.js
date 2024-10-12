// Footer.styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  opacity: 0.8;
  color: white;
  text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.7);
  padding: 10px;
  text-align: center;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const Icon = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const FooterLinks = styled.div`
  justify-content: center;
  margin-bottom: 20px;
`;

export const FooterLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
`;
