"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import { useTheme } from "@/components/context/ThemeProvider";

 // Ensure correct import path for your ThemeProvider

const About = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen py-16 px-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center mb-8">
                    {language === "en" ? "About Us" : "Бидний Тухай"}
                </h1>

                {/* Section: About Introduction */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "en" ? "Khuvsgul Lake Travel" : "Хөвсгөл Нуур Аялал"}
                    </h2>
                    <p className="text-lg">
                        {language === "en"
                            ? "Khuvsgul Lake Travel is an online platform that provides all the information about traveling to Khuvsgul Lake, the most beautiful lake in Mongolia. Our website aims to provide the best routes, itineraries, tips, and other necessary information for travelers."
                            : "Хөвсгөл Нуур Аялал нь Монголын хамгийн үзэсгэлэнт нуур болох Хөвсгөл нуурыг зорих аялалын талаархи бүх мэдээллийг нэгтгэн хүргэдэг онлайн платформ юм. Манай вэбсайт нь аялагчдад хамгийн тохиромжтой маршрутууд, аялалын төлөвлөгөө, зөвлөмжүүд, болон бусад хэрэгтэй мэдээллийг олгох зорилготой."}
                    </p>
                </section>

                {/* Section: Mission */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "en" ? "Our Mission" : "Манай Зорилго"}
                    </h2>
                    <p className="text-lg">
                        {language === "en"
                            ? "We aim to enhance the travel experience in the Khuvsgul Lake region, providing travelers with the most convenient and up-to-date information in the easiest and fastest way. Our mission is to offer the most interesting, safe, and best experiences for travelers."
                            : "Бид Хөвсгөл нуурын бүс нутагт аялах туршлагаа сайжруулах, аялагчдад хэрэгтэй мэдээллийг хамгийн хялбар бөгөөд шуурхай байдлаар хүргэхийг зорьж байна. Манай зорилго нь аялалын сонирхолтой, аюулгүй, хамгийн сайн туршлагуудыг санал болгох явдал юм."}
                    </p>
                </section>

                {/* Section: Why Choose Us */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "en" ? "Why Choose Us?" : "Яагаад Биднийг Сонгох Вэ?"}
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                        <li>{language === "en" ? "We provide the most up-to-date travel information about Khuvsgul Lake." : "Хөвсгөл нуурын хамгийн сүүлийн үеийн аялалын мэдээллийг хүргэдэг."}</li>
                        <li>{language === "en" ? "Routes enhanced with user recommendations and feedback." : "Хэрэглэгчийн зөвлөмж болон санал хүсэлтээр сайжруулсан маршрут."}</li>
                        <li>{language === "en" ? "Comprehensive guide and information for travelers in one place." : "Аялагчдад тохиромжтой гарын авлага, мэдээллийг нэг дор багтаасан."}</li>
                        <li>{language === "en" ? "Easily accessible online and via mobile." : "Онлайн хуудас болон гар утаснаасаа хялбархан ашиглах боломжтой."}</li>
                    </ul>
                </section>

                {/* Section: Contact Info */}
                <section className="mb-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "en" ? "Contact Us" : "Холбоо Барих"}
                    </h2>
                    <p className="text-lg mb-4">
                        {language === "en" ? "If you wish to contact us, please use the following information:" : "Бидэнтэй холбогдохыг хүсвэл дараах мэдээллийг ашиглана уу:"}
                    </p>
                    <p className="text-lg">{language === "en" ? "Email: support@khuvsgullake.mn" : "Имэйл: support@khuvsgullake.mn"}</p>
                    <p className="text-lg">{language === "en" ? "Phone: +976 9000 0000" : "Утас: +976 9000 0000"}</p>
                </section>

                {/* Section: Call to Action */}
                <div className="text-center mt-12">
                    <a href="/contact">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            {language === "en" ? "Contact Us" : "Бидэнтэй Холбогдох"}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
