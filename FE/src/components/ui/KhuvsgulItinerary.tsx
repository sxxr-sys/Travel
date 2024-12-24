"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeProvider";
import { useLanguage } from "../context/LanguageContext";  // Assuming you have a LanguageContext

const KhuvsgulItinerary = () => {
    const { isDarkMode } = useTheme();  // For theme toggling
    const { language } = useLanguage();  // For language selection

    // Define the itinerary with translations
    const itinerary = [
        {
            day: language === "en" ? "Day 1" : "Өдөр 1",
            title: language === "en" ? "From Ulaanbaatar to Mörön" : "Улаанбаатараас Мөрөн рүү",
            description: language === "en" ? "Travel by car from Ulaanbaatar to Mörön." : "Улаанбаатараас Мөрөн рүү машинаар явах.",
            image: "/day1.jpg",
            link: "/itinerary/day1",
        },
        {
            day: language === "en" ? "Day 2" : "Өдөр 2",
            title: language === "en" ? "From Mörön to Khuvsgul Lake" : "Мөрөнөөс Хөвсгөл Нуур руу",
            description: language === "en" ? "Drive from Mörön to Khuvsgul Lake." : "Мөрөнөөс Хөвсгөл нуур руу машинаар хүрэх.",
            image: "/day2.jpg",
            link: "/itinerary/day2",
        },
        {
            day: language === "en" ? "Day 3" : "Өдөр 3",
            title: language === "en" ? "Meet the Tsaatan People" : "Цаатан Ард Түмэнтэй Уулзах",
            description: language === "en" ? "Meet the Tsaatan people at Khuvsgul Lake." : "Хөвсгөл нуур – Цаатан ард түмэнтэй уулзах.",
            image: "/day3.jpg",
            link: "/itinerary/day3",
        },
        {
            day: language === "en" ? "Day 4" : "Өдөр 4",
            title: language === "en" ? "Horseback Riding Adventure" : "Морьтой Аялал",
            description: language === "en" ? "Enjoy a horseback riding adventure at Khuvsgul Lake." : "Хөвсгөл нуур – Морьтой аялал.",
            image: "/day4.jpg",
            link: "/itinerary/day4",
        },
        {
            day: language === "en" ? "Day 5" : "Өдөр 5",
            title: language === "en" ? "A Day at the Lake" : "Нуурын Өдөр",
            description: language === "en" ? "Spend the day by the beautiful Khuvsgul Lake." : "Хөвсгөл нуур – Нуурын өдөр.",
            image: "/day5.jpg",
            link: "/itinerary/day5",
        },
        {
            day: language === "en" ? "Day 6" : "Өдөр 6",
            title: language === "en" ? "Farewell to Khuvsgul Lake" : "Салах Ёс",
            description: language === "en" ? "Say goodbye to Khuvsgul Lake." : "Хөвсгөл нууртай салах ёс хийх.",
            image: "/day6.jpg",
            link: "/itinerary/day6",
        },
        {
            day: language === "en" ? "Day 7" : "Өдөр 7",
            title: language === "en" ? "Return to Ulaanbaatar" : "Улаанбаатар Руу Буцах",
            description: language === "en" ? "Drive back to Ulaanbaatar." : "Улаанбаатар руу буцаж явах.",
            image: "/day7.jpg",
            link: "/itinerary/day7",
        },
    ];

    return (
        <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-800"}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {language === "en" ? "Khuvsgul Lake 7-Day Itinerary" : "Хөвсгөл Нуур 7 Өдрийн Аяллын Маршрут"}
                </h2>

                {/* Itinerary Timeline */}
                <div className="relative">
                    <div className="border-l-4 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2 hidden lg:block"></div>

                    {itinerary.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center mb-16 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"
                                }`}
                        >
                            <div className="flex flex-col items-center lg:w-1/2 text-center lg:text-right lg:pr-6 mb-6 lg:mb-0">
                                <h3 className="text-2xl font-semibold mb-2">{item.day}</h3>
                                <h4 className="text-xl font-medium mb-4">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                            <div className="lg:w-1/2 lg:pl-6">
                                <Link href={item.link}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        width={500}
                                        height={300}
                                        objectFit="cover"
                                        layout="intrinsic"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KhuvsgulItinerary;
