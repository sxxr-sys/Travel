"use client";

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"; // You can use these or any other icons you'd prefer
import { useLanguage } from "../context/LanguageContext"; // Assuming you have a LanguageContext
import { useTheme } from "../context/ThemeProvider"; // Assuming you have a ThemeContext for dark mode

const KhuvsgulTourPackages = () => {
    const { language } = useLanguage(); // Get the current language from context
    const { isDarkMode } = useTheme(); // Get the dark mode state from context

    const packages = [
        {
            title: language === "en" ? "5-Day Khuvsgul Lake Adventure" : "5 Өдрийн Хөвсгөл Нуурын Адал Явдал",
            description: language === "en"
                ? "Travel through the beautiful landscapes of Khuvsgul Lake, experience the culture of the Tsaatan people during the trip."
                : "Хөвсгөл нуурын үзэсгэлэнт байгалиар аялах, аялалд явж байхдаа Цаатан ард түмний соёлтой танилцах.",
            image: "/day5.jpg",
            price: "799$",
            days: 5,
            location: language === "en" ? "Khuvsgul Lake, Mongolia" : "Хөвсгөл Нуур, Монгол",
        },
        {
            title: language === "en" ? "7-Day Tsaatan People Cultural Experience" : "7 Өдрийн Цаатан Ард Түмний Түүхтэй Танилцах",
            description: language === "en"
                ? "Get to know the culture and lifestyle of the Tsaatan people, exploring beautiful nature for 7 days."
                : "Цаатан ард түмний соёл, амьдралын хэв маягтай танилцах, үзэсгэлэнт байгальтай хамт 7 өдрийн турш аялна.",
            image: "/day3.jpg",
            price: "999$",
            days: 7,
            location: language === "en" ? "Khuvsgul Lake, Mongolia" : "Хөвсгөл Нуур, Монгол",
        },
        {
            title: language === "en" ? "3-Day Khuvsgul Lake Boat Tour" : "3 Өдрийн Хөвсгөл Нуурын Завь Аялал",
            description: language === "en"
                ? "Join a 3-day boat tour around the shores of Khuvsgul Lake and immerse in the stunning nature."
                : "Хөвсгөл нуурын эргээр 3 өдрийн завь аялалд оролцож, үзэсгэлэнт байгалийг бүрэн мэдрэх.",
            image: "/Boat.jpg",
            price: "599$",
            days: 3,
            location: language === "en" ? "Khuvsgul Lake, Mongolia" : "Хөвсгөл Нуур, Монгол",
        },
    ];

    return (
        <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-700"}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {language === "en" ? "Khuvsgul Lake Tour Packages" : "Хөвсгөл Нуурын Аяллын Пакетууд"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ${isDarkMode ? "bg-gray-700" : ""}`}
                        >
                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                width={500}
                                height={300}
                                objectFit="cover"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{pkg.title}</h3>
                                <p className="text-gray-600 mb-4">{pkg.description}</p>

                                <div className="flex items-center text-gray-500 mb-4">
                                    <FaCalendarAlt className="mr-2" />
                                    <span>{pkg.days} {language === "en" ? "days" : "өдөр"}</span>
                                </div>

                                <div className="flex items-center text-gray-500 mb-4">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span>{pkg.location}</span>
                                </div>

                                <div className="flex items-center text-gray-500 mb-4">
                                    <FaDollarSign className="mr-2" />
                                    <span>{pkg.price}</span>
                                </div>

                                <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300">
                                    {language === "en" ? "Book Now" : "Захиалга Хийх"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KhuvsgulTourPackages;
