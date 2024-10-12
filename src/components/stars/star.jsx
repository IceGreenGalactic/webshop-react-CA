import React from "react";

const Star = ({ filled }) => {
  return (
    <span
      style={{ color: filled ? "#FF8C42" : "lightgray", fontSize: "1.5rem" }}
    >
      ★
    </span>
  );
};

export default Star;
