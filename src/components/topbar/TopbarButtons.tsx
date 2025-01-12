const TopbarButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center text-[#dbdbdb]">
      <a
        href="/login"
        className="mr-4 hover:text-[#ffffff] transition-text duration-300"
      >
        Log in
      </a>
      <div className="border border-[#1f1f1f] rounded p-1 w-[85px] flex justify-center items-center hover:border-[#2f2f2f] hover:bg-[#111111]  transition-border duration-300 cursor-pointer">
        <a href="/register">Sign Up</a>
      </div>
    </div>
  );
};

export default TopbarButtons;
