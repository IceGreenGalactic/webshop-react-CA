import styled from "styled-components";

export const ProductCard = styled.div`
  background: ${(props) => props.theme.color.cardBackground};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  max-width: 400px;
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
  height: 40px;
  line-height: 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
`;
export const Price = styled.span`
  color: black;
  font-weight: bold;
`;

export const RegularPrice = styled.span`
  text-decoration: line-through;
  color: red;
  margin-right: 10px;
`;

export const DiscountPercentage = styled.div`
  color: green;
  margin-right: 10px;
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
`;
