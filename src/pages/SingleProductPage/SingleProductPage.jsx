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
  ReviewCard,
} from "./SingleProductPage.style";
import Star from "../../components/star";
import { Button } from "../../App.styles";
import { useDispatch } from "react-redux";
import { addProduct } from "../Cart/cartSlice";
import { useNotification } from "../../components/Header/NotificationContext";
import GoBackButton from "../../components/GoBackBtn.jsx";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useDispatch();
  const { triggerNotification } = useNotification();

  const handleAddToCart = () => {
    if (addingToCart) return; 

    setAddingToCart(true);
    dispatch(addProduct(product)); 
    triggerNotification(); 

    setTimeout(() => {
      setAddingToCart(false); 
    }, 1000); 
  };

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
    <div className="m-auto col-12 col-sm-10">
        <GoBackButton />
      <ProductCard className="m-auto text-center">
        <Title className="my-3">{product.title}</Title>
        <ProductImg src={product.image.url} alt={product.image.alt} />
        <Description className="text-center m-auto col-8">
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

        {/* Add to Cart Button */}
        <Button onClick={handleAddToCart} className="col-7 col-sm-4 col-lg-3 m-auto mt-4" disabled={addingToCart}>
          {addingToCart ? (
            <>
              <i className="fa fa-spinner fa-spin"></i> Adding...
            </>
          ) : (
            <>
              Add to cart <i className="fa-solid fa-cart-shopping"></i>
            </>
          )}
        </Button>

        <div className="mt-5">
          <h3>Customer Reviews</h3>
          <div className="card-body col-12 col-sm-10 col-md-8 m-auto p-4">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <ReviewCard key={review.id} className=" p-3 mb-3 card">
                  <h5 className="card-title text-decoration-underline">
                    {review.username}
                  </h5>
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} filled={index < review.rating} />
                    ))}
                  </div>
                  <p className="card-body">{review.description}</p>
                </ReviewCard>
              ))
            ) : (
              <p>
                No reviews available for this product. <br /> Be the first to
                review this product{" "}
              </p>
            )}
            <Button>Create Review</Button>
          </div>
        </div>
      </ProductCard>
    </div>
  );
};

export default SingleProductPage;
