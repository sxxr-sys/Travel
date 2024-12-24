"use client";

import { FaRegHandshake, FaHotel, FaCarSide } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext"; // Ensure correct import path for your LanguageContext
import { useTheme } from "../context/ThemeProvider"; // Ensure correct import path for your ThemeProvider

const AboutUs = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    return (
        <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    {language === "en" ? "Khuvsgul Lake Travel Services" : "Хөвсгөл Нуур Аяллын Үйлчилгээ"}
                </h2>
                <p className={`text-lg mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {language === "en"
                        ? "We aim to make your trip unforgettable and successful. By choosing from our tour packages, you'll get the best services, accommodations, and transportation."
                        : "Бид таны аяллыг санагдуулам, амжилттай болгоход туслах зорилготой. Манай тур пакетуудаас сонгоод та хамгийн сайн үйлчилгээ, байрлал, тээвэрлэлтийг авах болно."}
                </p>

                {/* Services Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Amazing Tour Packages */}
                    <div
                        className={`p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                            }`}
                    >
                        <FaRegHandshake className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">
                            {language === "en" ? "Tour Packages" : "Аялалын Пакетууд"}
                        </h3>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {language === "en"
                                ? "We offer the best tour packages and can customize your itinerary and accommodations based on your preferences."
                                : "Бид танд хамгийн сайн аяллын багцуудыг санал болгох бөгөөд аяллын маршрут болон амрах газрыг танд зориулан тохируулан гаргана."}
                        </p>
                    </div>

                    {/* Book Top Class Hotel */}
                    <div
                        className={`p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                            }`}
                    >
                        <FaHotel className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">
                            {language === "en" ? "Top Class Hotels" : "Топ Төрлийн Зочид Буудал"}
                        </h3>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {language === "en"
                                ? "We offer only the highest-rated hotels to enhance your local stay and travel experience."
                                : "Бид зөвхөн хамгийн өндөр үнэлгээтэй зочид буудлуудыг санал болгож, таны орон нутгийн амралт болон аялагчдын туршлагыг сайжруулна."}
                        </p>
                    </div>

                    {/* Transport Booking */}
                    <div
                        className={`p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                            }`}
                    >
                        <FaCarSide className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">
                            {language === "en" ? "Transport Booking" : "Тээвэрлэлт Захиалга"}
                        </h3>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {language === "en"
                                ? "We arrange transportation of all types to make your journey more comfortable and hassle-free."
                                : "Бид бүх төрлийн тээврийн хэрэгслийг захиалж, таны аяллыг илүү амар, хялбар, ая тухтай болгоход туслана."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
