"use client";

import Image from "next/image";
import Link from "next/link";

const KhuvsgulItinerary = () => {
    const itinerary = [
        {
            day: "Өдөр 1",
            title: "Улаанбаатараас Мөрөн рүү",
            description: "Улаанбаатараас Мөрөн рүү машинаар явах.",
            image: "/day1.jpg",
            link: "/itinerary/day1",
        },
        {
            day: "Өдөр 2",
            title: "Мөрөнөөс Хөвсгөл Нуур руу",
            description: "Мөрөнөөс Хөвсгөл нуур руу машинаар хүрэх.",
            image: "/day2.jpg",
            link: "/itinerary/day2",
        },
        {
            day: "Өдөр 3",
            title: "Цаатан Ард Түмэнтэй Уулзах",
            description: "Хөвсгөл нуур – Цаатан ард түмэнтэй уулзах.",
            image: "/day3.jpg",
            link: "/itinerary/day3",
        },
        {
            day: "Өдөр 4",
            title: "Морьтой Аялал",
            description: "Хөвсгөл нуур – Морьтой аялал.",
            image: "/day4.jpg",
            link: "/itinerary/day4",
        },
        {
            day: "Өдөр 5",
            title: "Нуурын Өдөр",
            description: "Хөвсгөл нуур – Нуурын өдөр.",
            image: "/day5.jpg",
            link: "/itinerary/day5",
        },
        {
            day: "Өдөр 6",
            title: "Салах Ёс",
            description: "Хөвсгөл нууртай салах ёс хийх.",
            image: "/day6.jpg",
            link: "/itinerary/day6",
        },
        {
            day: "Өдөр 7",
            title: "Улаанбаатар Руу Буцах",
            description: "Улаанбаатар руу буцаж явах.",
            image: "/day7.jpg",
            link: "/itinerary/day7",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Хөвсгөл Нуур 7 Өдрийн Аяллын Маршрут
                </h2>

                {/* Itinerary Timeline */}
                <div className="relative">
                    <div className="border-l-4 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

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

