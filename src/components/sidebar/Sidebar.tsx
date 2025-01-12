import "../../App.css";
import {
  House,
  Popcorn,
  Clapperboard,
  Dot,
  Eye,
  Star,
  Workflow,
} from "lucide-react";
import SidebarSection from "./SidebarSection";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[#070707] text-[#dbdbdb]">
        <div className="border-r border-[#1f1f1f] w-[13%] h-screen">
          <SidebarSection title="Explore">
            <SidebarButton title="Home" url="/" size={20} icon={<House />} />
            <SidebarButton
              title="Movies"
              url="/"
              size={20}
              icon={<Clapperboard />}
            />
            <SidebarButton
              title="Series"
              url="/"
              size={20}
              icon={<Popcorn />}
            />
          </SidebarSection>
          <SidebarSection title="My content">
            <SidebarButton title="Watchlist" url="/" size={20} icon={<Eye />} />
            <SidebarButton
              title="Favorites"
              url="/"
              size={20}
              icon={<Star />}
            />
            <SidebarButton
              title="Recommended"
              url="/"
              size={20}
              icon={<Workflow />}
            />
          </SidebarSection>
          <SidebarSection title="Categories">
            <SidebarButton
              title="Action"
              url="/"
              size={20}
              color="#3498db"
              strokeWidth={8}
              icon={<Dot />}
            />
            <SidebarButton
              title="Sci-fi"
              url="/"
              size={20}
              color="#1abc9c"
              strokeWidth={8}
              icon={<Dot />}
            />
            <SidebarButton
              title="Horror"
              url="/"
              size={20}
              color="#9b59b6"
              strokeWidth={8}
              icon={<Dot />}
            />
            <SidebarButton
              title="Drama"
              url="/"
              size={20}
              color="#f1c40f"
              strokeWidth={8}
              icon={<Dot size={20} />}
            />
            <SidebarButton
              title="Comedy"
              url="/"
              size={20}
              color="#e74c3c"
              strokeWidth={8}
              icon={<Dot />}
            />
          </SidebarSection>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
