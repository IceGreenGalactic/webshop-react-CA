import React from 'react';
import ProductList from './ProductList';
import { HeroContainer, HeroSubtitle, HeroTitle, HeroTextContainer } from './HomePage.syles.js';

const HomePage = () => {
    return (
      <div>
        <HeroContainer className="row mb-5">
            <HeroTextContainer className=" d-flex flex-column text-center p-5">
              <HeroTitle>Welcome to Our Boutique!</HeroTitle>
              <HeroSubtitle>Discover unique styles that express your individuality.</HeroSubtitle>
              <p>
                Embrace elegance and sophistication with every piece. Our curated collections are designed to inspire and empower.
              </p>
            </HeroTextContainer>
       
        </HeroContainer>
        <ProductList />
      </div>
    );
  };
  
export default HomePage;
