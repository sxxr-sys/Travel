"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeProvider";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    return (
        <footer className={`py-8 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Footer Top: Logo/Title & Navigation Links */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">
                            {language === "en" ? "Khuvsgul Lake Travel" : "Хөвсгөл Нуур Аялал"}
                        </h2>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-6 md:mb-0">
                        <Link href="/" className="text-gray-400 hover:text-white">
                            {language === "en" ? "Home" : "Нүүр"}
                        </Link>
                        <Link href="/about" className="text-gray-400 hover:text-white">
                            {language === "en" ? "About Us" : "Бидний Тухай"}
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white">
                            {language === "en" ? "Contact Us" : "Холбоо Барих"}
                        </Link>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                </div>

                {/* Footer Bottom: Additional Information */}
                <div className="text-center text-gray-400">
                    <p>
                        {language === "en"
                            ? "© 2024 Khuvsgul Lake Travel. All Rights Reserved."
                            : "© 2024 Хөвсгөл Нуур Аялал. Бүх эрх хуулиар хамгаалагдсан."}
                    </p>
                    <p className="mt-2">
                        {language === "en"
                            ? "Explore the beauty of Khuvsgul Lake with us. A journey full of nature and adventure."
                            : "Хөвсгөл Нуурын гоо сайхныг бидэнтэй хамт судлаарай. Байгалийн үзэсгэлэнт аялал."}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
