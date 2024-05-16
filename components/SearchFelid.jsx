import { IoSearchSharp } from "react-icons/io5";
const SearchFelid = () => {
  return (
    <form class="mt-5 mx-auto">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearchSharp className="text-xl" />
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm  rounded-full border border-[#49525A] outline-none "
          placeholder="Search An Item"
          required
        />
      </div>
    </form>
  );
};

export default SearchFelid;
