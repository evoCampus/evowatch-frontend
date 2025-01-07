import React from "react";

interface SidebarButtonProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

export default function SidebarButton({
  title,
  icon,
  url,
}: SidebarButtonProps): React.ReactNode {
  return (
    <div className="w-full h-[60px] flex justify-center items-center p-2">
      <div className="flex flex-row items-center pl-4 w-[85%] h-[100%] border border-[#070707] rounded hover:bg-[#111111] hover:border-[#1f1f1f] transition-all duration-300 cursor-pointer">
        {icon}
        <a href={url} className="ml-2 font-normal">
          {title}
        </a>
      </div>
    </div>
  );
}
