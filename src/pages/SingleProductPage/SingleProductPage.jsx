import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../api/apiCalls";
import {
  ProductCard,
  ProductImg,
  Title,
  Description,
  PriceContainer,
  RegularPrice,
  DiscountPercentage,
  DiscountedPrice,
  Price,
  ReviewsContainer,
} from "./SingleProductPage.style";
import Star from "../../components/star";
import { Button } from "../../App.styles";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to calculate discount percentage
  const calculateDiscountPercentage = (price, discountedPrice) => {
    if (!discountedPrice || discountedPrice >= price) return 0;
    return ((price - discountedPrice) / price) * 100;
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetchSingleProduct(productId);

        if (response && response.data) {
          setProduct(response.data);
        } else {
          throw new Error("Product data not found in response");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching product: {error}</p>;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  const discountPercentage = calculateDiscountPercentage(
    product.price,
    product.discountedPrice
  );

  return (
    <div className="m-auto col-10">
      <ProductCard className="m-auto text-center">
        <Title className="my-5">{product.title}</Title>
        <ProductImg src={product.image.url} alt={product.image.alt} />
        <Description className="text-center m-auto col-8 mt-4">
          {product.description}
        </Description>

        {/* Rating Section */}
        <div className="mt-3">
          <strong>
            Rating: 
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} filled={index < product.rating} />
            ))}
            {` ${product.rating} / 5`}
          </strong>
        </div>

        {/* Price Section */}
        <PriceContainer>
          {discountPercentage > 0 ? (
            <>
              <RegularPrice>Price: ${product.price.toFixed(2)}</RegularPrice>
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

        <Button className="w-50 m-auto mt-4">
          Add to cart <i className="fa-solid fa-cart-shopping"></i>
        </Button>

        <div className="mt-5">
          <h3>Customer Reviews</h3> 
          <ReviewsContainer className="card col-8 m-auto">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div key={review.id} className="mt-3">
                  <h3>{review.username}</h3> 
                  <span>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} filled={index < review.rating} />
                  ))}
                </span>
                  <p>{review.description}</p>
                </div>
              ))
            ) : (
              <p>No reviews available for this product.</p>
            )}{" "}
          </ReviewsContainer>
        </div>
      </ProductCard>
    </div>
  );
};

export default SingleProductPage;
