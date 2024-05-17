import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import GridAndListProvider from "@/providers/GridAndListProvider";

const layout = ({ children }) => {
  return (
    <GridAndListProvider>
      <Navbar />
      <div className="container mx-auto mt-11">{children}</div>
      <Footer />
    </GridAndListProvider>
  );
};

export default layout;
