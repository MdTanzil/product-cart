import Card from "@/components/Card";
import SearchFelid from "@/components/SearchFelid";
import Navbar from "@/components/navbar/Navbar";
import { getProduct } from "@/utils/getproduct";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
export default async function Home() {
  const products = await getProduct();
  console.log(products);
  return (
    <main>
      <Navbar />
      <div className="container mx-auto mt-11">
        <div className="grid-cols-12 grid">
          <div className="md:col-span-8  col-span-12 ">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-3xl">Our All Products</h4>
              </div>
              <div className="flex justify-center gap-3">
                <BsFillGrid3X3GapFill className="h-6 w-6" />
                <FaList className="h-6 w-6" />
              </div>
            </div>
            <SearchFelid />
          </div>
          {/* <div className="col-span-4  bg-red-300">hello</div> */}
        </div>
      </div>

      {/* Product */}

      <div className="mt-5 container mx-auto grid grid-cols-12">
        {/* product areas */}
        <div className=" md:col-span-8  col-span-12">
          <div className="grid grid-cols-12 gap-x-2 gap-y-4">
            {products.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
            {/* <Card className="" /> */}
          </div>
        </div>
        <div className="col-span-4">
          <p>product area</p>
        </div>
      </div>
    </main>
  );
}
