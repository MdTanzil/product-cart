"use client";

import { GridContext } from "@/providers/GridAndListProvider";
import { useContext } from "react";

const TotalText = ({ sx }) => {
  console.log(sx);
  const { totalPrice } = useContext(GridContext);
  return (
    <p className={sx ? sx : `text-right font-semibold mt-5 text-lg`}>
      Total : ${totalPrice}
    </p>
  );
};

export default TotalText;
