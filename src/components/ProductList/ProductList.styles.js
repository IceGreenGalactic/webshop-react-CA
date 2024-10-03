import styled from "styled-components";

export const ProductCard = styled.div`
  background: ${(props) => props.theme.color.cardBackground};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  max-width: 400px;
  cursor: default;
`;

export const ProductImg = styled.img`
  min-height: 260px;
  height: 260px;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-weight: 600;
  height: 60px;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 40px;
  line-height: 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
`;
export const Price = styled.span`
  color: black;
  font-weight: bold;
`;

export const RegularPrice = styled.span`
  margin-right: 10px;
    text-decoration: line-through 2px red;
  color: black;
`;

export const DiscountPercentage = styled.div`
  position: absolute;
  top: 10px;
  right: 10px; 
  color: white;
  background: rgba(255, 0, 0, 0.8);
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: bold;
  z-index: 10; 
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
`;
