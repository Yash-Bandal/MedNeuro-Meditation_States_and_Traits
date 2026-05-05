import { NavLink } from "react-router-dom";
import {
    FaSignOutAlt,
    FaListUl,
    FaBalanceScale,
    FaCog,
    FaHome,
} from "react-icons/fa";
import Logo from "../assets/icons/medneuro-nobg.png";
import { BarChart3, Lightbulb, Upload } from "lucide-react";

const Sidebar = () => {
    const navItems = [
        { to: "/", label: "Dashboard", icon: <FaHome /> },
        { to: "/cards", label: "Participants", icon: <FaListUl /> },
        { to: "/compare", label: "Compare", icon: <FaBalanceScale /> },
        { to: "/analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
        { to: "/keyinsights", label: "Key Insights", icon: <Lightbulb size={18} /> },
        { to: "/upload-eeg", label: "Upload EEG Data", icon: <Upload size={18} /> },
        { to: "/settings", label: "Settings", icon: <FaCog /> },
    ];

    return (
        <div
            className="
        group h-screen w-20 flex-shrink-0
        bg-white text-gray-800
        border-r border-gray-200
        transition-[width] duration-500 ease-in-out
        hover:w-80
        overflow-x-hidden
      "
        >
            <div
                className="
        relative flex items-center justify-center
        h-28 px-5
        border-b border-gray-200/70
        after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4
        after:h-[1px] after:bg-gray-300/40
      "
            >
                <div className="relative flex items-center justify-center h-24 border-b border-gray-200">
                    <div className="flex items-center justify-center h-24">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="
                                object-contain
                                transition-all duration-300 ease-in-out
                                h-10 w-10
                                group-hover:h-32 group-hover:w-32"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-[calc(100%-7rem)] overflow-hidden">
                <nav className="flex-1 pt-6 px-3 space-y-1.5 overflow-y-auto overflow-x-hidden">
                    {navItems.map(({ to, label, icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => `
                flex items-center gap-4
                py-3.5 px-4
                rounded-lg
                text-gray-700
                transition-colors duration-200
                hover:bg-gray-50 hover:text-sky-700
                ${isActive ? "bg-sky-50 text-sky-700 font-medium" : ""}
                whitespace-nowrap
                overflow-hidden text-ellipsis
              `}
                        >
                            <span className="text-xl w-7 flex-shrink-0 text-center">
                                {icon}
                            </span>
                            <span
                                className="
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200 delay-100
                overflow-hidden text-ellipsis
              "
                            >
                                {label}
                            </span>
                        </NavLink>
                    ))}
                </nav>

                <div className="px-3 pb-6 pt-4 border-t border-gray-100 mt-auto">
                    <button
                        className="
              flex items-center gap-4
              py-3.5 px-4 w-full
              rounded-lg
              text-gray-700 hover:bg-gray-50 hover:text-rose-700
              transition-colors duration-200
              whitespace-nowrap
              overflow-hidden text-ellipsis
            "
                    >
                        <span className="text-xl w-7 flex-shrink-0 text-center">
                            <FaSignOutAlt />
                        </span>
                        <span
                            className="
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200 delay-100
              overflow-hidden text-ellipsis
            "
                        >
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

