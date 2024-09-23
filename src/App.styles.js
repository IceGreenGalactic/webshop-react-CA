import styled from "styled-components";


export const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.background};
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.color.btnHover}; 
  }
`;
