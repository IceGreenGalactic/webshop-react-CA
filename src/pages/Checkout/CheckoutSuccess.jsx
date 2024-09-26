import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../App.styles";
import { Image } from "./CheckoutSuccess.styles";

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
      <h1 className="text-center my-4 ">Payment Successful</h1>
      <div className="col-8 col-lg-6 m-auto mt-5 card p-4">
        <div className="col-6 m-auto">
          <h3 className="text-decoration-underline mb-4">Your Receipt</h3>
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
                      <strong>{item.title}</strong>: $
                      {item.discountedPrice || item.price}
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
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
        <Button
          onClick={() => navigate("/")}
          className="btn btn-primary mt-3 col-8 col-md-6 col-lg-4 m-auto"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
