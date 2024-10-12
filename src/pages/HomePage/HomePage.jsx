import React from "react";
import ProductList from "../../components/ProductList/ProductList.jsx";
import { HeroContainer, HeroSubtitle, HeroTitle } from "./HomePage.syles.js";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>ECCOH Webshop - Unique Styles and Trendy Products</title>
        <meta
          name="description"
          content="Shop our curated collections of perfumes, sneakers, headphones, and more. Find unique styles that express your individuality at ECCOH Webshop."
        />
        <meta
          name="keywords"
          content="ECCOH, boutique, perfume, sneakers, headphones, trendy products, ecommerce"
        />
        <meta
          property="og:title"
          content="ECCOH Webshop - Unique Styles and Trendy Products"
        />
        <meta
          property="og:description"
          content="Discover a wide range of perfumes, sneakers, headphones, and more at ECCOH Webshop."
        />

      </Helmet>

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
