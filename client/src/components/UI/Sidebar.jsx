import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaSignOutAlt,
    FaCog,
    FaHome,
} from "react-icons/fa";

import Logo from "../../assets/icons/medneuro-nobg.png";

import {
    Upload,
    ChevronLeft,
    ChevronRight,
    Sigma,
} from "lucide-react";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
    const [expanded, setExpanded] = useState(false);

    const navItems = [
        { to: "/", label: "Dashboard", icon: <FaHome /> },

        {
            to: "/stat-results",
            label: "Behavioural Analysis",
            icon: <Sigma size={18} />,
        },

        {
            to: "/upload-eeg",
            label: "Regional Classifier",
            icon: <Upload size={18} />,
        },

        {
            to: "/settings",
            label: "Settings",
            icon: <FaCog />,
        },
    ];

    return (
        <>
            {/* ====================================================== */}
            {/* MOBILE OVERLAY */}
            {/* ====================================================== */}

            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                />
            )}

            {/* ====================================================== */}
            {/* MOBILE SIDEBAR */}
            {/* ====================================================== */}

            <div
                className={`
          fixed top-0 left-0 z-50 h-screen w-[280px]
          bg-white border-r border-gray-200 shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* MOBILE HEADER */}
                <div className="h-24 px-6 flex items-center border-b border-gray-200">

                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-12 object-contain"
                    />
                </div>

                {/* MOBILE NAV */}
                <nav className="px-4 py-6 space-y-2">

                    {navItems.map(({ to, label, icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) => `
                flex items-center gap-4
                px-4 py-3 rounded-xl
                transition-all duration-200
                ${isActive
                                    ? "bg-sky-50 text-sky-700 font-medium"
                                    : "text-gray-700 hover:bg-gray-50"
                                }
              `}
                        >
                            <span className="text-lg">
                                {icon}
                            </span>

                            <span className="text-sm">
                                {label}
                            </span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* ====================================================== */}
            {/* DESKTOP SIDEBAR */}
            {/* ====================================================== */}

            <div
                className={`
          hidden lg:flex
          h-screen
          ${expanded ? "w-72" : "w-20"}
          flex-shrink-0
          bg-white text-gray-800
          border-r border-gray-200
          transition-[width] duration-500 ease-in-out
          overflow-x-hidden
        `}
            >
                <div className="flex flex-col w-full">

                    {/* HEADER */}
                    <div
                        className="
              relative flex items-center justify-center
              h-28 px-5 border-b border-gray-200
            "
                    >

                        <div className="flex items-center justify-center h-24">

                            <img
                                src={Logo}
                                alt="Logo"
                                className={`
                  object-contain
                  transition-all duration-300 ease-in-out
                  ${expanded ? "h-28 w-28" : "h-10 w-10 opacity-0"}
                `}
                            />
                        </div>

                        <button
                            onClick={() => setExpanded((prev) => !prev)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            {expanded ? (
                                <ChevronLeft size={18} />
                            ) : (
                                <ChevronRight size={18} />
                            )}
                        </button>
                    </div>

                    {/* NAV */}
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
                    transition-colors duration-200
                    ${isActive
                                            ? "bg-sky-50 text-sky-700 font-medium"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                        }
                  `}
                                >
                                    <span className="text-xl w-7 flex-shrink-0 text-center">
                                        {icon}
                                    </span>

                                    <span
                                        className={`
                      transition-opacity duration-200 delay-100
                      overflow-hidden text-ellipsis
                      ${expanded ? "opacity-100" : "opacity-0"}
                    `}
                                    >
                                        {label}
                                    </span>
                                </NavLink>
                            ))}
                        </nav>

                        {/* FOOTER */}
                        <div className="px-3 pb-6 pt-4 border-t border-gray-100 mt-auto">

                            <button
                                className="
                  flex items-center gap-4
                  py-3.5 px-4 w-full
                  rounded-lg
                  text-gray-700 hover:bg-gray-50 hover:text-rose-700
                  transition-colors duration-200
                "
                            >
                                <span className="text-xl w-7 flex-shrink-0 text-center">
                                    <FaSignOutAlt />
                                </span>

                                <span
                                    className={`
                    transition-opacity duration-200 delay-100
                    ${expanded ? "opacity-100" : "opacity-0"}
                  `}
                                >
                                    Logout
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;


// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//     FaSignOutAlt,
//     FaBalanceScale,
//     FaCog,
//     FaHome,
// } from "react-icons/fa";
// import Logo from "../../assets/icons/medneuro-nobg.png";
// import { BarChart3, Upload, ChevronLeft, ChevronRight, Sigma } from "lucide-react";

// const Sidebar = () => {
//     const [expanded, setExpanded] = useState(false);

//     const navItems = [
//         { to: "/", label: "Dashboard", icon: <FaHome /> },
//         // { to: "/compare", label: "Compare", icon: <FaBalanceScale /> },
//         // { to: "/analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
//         { to: "/stat-results", label: "Behavioural Analysis", icon: <Sigma size={18} /> },
//         { to: "/upload-eeg", label: "Regional Classifier ", icon: <Upload size={18} /> },
//         { to: "/settings", label: "Settings", icon: <FaCog /> },
//     ];

//     return (
//         <div
//             className={`
//         h-screen ${expanded ? "w-72" : "w-20"} flex-shrink-0
//         bg-white text-gray-800
//         border-r border-gray-200
//         transition-[width] duration-500 ease-in-out
//         overflow-x-hidden
//       `}
//         >
//             <div
//                 className="
//         relative flex items-center justify-center
//         h-28 px-5
//         border-b border-gray-200/70
//         after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4
//         after:h-[1px] after:bg-gray-300/40
//       "
//             >
                
//                 <div className="relative flex items-center justify-center h-24 border-b border-gray-200">
//                     <div className="flex items-center justify-center h-24">
//                         <img
//                             src={Logo}
//                             alt="Logo"
//                             className={`
//                                 object-contain
//                                 transition-all duration-300 ease-in-out
//                                 ${expanded ? "h-28 w-28" : "h-10 w-10 opacity-0"}
//                                 `}
//                         />
//                     </div>
//                 </div>
//                 <button
//                     onClick={() => setExpanded((prev) => !prev)}
//                     className="absolute right-6 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-colors"
//                     aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
//                 >
//                     {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
//                 </button>

//             </div>
            

//             <div className="flex flex-col h-[calc(100%-7rem)] overflow-hidden">
//                 <nav className="flex-1 pt-6 px-3 space-y-1.5 overflow-y-auto overflow-x-hidden">
//                     {navItems.map(({ to, label, icon }) => (
//                         <NavLink
//                             key={to}
//                             to={to}
//                             className={({ isActive }) => `
//                 flex items-center gap-4
//                 py-3.5 px-4
//                 rounded-lg
//                 text-gray-700
//                 transition-colors duration-200
//                 hover:bg-gray-50 hover:text-sky-700
//                 ${isActive ? "bg-sky-50 text-sky-700 font-medium" : ""}
//                 whitespace-nowrap
//                 overflow-hidden text-ellipsis
//               `}
//                         >
//                             <span className="text-xl w-7 flex-shrink-0 text-center">
//                                 {icon}
//                             </span>
//                             <span
//                                 className={`
//                 transition-opacity duration-200 delay-100
//                 overflow-hidden text-ellipsis
//                 ${expanded ? "opacity-100" : "opacity-0"}
//               `}
//                             >
//                                 {label}
//                             </span>
//                         </NavLink>
//                     ))}
//                 </nav>

//                 <div className="px-3 pb-6 pt-4 border-t border-gray-100 mt-auto">
//                     <button
//                         className="
//               flex items-center gap-4
//               py-3.5 px-4 w-full
//               rounded-lg
//               text-gray-700 hover:bg-gray-50 hover:text-rose-700
//               transition-colors duration-200
//               whitespace-nowrap
//               overflow-hidden text-ellipsis
//             "
//                     >
//                         <span className="text-xl w-7 flex-shrink-0 text-center">
//                             <FaSignOutAlt />
//                         </span>
//                         <span
//                             className={`
//               transition-opacity duration-200 delay-100
//               overflow-hidden text-ellipsis
//               ${expanded ? "opacity-100" : "opacity-0"}
//             `}
//                         >
//                             Logout
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
