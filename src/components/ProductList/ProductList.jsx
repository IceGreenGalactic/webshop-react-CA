import React, { useState, useEffect } from "react";
import { Button } from "../../App.styles";
import SearchBar from "../SearchBar";
import {
  ProductCard,
  PriceContainer,
  ProductImg,
  Title,
  Description,
  Price,
  DiscountPercentage,
  DiscountedPrice,
  RegularPrice,
} from "./ProductList.styles";
import { fetchAllProducts } from "../../api/apiCalls";
import { Link } from "react-router-dom";
import Star from "../stars/star";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllProducts();
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const calculateDiscountPercentage = (price, discountedPrice) => {
    if (!discountedPrice || discountedPrice >= price) return 0;
    return ((price - discountedPrice) / price) * 100;
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="col-10 m-auto">
      <h1 className="text-center my-4">Our Products</h1>
      <div className="col-10 col-md-8 col-lg-8 m-auto">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="row justify-content-evenly">
        {filteredProducts.map((product) => {
          const discountPercentage = calculateDiscountPercentage(
            product.price,
            product.discountedPrice
          );

          return (
            <div
              className="col-12 col-sm-6 col-xl-4 mb-3 p-0 m-auto"
              key={product.id}
            >
              <ProductCard
                as={Link}
                to={`/product/${product.id}`}
                className="card text-center m-auto text-decoration-none col-11"
              >
                <div>
                  <ProductImg
                    src={product.image.url}
                    alt={product.image.alt}
                    className="card-img-top img-fluid"
                  />
                  {discountPercentage > 0 && (
                    <DiscountPercentage>
                      {discountPercentage.toFixed(0)}% OFF
                    </DiscountPercentage>
                  )}
                </div>
                <Title className="mt-3">{product.title}</Title>
                <Description className="col-10 mb-1 m-auto">
                  {product.description}
                </Description>
                <div className="mt-2 mb-4">
                  <strong>
                    Rating:
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} filled={index < product.rating} />
                    ))}
                    {` ${product.rating} / 5`}
                  </strong>
                </div>
                <PriceContainer>
                  {discountPercentage > 0 ? (
                    <>
                      <RegularPrice className="my-2">
                        Price: {product.price.toFixed(2)},-
                      </RegularPrice>
                      <DiscountedPrice>
                        Price: {product.discountedPrice.toFixed(2)},-
                      </DiscountedPrice>
                    </>
                  ) : (
                    <Price>Price: {product.price.toFixed(2)},-</Price>
                  )}
                </PriceContainer>
                <Button className="m-4">View Product</Button>
              </ProductCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
