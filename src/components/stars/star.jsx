import React from "react";
import { StarIcon } from "./star.styles";

const Star = ({ filled }) => {
  return <StarIcon filled={filled}>★</StarIcon>;
};

export default Star;
