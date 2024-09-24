import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
`;

export const HeroTextContainer = styled.div`
  background: ${(props) => props.theme.color.cardBackground};
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


