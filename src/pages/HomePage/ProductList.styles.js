
import styled from "styled-components";

export const ProductCard = styled.div`
  margin: 10px;
  background: ${(props) => props.theme.color.cardBackground};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  min-height: 60px; 
  height: 60px; 
`;
