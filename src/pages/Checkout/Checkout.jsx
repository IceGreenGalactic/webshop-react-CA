import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import visaImage from "../../assets/images/card.png";
import masterCardImage from "../../assets/images/mastercard.png";
import {
  CardDetailsContainer,
  RadioButtonContainer,
} from "./Checkout.styles.js";

const schema = yup
  .object()
  .shape({
    cardNumber: yup.string().required("Card number is required"),
    expiryDate: yup.string().required("Expiry date is required"),
    cvc: yup.string().required("CVC is required"),
  })
  .required();

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState("");

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    // Simulate processing the payment
    setTimeout(() => {
      console.log("Payment processed successfully!");
      navigate("/CheckoutSuccess");
      reset();
    }, 2000);
  };

  const handleExpiryChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/\D/g, "");

    // Format the expiry date as MM/YY
    if (formattedValue.length >= 2) {
      const month = formattedValue.slice(0, 2);
      const year = formattedValue.slice(2, 4);
      setValue("expiryDate", `${month}/${year}`);
    } else {
      setValue("expiryDate", formattedValue);
    }
  };

  return (
    <div className="col-8 col-lg-6 col-md-7 col-xl-5 m-auto mt-5 card p-4">
      <h1 className="mb-4">Payment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="col-sm-12 col-form-label">Select Card Type:</label>

          <RadioButtonContainer>
            <input
              type="radio"
              value="visa"
              {...register("cardType")}
              checked={selectedCard === "visa"}
              onChange={() => setSelectedCard("visa")}
            />
            <img src={visaImage} alt="Visa" />
            Visa
          </RadioButtonContainer>

          {selectedCard === "visa" && (
            <CardDetailsContainer className="card-details mb-3">
              <div className="mb-3">
                <label htmlFor="cardNumber" className="col-form-label">
                  Card Number:
                </label>
                <input
                  {...register("cardNumber")}
                  className="form-control"
                  placeholder="Enter your card number"
                />
                <p className="text-danger">{errors.cardNumber?.message}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="col-form-label">
                  Expiry Date:
                </label>
                <input
                  {...register("expiryDate")}
                  className="form-control"
                  placeholder="MM/YY"
                  onChange={handleExpiryChange}
                />
                <p className="text-danger">{errors.expiryDate?.message}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="cvc" className="col-form-label">
                  CVC:
                </label>
                <input
                  {...register("cvc")}
                  className="form-control"
                  placeholder="CVC"
                />
                <p className="text-danger">{errors.cvc?.message}</p>
              </div>
            </CardDetailsContainer>
          )}

          <RadioButtonContainer>
            <input
              type="radio"
              value="mastercard"
              {...register("cardType")}
              checked={selectedCard === "mastercard"}
              onChange={() => setSelectedCard("mastercard")}
            />
            <img src={masterCardImage} alt="MasterCard" />
            MasterCard
          </RadioButtonContainer>

          {selectedCard === "mastercard" && (
            <CardDetailsContainer className="card-details mb-3">
              <div className="mb-3">
                <label htmlFor="cardNumber" className="col-form-label">
                  Card Number:
                </label>
                <input
                  {...register("cardNumber")}
                  className="form-control"
                  placeholder="Enter your card number"
                />
                <p className="text-danger">{errors.cardNumber?.message}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="col-form-label">
                  Expiry Date:
                </label>
                <input
                  {...register("expiryDate")}
                  className="form-control"
                  placeholder="MM/YY"
                  onChange={handleExpiryChange}
                />
                <p className="text-danger">{errors.expiryDate?.message}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="cvc" className="col-form-label">
                  CVC:
                </label>
                <input
                  {...register("cvc")}
                  className="form-control"
                  placeholder="CVC"
                />
                <p className="text-danger">{errors.cvc?.message}</p>
              </div>
            </CardDetailsContainer>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
