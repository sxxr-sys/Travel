"use client";
import React, { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { useTheme } from "@/components/context/ThemeProvider";
import { axiosInstance } from "@/libs/axios";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/user/getUser", {
        email: formData.email,
        password: formData.password,
      });

      setSuccessMessage(language === "en" ? "Login successful!" : "Нэвтрэлт амжилттай!");
      setError(null);
      setFormData({
        email: "",
        password: "",
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch {
      setError(language === "en" ? "Failed to log in. Please try again." : "Нэвтрэхэд алдаа гарлаа. Дахин оролдоно уу.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"} py-20 px-6`}>
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === "en" ? "Log In" : "Нэвтрэх"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

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

          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className={`py-3 px-8 text-lg font-semibold rounded-full transition duration-300 ${isDarkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
            >
              {language === "en" ? "Log In" : "Нэвтрэх"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
