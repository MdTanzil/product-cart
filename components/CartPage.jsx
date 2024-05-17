"use client";
import { GridContext } from "@/providers/GridAndListProvider";
import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import Image from "next/image";
import { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import TotalText from "./TotalText";
const CartPage = () => {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#F6AA24",
    inactiveFillColor: "#fbf1a9",
  };
  const { cart, removeFromCart, totalPrice } = useContext(GridContext);
  return (
    <div className="space-y-3">
      {cart.map((product) => (
        <div
          key={product.id}
          className="card card-side bg-[#F7F8F8]  py-4 col-span-12 max-h-[170px] rounded-lg "
        >
          <div className="image-container min-w-40 w-40">
            <Image
              src={product.image}
              alt="Movie"
              width={163}
              height={161}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="card-body px-1 py-1  pl-5 gap-1">
            <h5 className="font-normal leading-6 text-base tracking-tight text-black">
              {product.title}
            </h5>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center pt-1 mt-1">
                  <ReactRating
                    className="text-[#F6AA24]"
                    itemStyles={myStyles}
                    readOnly={true}
                    style={{ maxWidth: 100 }}
                    value={product.rating?.rate || 5}
                  />
                </div>
                <div className="">
                  <p className="text-[#ADB0B7]">
                    ({product.rating.count} Review)
                  </p>
                </div>
              </div>
              <div>
                <RiDeleteBinLine
                  onClick={() => removeFromCart(product)}
                  className="text-xl font-semibold mr-4 cursor-pointer text-[#F2415A]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pr-4 pb-4">
              <span className="text-xl font-bold text-[#F2415A]">
                ${product.price}
              </span>
              {/* <button className="text-white bg-[#212529] focus:outline-none rounded-md text-sm px-2.5 py-2.5 text-center">
              Add to cart
            </button> */}
            </div>
          </div>
        </div>
      ))}
      <TotalText />
    </div>
  );
};

export default CartPage;
