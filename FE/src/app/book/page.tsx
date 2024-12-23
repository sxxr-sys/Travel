"use client";
import { useState } from "react";

const BookPage = () => {
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
        alert("Таны захиалга амжилттай илгээгдлээ!");
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
        <div className="min-h-screen bg-gray-100 text-gray-800 py-20 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-8">Аялал Захиалах</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="name">
                            Нэр
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Таны нэр"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="email">
                            Имэйл
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Таны имэйл"
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="phone">
                            Утасны дугаар
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Таны утасны дугаар"
                        />
                    </div>

                    {/* Trip Date */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="tripDate">
                            Аялал эхлэх өдөр
                        </label>
                        <input
                            type="date"
                            id="tripDate"
                            name="tripDate"
                            value={formData.tripDate}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Group Size */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="groupSize">
                            Бүлгийн хэмжээ
                        </label>
                        <input
                            type="number"
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Хэдэн хүнтэй явах вэ?"
                        />
                    </div>

                    {/* Additional Information */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="additionalInfo">
                            Нэмэлт мэдээлэл
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Аялалд зориулсан нэмэлт мэдээлэл"
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300"
                        >
                            Захиалах
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookPage;
