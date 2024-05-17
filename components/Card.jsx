import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

const Card = ({ product }) => {
  // Declare it outside your component so it doesn't get re-created
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#F6AA24",
    inactiveFillColor: "#fbf1a9",
  };

  const { title, price, description, category, image, rating } = product;

  return (
    <div className="w-full col-span-6 lg:col-span-3 bg-[#F7F8F8] border border-gray-200 shadow rounded-lg flex flex-col">
      <div className="w-[236px] h-[180px] ">
        <Image
          className="rounded-lg h-[180px] width-[236px] object-contain"
          src={image}
          alt="product image"
          width={236}
          height={180}
        />
      </div>
      <div className="px-5 pb-5 py-5 flex flex-col flex-grow">
        <h5 className="font-normal leading-6 text-base tracking-tight text-black">
          {title}
        </h5>

        <div className="flex items-center pt-1 mt-1">
          <ReactRating
            className="text-[#F6AA24]"
            itemStyles={myStyles}
            readOnly={true}
            style={{ maxWidth: 100 }}
            value={rating.rate}
          />
        </div>
        <div className="mb-1">
          <p className="text-[#ADB0B7]">({rating.count} Review)</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="md:text-xl text-base font-bold text-[#F2415A]">
            ${price}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Card;
