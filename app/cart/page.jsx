import CartPage from "@/components/CartPage";

const cartpage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <CartPage />
      <div className="mt-4 space-x-2">
        <input type="checkbox" id="cha" className="" />
        <label htmlFor="cha" className="font-light">
          I&aposve read and agree to the  terms and conditions,  refund policy
          & privacy policy
        </label>
      </div>

      <p className="text-center mt-2">
        <button className="text-white text-right bg-[#212529] focus:outline-none rounded-md text-sm px-2.5 py-2.5 ">
          CHECKOUT
        </button>
      </p>
    </div>
  );
};

export default cartpage;
