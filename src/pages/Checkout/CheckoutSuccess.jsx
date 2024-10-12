import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, HomeButton } from "./CheckoutSuccess.styles";
import { Helmet } from "react-helmet-async";

const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { purchasedItems } = location.state || { purchasedItems: [] };

  // Calculate total price
  const totalPrice = purchasedItems.reduce((total, item) => {
    const itemPrice = item.discountedPrice || item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div>
      <Helmet>
        <title>Thank You for Your Purchase | ECCOH Webshop</title>
        <meta
          name="description"
          content="Thank you for shopping at ECCOH Webshop! Your order has been successfully placed. Here’s your receipt and order details."
        />
        <meta
          name="keywords"
          content="ECCOH, order success, checkout, webshop, purchase receipt"
        />
        <meta
          property="og:title"
          content="Thank You for Your Purchase | ECCOH Webshop"
        />
        <meta
          property="og:description"
          content="Your order has been successfully placed. View your receipt here."
        />
      </Helmet>
      <h1 className="text-center my-4 ">Payment Successful</h1>
      <div className="col-8 col-xl-6 m-auto mt-5 card p-4">
        <div className="col-10 col-sm-6 m-auto">
          <h3 className="text-decoration-underline mb-4 ">Your Receipt</h3>
          <ul className="list-unstyled">
            {purchasedItems.length > 0 ? (
              purchasedItems.map((item, index) => (
                <li className="mb-3" key={index}>
                  <div className="d-flex align-items-start">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      className="me-3"
                    />
                    <div>
                      <strong>{item.title}: </strong>
                      {item.discountedPrice || item.price},-
                      <div className="text-muted">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li>No items purchased.</li>
            )}
          </ul>
        </div>
        <h4 className="m-auto">Total Price: {totalPrice.toFixed(2)},-</h4>
        <HomeButton
          onClick={() => navigate("/")}
          className="btn btn-link text-decoration-none mt-3 col-8 col-md-6 col-lg-4 col-xl-6 m-auto"
        >
          Return to Home
        </HomeButton>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
