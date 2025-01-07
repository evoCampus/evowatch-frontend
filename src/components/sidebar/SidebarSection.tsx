import React from "react";

interface SidebarSectionProps {
  children: React.ReactNode;
  title: string;
}

export default function SidebarSection({
  children,
  title,
}: SidebarSectionProps): React.ReactNode {
  return (
    <div className="flex items-center justify-center flex-col pb-6">
      <span className="text-xs font-semibold text-left w-full pl-4 text-[#c9c9c9]">
        {title}
      </span>
      {children}
    </div>
  );
}
