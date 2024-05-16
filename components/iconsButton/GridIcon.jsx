"use client";
import { GridContext } from "@/providers/GridAndListProvider";
import { useContext } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
const GridIcon = () => {
  const { isGrid, setIsGrid } = useContext(GridContext);

  const handleChange = () => {
    setIsGrid(true);
  };
  return (
    <>
      <BsFillGrid3X3GapFill
        onClick={handleChange}
        className={
          isGrid
            ? `h-6 w-6 text-[#525CEB] cursor-pointer`
            : `h-6 w-6 cursor-pointer`
        }
      />
      <FaList
        onClick={() => setIsGrid(false)}
        className={
          isGrid
            ? `h-6 w-6 cursor-pointer `
            : `h-6 w-6 text-[#525CEB] cursor-pointer`
        }
      />
    </>
  );
};

export default GridIcon;
