"use client";

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"; // You can use these or any other icons you'd prefer

const KhuvsgulTourPackages = () => {
    const packages = [
        {
            title: "5 Өдрийн Хөвсгөл Нуурын Адал Явдал",
            description: "Хөвсгөл нуурын үзэсгэлэнт байгалиар аялах, аялалд явж байхдаа Цаатан ард түмний соёлтой танилцах.",
            image: "/day5.jpg",
            price: "799$",
            days: 5,
            location: "Хөвсгөл Нуур, Монгол",
        },
        {
            title: "7 Өдрийн Цаатан Ард Түмний Түүхтэй Танилцах",
            description: "Цаатан ард түмний соёл, амьдралын хэв маягтай танилцах, үзэсгэлэнт байгальтай хамт 7 өдрийн турш аялна.",
            image: "/day3.jpg",
            price: "999$",
            days: 7,
            location: "Хөвсгөл Нуур, Монгол",
        },
        {
            title: "3 Өдрийн Хөвсгөл Нуурын Завь Аялал",
            description: "Хөвсгөл нуурын эргээр 3 өдрийн завь аялалд оролцож, үзэсгэлэнт байгалийг бүрэн мэдрэх.",
            image: "/Boat.jpg",
            price: "599$",
            days: 3,
            location: "Хөвсгөл Нуур, Монгол",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Хөвсгөл Нуурын Аяллын Пакетууд
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
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
                                    <span>{pkg.days} өдөр</span>
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
                                    Захиалга Хийх
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
