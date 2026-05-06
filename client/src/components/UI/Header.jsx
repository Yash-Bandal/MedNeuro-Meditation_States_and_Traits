import React, {
    useState,
    useRef,
    useEffect,
} from "react";

import {
    Menu,
    LogOut,
} from "lucide-react";

const Header = ({ setMobileOpen }) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(new Date()),
            1000
        );

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const formattedDate = time.toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <header className="w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-200 flex justify-between items-center">

            {/* LEFT */}
            <div className="flex items-center gap-3">

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                >
                    <Menu size={20} />
                </button>

                <div>
                    <h1 className="text-lg font-semibold text-gray-900">
                        MedNeuro - EEG
                    </h1>

                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">

                        <span>{formattedDate}</span>

                        <span>•</span>

                        <span className="font-medium text-gray-700">
                            {formattedTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="relative" ref={dropdownRef}>

                <button
                    onClick={() => setOpen(!open)}
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-semibold"
                >
                    Y
                </button>

                {open && (
                    <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden">

                        <div className="flex items-center gap-3 px-4 py-4">

                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                                YB
                            </div>

                            <div className="leading-tight">

                                <p className="text-sm font-semibold text-gray-800">
                                    Yash Bandal
                                </p>

                                <p className="text-xs text-gray-500">
                                    EEG Research Dashboard
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100" />

                        <button className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition">

                            <LogOut size={16} />

                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

//===========================

// import React, { useState, useRef, useEffect } from "react";
// import { Sun, Moon, LogOut } from "lucide-react";
// // import { useTheme } from "../hooks/useTheme";

// const Header = () => {
//     // const { theme, toggleTheme } = useTheme();
//     const [open, setOpen] = useState(false);
//     const dropdownRef = useRef(null);


//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const interval = setInterval(() => setTime(new Date()), 1000);
//         return () => clearInterval(interval);
//     }, []);

//     const formattedTime = time.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//     });

//     const formattedDate = time.toLocaleDateString(undefined, {
//         weekday: "short",
//         day: "numeric",
//         month: "short",
//     });

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <header className="w-full px-6 py-4 bg-white dark:bg-[#252628] border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">

//             <div>
//                 <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     MedNeuro - EEG 
//                 </h1>

//                 {/* TIME BELOW TITLE */}
//                 <div className="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
//                     <span>{formattedDate}</span>
//                     <span>•</span>
//                     <span className="font-medium text-gray-700 dark:text-gray-200">
//                         {formattedTime}
//                     </span>
//                 </div>
//             </div>

//             <div className="flex items-center gap-3">

//                 {/* Theme Toggle */}
//                 {/* <button
//                     onClick={toggleTheme}
//                     className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
//                 >
//                     {theme === "dark" ? (
//                         <Sun size={20} className="text-yellow-400" />
//                     ) : (
//                         <Moon size={20} className="text-gray-800" />
//                     )}
//                 </button> */}

//                 {/* Profile */}
//                 <div className="relative" ref={dropdownRef}>
//                     <button
//                         onClick={() => setOpen(!open)}
//                         className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center font-semibold"
//                     >
//                         Y
//                     </button>

//                     {open && (
//                         <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white dark:bg-[#2c2d30] border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">

//                             <div className="flex items-center gap-3 px-4 py-4">
//                                 <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center font-semibold text-gray-700 dark:text-white">
//                                     YB
//                                 </div>

//                                 <div className="leading-tight">
//                                     <p className="text-sm font-semibold text-gray-800 dark:text-white">
//                                         Dr. Yash Bandal
//                                     </p>
//                                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                                         yashbandal25@gmail.com
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="border-t border-gray-100 dark:border-gray-700" />

//                             <button className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
//                                 <LogOut size={16} />
//                                 Sign out
//                             </button>

//                         </div>
//                     )}
//                 </div>

//             </div>
//         </header>
//     );
// };

// export default Header;







//===========================================================




// // import React from 'react';
// // import { Sun, Moon } from 'lucide-react';
// // import { useTheme } from '../hooks/useTheme';

// // const Header = () => {
// //     const { theme, toggleTheme } = useTheme();

// //     return (
// //         // <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
// //         <header className="w-full px-6 py-4 bg-white dark:bg-[#2d2f3087] border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
// //             <h1 className="text-xl font-semibold text-gray-800 dark:text-white uppercase font-roboto tracking-wider ">EEG Dashboard</h1>
// //             {/* <button
// //                 onClick={toggleTheme}
// //                 className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
// //             >
// //                 {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
// //             </button> */}
// //         </header>
// //     );
// // };

// // export default Header;
