import styled from "styled-components";

export const ProductCard = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
export const ProductImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

export const DiscountPercentage = styled.div`
  position: absolute;
  top: 0px;
  right: 12px;
  color: white;
  background: rgba(255, 0, 0, 0.8);
  border-radius: 0px 0px 0px 5px;
  padding: 5px 10px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  margin-top: 20px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: left;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const RegularPrice = styled.span`
  text-decoration: line-through 2px red;
  color: black;
`;

export const DiscountedPrice = styled.span`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  margin-top: 10px;
`;

export const Price = styled.span`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const ReviewCard = styled.div`
  background: ${(props) => props.theme.color.cardBackground};
`;
