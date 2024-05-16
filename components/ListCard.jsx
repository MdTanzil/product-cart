import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import Image from "next/image";

const ListCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#F6AA24",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div className="card card-side bg-[#F7F8F8]  py-4 col-span-12 max-h-[170px] rounded-lg ">
      <figure>
        <Image
          src={image}
          alt="Movie "
          width={358}
          height={161}
          className="w-[358px] h-[161px] object-contain"
        />
      </figure>
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
          <a
            href="#"
            className="text-white bg-[#212529] focus:outline-none rounded-md text-sm px-2.5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
