import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

const ListCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#F6AA24",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div className="card card-side bg-[#F7F8F8]  py-4 col-span-12 max-h-fit rounded-lg ">
      <div className="mx-w-[200px]  md:mx-w-[358px] md:mx-h-[161px] ">
        <Image
          src={image}
          alt="Movie "
          width={358}
          height={161}
          className="w-[200px] md:w-[358px] h-[161px] object-contain"
        />
      </div>
      <div className="card-body px-1 py-1  pl-5 gap-1">
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
        <div className="">
          <p className="text-[#ADB0B7]">({rating.count} Review)</p>
        </div>
        <div className="flex items-center justify-between mt-auto pr-4 pb-4">
          <span className="text-xl font-bold text-[#F2415A]">${price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
