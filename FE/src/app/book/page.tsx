"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import { useTheme } from "@/components/context/ThemeProvider";
import { useState } from "react";

const BookPage = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        tripDate: "",
        groupSize: "",
        additionalInfo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(language === "en" ? "Your booking has been successfully submitted!" : "Таны захиалга амжилттай илгээгдлээ!");
        console.log("Booking Details:", formData);
        setFormData({
            name: "",
            email: "",
            phone: "",
            tripDate: "",
            groupSize: "",
            additionalInfo: "",
        });
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"} py-20 px-6`}>
            <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                <h1 className="text-3xl font-bold text-center mb-8">
                    {language === "en" ? "Book Your Trip" : "Аялалаа Захиалаарай"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="name">
                            {language === "en" ? "Full Name" : "Нэр"}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                                }`}
                            placeholder={language === "en" ? "Your Full Name" : "Таны Нэр"}
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="email">
                            {language === "en" ? "Email Address" : "Имэйл Хаяг"}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                                }`}
                            placeholder={language === "en" ? "Your Email Address" : "Таны Имэйл Хаяг"}
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="phone">
                            {language === "en" ? "Phone Number" : "Утасны Дугаар"}
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                                }`}
                            placeholder={language === "en" ? "Your Phone Number" : "Таны Утасны Дугаар"}
                        />
                    </div>

                    {/* Trip Date */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="tripDate">
                            {language === "en" ? "Trip Start Date" : "Аялал Эхлэх Өдөр"}
                        </label>
                        <input
                            type="date"
                            id="tripDate"
                            name="tripDate"
                            value={formData.tripDate}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                                }`}
                        />
                    </div>

                    {/* Group Size */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="groupSize">
                            {language === "en" ? "Group Size" : "Бүлгийн Хэмжээ"}
                        </label>
                        <input
                            type="number"
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                                }`}
                            placeholder={language === "en" ? "How many people?" : "Хэдэн Хүнтэй? "}
                        />
                    </div>

                    {/* Additional Information */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="additionalInfo">
                            {language === "en" ? "Additional Information" : "Нэмэлт Мэдээлэл"}
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                                }`}
                            placeholder={language === "en" ? "Any additional info for your trip?" : "Аялалаар нэмэлт мэдээлэл"}
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className={`py-3 px-8 text-lg font-semibold rounded-full transition duration-300 ${isDarkMode
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                                }`}
                        >
                            {language === "en" ? "Book Now" : "Захиалах"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookPage;
