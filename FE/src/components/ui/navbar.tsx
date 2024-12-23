"use client";
import { useState, useEffect } from "react";
import { Mail, PhoneCallIcon, Moon, Sun } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode and persist preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme === "dark";
        setIsDarkMode(initialTheme);
        // Persist theme change
        localStorage.setItem("theme", initialTheme ? "dark" : "light");
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <nav
            className={`shadow-md p-6 ${isDarkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-white text-gray-700"
                }`}
        >
            <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
                {/* Logo */}
                <div
                    className={`text-2xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-500"
                        }`}
                >
                    <Link href="/">TRAVEL KHUVSGUL</Link>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6 md:gap-10 items-center">
                    <div className="flex gap-3 items-center">
                        <Mail
                            className={`${isDarkMode ? "text-blue-300" : "text-blue-400"
                                }`}
                        />
                        <a
                            href="mailto:TravelKhuvsgul@gmail.com"
                            className={`font-semibold ${isDarkMode
                                ? "hover:text-blue-400"
                                : "hover:text-blue-500"
                                }`}
                            aria-label="Email Travel Mongolia"
                        >
                            TravelKhuvsgul@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <PhoneCallIcon
                            className={`${isDarkMode ? "text-blue-300" : "text-blue-400"
                                }`}
                        />
                        <a
                            href="tel:+97699038823"
                            className={`font-semibold ${isDarkMode
                                ? "hover:text-blue-400"
                                : "hover:text-blue-500"
                                }`}
                            aria-label="Call Travel Mongolia"
                        >
                            +976-99038823
                        </a>
                    </div>
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? (
                        <Sun className="text-yellow-400" />
                    ) : (
                        <Moon className="text-blue-400" />
                    )}
                </button>
            </div>
        </nav>
    );
};
