import styled from "styled-components";

import { Link } from "react-router-dom";

export const BreadcrumbWrapper = styled.nav`
  margin: 1rem 0;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  background: none;
`;

export const BreadcrumbItem = styled.li`
  margin-right: 0.5rem;
  &:not(:last-child)::after {
    content: ">";
    margin-left: 0.5rem;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
     opacity: 0.6;

   

  &:hover {
    color: ${(props) => props.theme.color.secondary};
    text-decoration: underline;
  }

  &.active {
    color: ${(props) => props.theme.color.primary};
       opacity: 1;
  }
`;