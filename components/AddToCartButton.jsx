"use client";

import { GridContext } from "@/providers/GridAndListProvider";
import { useContext } from "react";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(GridContext);
  return (
    <button
      onClick={() => addToCart(product)}
      className="text-white bg-[#212529] focus:outline-none rounded-md text-sm px-2.5 py-2.5 text-center"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
