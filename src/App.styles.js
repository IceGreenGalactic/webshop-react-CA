import styled from "styled-components";


export const ListItem = styled.li`
  color: ${(props) => (props.isOnSale ? props.theme.color.sale : "initial")};
  list-style-type: none;
  text-align: left;
  margin-left: 50%;
  transform: translate(-50%);
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.background};
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  font-weight: 600;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.color.primary};
`;
