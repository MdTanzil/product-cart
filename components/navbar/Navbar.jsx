import Image from "next/image";
import NavButton from "./NavButton";
import logo from "./logo.png";
const Navbar = () => {
  return (
    <nav className="bg-[#212529] ">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <Image src={logo} height={55} width={185} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">
            <NavButton to={"/"}>Product</NavButton>
            <NavButton to={"/cart"}>Cart</NavButton>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" text-white lg:hidden">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14.4813C12.5523 14.4813 13 14.929 13 15.4813C13 16.0336 12.5523 16.4813 12 16.4813H3C2.44772 16.4813 2 16.0336 2 15.4813C2 14.929 2.44772 14.4813 3 14.4813H12ZM17 7.48132C17.5523 7.48132 18 7.92904 18 8.48132C18 9.03361 17.5523 9.48132 17 9.48132H1C0.447716 9.48132 0 9.03361 0 8.48132C0 7.92904 0.447715 7.48132 1 7.48132H17ZM15 0.481323C15.5523 0.481323 16 0.929038 16 1.48132C16 2.03361 15.5523 2.48132 15 2.48132H6C5.44771 2.48132 5 2.03361 5 1.48132C5 0.929038 5.44772 0.481323 6 0.481323H15Z"
                  fill="#F9F9F9"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#212529] text-white rounded-box w-52"
            >
              <NavButton to={"/"}>Product</NavButton>
              <NavButton to={"/cart"}>Cart</NavButton>
            </ul>
          </div>
          <button className="btn w-[104px] hidden lg:block  h-[45px] font-bold bg-[#525CEB] rounded-sm text-white outline-none border-none hover:bg-[#525CEB]">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
