"use client";
import { createContext, useState } from "react";
export const GridContext = createContext();
const GridAndListProvider = ({ children }) => {
  const [isGrid, setIsGrid] = useState();
  return (
    <GridContext.Provider value={{ isGrid, setIsGrid }}>
      {children}
    </GridContext.Provider>
  );
};

export default GridAndListProvider;
