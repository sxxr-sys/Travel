"use client";

import Image from "next/image"; // Import the Image component
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeProvider";

const AboutTravelMongolia = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    return (
        <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-6">
                    {language === "en" ? "Travel in Mongolia" : "Монголд Аялал"}
                </h2>

                {/* Description */}
                <p className="text-lg mb-8 leading-relaxed">
                    {language === "en"
                        ? "Mongolia is famous worldwide for its vast steppes, crystal-clear lakes, stunning landscapes, and rich cultural heritage. From the ancient nomadic lifestyle, to the spectacular deserts and to the clear waters of Khuvsgul Lake, a trip to Mongolia offers the perfect environment for unforgettable experiences."
                        : "Монгол улс нь өргөн уудам тал, тунгалаг нуур, үзэсгэлэнт байгаль, олон зууны түүхтэй өв соёлоороо дэлхийд алдартай. Энэ нь эртний нүүдэлчдийн амьдрал, гайхамшигтай хээр тал, Говийн элсэн цөлөөс Хөвсгөл нуурын тунгалаг усанд хүрэх хүртэлх аяллын төгс орчин юм."}
                </p>

                {/* Grid of Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1: Nomadic Life */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <Image
                            src="/nomadic-life.jpg"
                            alt="Nomadic Life"
                            width={500} // Provide width and height for optimization
                            height={300}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{language === "en" ? "Nomadic Life" : "Нүүдэлчин Амьдрал"}</h3>
                        <p>
                            {language === "en"
                                ? "Experience Mongolia’s traditional nomadic life and immerse yourself in its unique culture and customs."
                                : "Монголын уламжлалт нүүдэлчин амьдралыг туршиж, өвөрмөц соёл, зан заншлыг мэдрээрэй."}
                        </p>
                    </div>

                    {/* Feature 2: Diverse Landscapes */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <Image
                            src="/landscape.jpg"
                            alt="Diverse Landscapes"
                            width={500} // Provide width and height for optimization
                            height={300}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{language === "en" ? "Diverse Landscapes" : "Өвөрмөц Байгалийн Дүр зураг"}</h3>
                        <p>
                            {language === "en"
                                ? "Explore Mongolia's breathtaking landscapes, including mountains, rivers, and vast sand dunes."
                                : "Уул, гол мөрөн, элсэн манхан зэрэг гайхамшигтай байгалийн дүр зурагтай танилцаарай."}
                        </p>
                    </div>

                    {/* Feature 3: Rich History */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <Image
                            src="/history.jpg"
                            alt="Rich History"
                            width={500} // Provide width and height for optimization
                            height={300}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{language === "en" ? "Rich History" : "Эртний Түүх"}</h3>
                        <p>
                            {language === "en"
                                ? "Learn about Mongolia's ancient history and culture, and discover more about the Mongol Empire and Genghis Khan."
                                : "Монголын эртний түүх, соёлын өвийг судалж, Чингис хааны эзэнт гүрний тухай илүү ихийг мэдэж аваарай."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTravelMongolia;
