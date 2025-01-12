import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center bg-[#101010] border-b border-[#2f2f2f] rounded p-2 w-[350px] hover:border-[#5f5f5f] transition-all duration-300">
        <Search className="mr-2" color="#9f9f9f" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-white"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
