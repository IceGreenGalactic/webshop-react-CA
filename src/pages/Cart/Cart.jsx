import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter.jsx";
import { removeProduct, clearCart } from "./cartSlice.js";
import {
  CartContainer,
  CartItem,
  Image,
  DeleteBtn,
  TitleContainer,
  TotalContainer,
} from "./Cart.styles.js";
import { Button } from "../../App.styles.js";
import { useNavigate } from "react-router-dom";
import GoBackButton from "../../components/GoBackBtn.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const { products, cartTotal } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    navigate("/Checkout");
  };

  return (
    <div className="col-10 m-auto col-lg-8 col-xl-6 mt-3">
      {" "}
      <GoBackButton />
      <h1 className="my-5">Your Cart</h1>
      {products.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <>
          {products.map((product) => {
            const totalPrice =
              (product.discountedPrice || product.price).toFixed(2) *
              product.quantity;

            return (
              <CartItem
                className="border-bottom border-top gap-5"
                key={product.id}
              >
                <Image
                  className="col-2 p-0"
                  src={product.image.url}
                  alt={product.title}
                />

                <div className="d-flex justify-content-between">
                  <CartContainer className="me-3 text-start">
                    <TitleContainer>
                      <h3 className="my-1">{product.title}</h3>
                    </TitleContainer>
                    <p className="mb-1">
                      $
                      {product.discountedPrice
                        ? product.discountedPrice.toFixed(2)
                        : product.price.toFixed(2)}
                    </p>

                    <Counter
                      productId={product.id}
                      quantity={product.quantity}
                    />

                    <p>Total: ${totalPrice}</p>
                  </CartContainer>
                </div>

                <DeleteBtn
                  className="btn btn-transparent text-danger"
                  onClick={() => handleRemove(product.id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </DeleteBtn>
              </CartItem>
            );
          })}
          <TotalContainer className="mt-5 m-auto text-center">
            <h2>Total: ${cartTotal.toFixed(2)}</h2>
            <Button className="me-4" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Button onClick={handleCheckout}>Checkout</Button>
          </TotalContainer>
        </>
      )}
    </div>
  );
};

export default Cart;
