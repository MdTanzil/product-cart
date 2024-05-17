/* eslint-disable react/no-unescaped-entities */
import CardBoard from "@/components/CardBoard";
import CartPage from "@/components/CartPage";
import SearchFelid from "@/components/SearchFelid";
import Footer from "@/components/footer/Footer";
import GridIcon from "@/components/iconsButton/GridIcon";
import Navbar from "@/components/navbar/Navbar";
import GridAndListProvider from "@/providers/GridAndListProvider";
export default async function Home() {
  return (
    <GridAndListProvider>
      <main className="overflow-hidden">
        <Navbar />
        <div className="container mx-auto mt-11 p-1">
          <div className="grid-cols-12 grid">
            <div className="lg:col-span-8  col-span-12 ">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-3xl">Our All Products</h4>
                </div>
                <div className="flex justify-center gap-3">
                  {/* grid ad list icons */}
                  <GridIcon />
                </div>
              </div>
              <SearchFelid />
            </div>
          </div>
        </div>

        {/* Product */}

        <div className="mt-5 container mx-auto grid grid-cols-12 gap-4 p-1">
          {/* product areas */}
          <div className=" lg:col-span-8  col-span-12">
            <CardBoard />
          </div>
          <div className="col-span-4  hidden lg:block">
            {/* Cart Area  */}

            {/* add to cart bottom area  */}
            <div className="border p-2 border-[#212529]">
              <button className="text-white bg-[#212529] focus:outline-none rounded-md text-sm w-full px-2.5 py-2.5 text-center font-semibold">
                Selected Products
              </button>
              <CartPage />

              <div className="mt-4 space-x-2">
                <input type="checkbox" id="cha" className="" />
                <label htmlFor="cha" className="font-light">
                  I've read and agree to the  terms and conditions,  refund
                  policy & privacy policy
                </label>
              </div>
              <p className="text-right mt-2 ">
                <button className="text-white text-right bg-[#212529] focus:outline-none rounded-md text-sm px-2.5 py-2.5 ">
                  CHECKOUT
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </GridAndListProvider>
  );
}
