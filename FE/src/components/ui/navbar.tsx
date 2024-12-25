"use client";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeProvider";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export const Navbar = () => {
    const { language, setLanguage } = useLanguage();
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <nav className={`shadow-md p-6 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
                {/* Logo */}
                <div className={`text-2xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}>
                    <Link href="/">
                        {language === "en" ? "TRAVEL KHUVSGUL" : "ХӨВСГӨЛ НУУР АЯЛАЛ"}
                    </Link>
                </div>

                {/* Language & Dark Mode Toggle */}
                <div className="flex items-center space-x-6">
                    {/* Language Switcher */}
                    <button
                        onClick={() => setLanguage(language === "en" ? "mn" : "en")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        {language === "en" ? "Монгол хэл рүү шилжих" : "Switch to English"}
                    </button>

                    {/* Dark Mode Toggle */}
                    <button onClick={toggleDarkMode} className="p-2 rounded-full">
                        {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-400" />}
                    </button>

                    {/* Sign Up Button */}
                    <Link href="/sign-up">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                            {language === "en" ? "Sign Up" : "Бүртгүүлэх"}
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
