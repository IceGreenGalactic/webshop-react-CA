// Footer.styles.js
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
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
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FooterLink = styled.a`
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
