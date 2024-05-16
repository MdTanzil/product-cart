import CardBoard from "@/components/CardBoard";
import SearchFelid from "@/components/SearchFelid";
import GridIcon from "@/components/iconsButton/GridIcon";
import Navbar from "@/components/navbar/Navbar";
import GridAndListProvider from "@/providers/GridAndListProvider";
export default async function Home() {
  return (
    <GridAndListProvider>
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
                  {/* grid ad list icons */}
                  <GridIcon />
                </div>
              </div>
              <SearchFelid />
            </div>
          </div>
        </div>

        {/* Product */}

        <div className="mt-5 container mx-auto grid grid-cols-12 gap-4">
          {/* product areas */}
          <div className=" md:col-span-8  col-span-12">
            <CardBoard />
          </div>
          <div className="col-span-4">
            <p>product area</p>
          </div>
        </div>
      </main>
    </GridAndListProvider>
  );
}
