"use client";

import { useLanguage } from "../context/LanguageContext";  // Ensure correct import path for your LanguageContext
import { useTheme } from "../context/ThemeProvider";  // Ensure correct import path for your ThemeProvider

const MapComponent = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    return (
        <section className={`py-16 px-6 mt-16 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {language === "en" ? "Route from Ulaanbaatar to Khuvsgul Lake" : "Улаанбаатараас Хөвсгөл Нуур Руу Явах Маршрут"}
                </h2>
                <p className="text-center mb-8">
                    {language === "en"
                        ? "Use the map below to view the route from Ulaanbaatar to Khuvsgul Lake."
                        : "Доорх газрын зургийг ашиглан Улаанбаатараас Хөвсгөл нуур руу явах замын маршрутыг харах боломжтой."}
                </p>
                <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2728521.0977193453!2d100.92085293984327!3d48.4814702572968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x5d969430fe2ec81b%3A0x7d6e0b937e550c61!2z0JDQu9C10LHQsCDQkNC10L3QuNC90LDRgNC40Y8!3m2!1d47.9214474!2d106.9057434!4m5!1s0x5d6ac1af319653f3%3A0x894fdb7c75af2069!2z0JDQkNC10L3QuNC90LDRgCDQkNC60L7QstCw0YbQtdC90LjQvdGB0LrQsNC90LDRgNC40Y8!3m2!1d49.6303801!2d100.1556059!5e0!3m2!1sen!2smn!4v1698613183734!5m2!1sen!2smn"
                        width="100%"
                        height="400"

                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapComponent;
