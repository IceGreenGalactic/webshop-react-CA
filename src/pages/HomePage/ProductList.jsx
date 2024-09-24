import React, { useState, useEffect } from "react";
import { Button } from "../../App.styles";
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

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllProducts();
        setProducts(data);
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
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="col-10 m-auto">
      <h1 className="text-center my-4">Our Products</h1>

      <div className="input-group mb-4 w-50 m-auto">
        <input
          type="text"
          placeholder="Search for products..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch} className="btn btn-primary">
          Search
        </Button>{" "}
        {}
      </div>
      <div className="row justify-content-evenly">
        {products.map((product) => {
          const discountPercentage = calculateDiscountPercentage(
            product.price,
            product.discountedPrice
          );

          return (
            <div
              className="col-12 col-sm-6 col-xl-4 mb-3 p-0 m-auto"
              key={product.id}
            >
              <ProductCard className="card text-center m-auto col-11 ">
                <ProductImg
                  src={product.image.url}
                  alt={product.image.alt}
                  className="card-img-top img-fluid"
                />
                <Title className="mt-3">{product.title}</Title>
                <Description className="col-10 mb-4 m-auto">
                  {product.description}
                </Description>
                <PriceContainer>
                  {discountPercentage > 0 ? (
                    <>
                      <RegularPrice>
                        Price: ${product.price.toFixed(2)}
                      </RegularPrice>
                      <DiscountPercentage>
                        {discountPercentage.toFixed(2)}% off
                      </DiscountPercentage>
                      <DiscountedPrice>
                        Price: ${product.discountedPrice.toFixed(2)}
                      </DiscountedPrice>
                    </>
                  ) : (
                    <Price>Price: ${product.price.toFixed(2)}</Price>
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
