"use client";

import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import { useTheme } from "@/components/context/ThemeProvider";

const ExplorePage = () => {
    const { language } = useLanguage();
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-500" : "bg-white text-gray-800"}`}>


            {/* Explore Section */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">
                    {language === "en" ? "Explore Mongolia" : "Монгол Улсын Аялал Жуулчлал"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Destination Card 1 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <img src="/khuvsgul-lake.jpg" alt="Khuvsgul Lake" className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Хөвсгөл Нуур</h3>
                        <p className="text-gray-600 mb-4">
                            {language === "en"
                                ? "Khuvsgul Lake is surrounded by beautiful mountains and is the perfect place for those looking for relaxation in clear waters."
                                : "Хөвсгөл нуурыг үзэсгэлэнт уулсаар хүрээлэгдсэн, тунгалаг усан дунд амрахыг хүссэн аялагчдад тохирсон газар юм."}
                        </p>
                        <Link href="/khuvsgul-lake">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                                {language === "en" ? "Explore" : "Судлах"}
                            </button>
                        </Link>
                    </div>

                    {/* Destination Card 2 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <img src="/Gobi.jpg" alt="Gobi Desert" className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Говь</h3>
                        <p className="text-gray-600 mb-4">
                            {language === "en"
                                ? "The Gobi Desert is known for its breathtaking sand dunes and ancient history, offering a unique experience for travelers."
                                : "Говь гайхамшигтай элсэн гүвээ, эртний түүхийг судалж, түүгээр аялах боломжтой."}
                        </p>
                        <Link href="/gobi-desert">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                                {language === "en" ? "Explore" : "Судлах"}
                            </button>
                        </Link>
                    </div>

                    {/* Destination Card 3 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <img src="Terelj.jpg" alt="Terelj National Park" className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Тэрэлж Үндэсний Парк</h3>
                        <p className="text-gray-600 mb-4">
                            {language === "en"
                                ? "Terelj National Park is a beautiful destination for outdoor activities with its stunning landscapes."
                                : "Тэрэлж нь үзэсгэлэнт байгаль, гадаа үйл ажиллагаа хийх боломжуудыг санал болгодог үндэсний цэцэрлэгт хүрээлэн юм."}
                        </p>
                        <Link href="/terelj-national-park">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                                {language === "en" ? "Explore" : "Судлах"}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    {language === "en" ? "Ready to start your adventure today?" : "Өнөөдөр Таны Адал Явдал Эхлэхийг Хүсэж байна уу?"}
                </h2>
                <Link href="/book">
                    <button className="bg-white text-blue-500 py-3 px-8 text-lg font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        {language === "en" ? "Book Your Trip" : "Аялалаа Захиалаарай"}
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default ExplorePage;
