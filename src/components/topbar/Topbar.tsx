import "../../App.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TopbarButtons from "./TopbarButtons";

const Topbar = () => {
  return (
    <>
      <div className="bg-[#070707] text-white p-4 border-b border-[#1f1f1f] flex justify-evenly items-center">
        <Logo />
        <SearchBar />
        <TopbarButtons />
      </div>
    </>
  );
};

export default Topbar;
