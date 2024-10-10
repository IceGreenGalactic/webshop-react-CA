import React from "react";
import ProductList from "../../components/ProductList/ProductList.jsx";
import {
  HeroContainer,
  HeroSubtitle,
  HeroTitle,
  
} from "./HomePage.syles.js";

const HomePage = () => {
  return (
    <div>
      <HeroContainer className="mb-5 col-12 m-auto">
        <div className="  text-center p-5">
          <HeroTitle>Welcome to Our Boutique!</HeroTitle>
          <HeroSubtitle>
            Discover unique styles that express your individuality.
          </HeroSubtitle>
          <p>
            Embrace elegance and sophistication with every piece. Our curated
            collections are designed to inspire and empower.
          </p>
        </div>
      </HeroContainer>
      <ProductList />
    </div>
  );
};

export default HomePage;
