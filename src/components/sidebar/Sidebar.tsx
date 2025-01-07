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
      <div className="bg-[#070707] text-white">
        <div className="border-r border-[#1f1f1f] w-[13%] h-screen">
          {/* Topbar */}
          <div className="h-[10%] flex items-center justify-center">
            <span className="text-xl font-medium">EvoWatch</span>
          </div>
          <SidebarSection title="Explore">
            <SidebarButton title="Home" url="/" icon={<House size={20} />} />
            <SidebarButton
              title="Movies"
              url="/"
              icon={<Clapperboard size={20} />}
            />
            <SidebarButton
              title="Series"
              url="/"
              icon={<Popcorn size={20} />}
            />
          </SidebarSection>

          <SidebarSection title="My content">
            <SidebarButton title="Watchlist" url="/" icon={<Eye size={20} />} />
            <SidebarButton
              title="Favorites"
              url="/"
              icon={<Star size={20} />}
            />
            <SidebarButton
              title="Recommended"
              url="/"
              icon={<Workflow size={20} />}
            />
          </SidebarSection>

          <SidebarSection title="Categories">
            <SidebarButton
              title="Action"
              url="/"
              icon={<Dot size={20} color="#3498db" strokeWidth={8} />}
            />
            <SidebarButton
              title="Sci-fi"
              url="/"
              icon={<Dot size={20} color="#1abc9c" strokeWidth={8} />}
            />
            <SidebarButton
              title="Horror"
              url="/"
              icon={<Dot size={20} color="#9b59b6" strokeWidth={8} />}
            />
            <SidebarButton
              title="Drama"
              url="/"
              icon={<Dot size={20} color="#f1c40f" strokeWidth={8} />}
            />
            <SidebarButton
              title="Comedy"
              url="/"
              icon={<Dot size={20} color="#e74c3c" strokeWidth={8} />}
            />
          </SidebarSection>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
