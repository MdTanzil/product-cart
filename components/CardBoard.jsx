"use client";
import { GridContext } from "@/providers/GridAndListProvider";
import { getProduct } from "@/utils/getproduct";
import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ListCard from "./ListCard";

const CardBoard = () => {
  const [products, setProducts] = useState([]);
  const { isGrid, setIsGrid } = useContext(GridContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProduct();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-x-2 gap-y-4 overflow-hidden">
      {/* Correct rendering of Card components */}
      {isGrid
        ? products.map((product) => (
            <Card key={product?.id} product={product} />
          ))
        : products.map((product) => (
            <ListCard key={product?.id} product={product} />
          ))}
    </div>
  );
};

export default CardBoard;
