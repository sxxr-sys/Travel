"use client";
import React, { useState } from "react";
import axios from 'axios';
import { useLanguage } from "@/components/context/LanguageContext";
import { useTheme } from "@/components/context/ThemeProvider";

const Signup: React.FC = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User", // Default role
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/signup", formData); // No need to store the response if it's not used
      setSuccessMessage(language === "en" ? "User created successfully!" : "Хэрэглэгч амжилттай үүсгэсэн!");
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "User",
      });
      setError(null);
    } catch {
      setError(language === "en" ? "Failed to create user. Please try again." : "Хэрэглэгч үүсгэхэд алдаа гарлаа. Дахин оролдоно уу.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"} py-20 px-6`}>
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === "en" ? "Sign Up" : "Бүртгүүлэх"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error and Success Messages */}
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

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

          {/* Password Field */}
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="password">
              {language === "en" ? "Password" : "Нууц Үг"}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                }`}
              placeholder={language === "en" ? "Your Password" : "Таны Нууц Үг"}
            />
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="role">
              {language === "en" ? "Role" : "Тамга"}
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode
                ? "bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500"
                : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                }`}
            >
              <option value="User">{language === "en" ? "User" : "Хэрэглэгч"}</option>
              <option value="Admin">{language === "en" ? "Admin" : "Админ"}</option>
            </select>
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
              {language === "en" ? "Sign Up" : "Бүртгүүлэх"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
