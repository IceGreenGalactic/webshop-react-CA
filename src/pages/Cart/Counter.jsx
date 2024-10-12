import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "./cartSlice";

function Counter({ productId, quantity }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div>
      <button
        className="btn btn-transparent ps-2 py-2"
        onClick={handleDecrement}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <span>{quantity}</span>
      <button
        className="btn btn-transparent pe-2 py-2"
        onClick={handleIncrement}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default Counter;
