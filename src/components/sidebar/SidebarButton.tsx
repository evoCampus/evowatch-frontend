import React from "react";

interface SidebarButtonProps {
  title: string;
  icon: React.ReactElement;
  url: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function SidebarButton({
  title,
  icon,
  url,
  size,
  strokeWidth,
  color,
}: SidebarButtonProps): React.ReactNode {
  const iconProps = {
    size,
    strokeWidth,
    color,
  };
  return (
    <div className="w-full h-[60px] flex justify-center items-center p-2">
      <div className="flex flex-row items-center pl-4 w-[85%] h-[100%] border border-[#070707] rounded hover:bg-[#111111] hover:border-[#1f1f1f] transition-all duration-300 cursor-pointer">
        {React.cloneElement(icon, { ...iconProps })}
        <a href={url} className="ml-2 font-normal">
          {title}
        </a>
      </div>
    </div>
  );
}
