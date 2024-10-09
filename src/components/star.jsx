import React from "react";

const Star = ({ filled }) => {
  return (
    <span style={{ color: filled ? "black" : "lightgray", fontSize: "1.5rem" }}>
      ★
    </span>
  );
};

export default Star;
