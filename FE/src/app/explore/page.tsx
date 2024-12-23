"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react"; // Importing icons for dark/light mode

const ExplorePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Persist dark mode preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>

            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
                {isDarkMode ? <Sun /> : <Moon />} {/* Display Sun or Moon icon */}
            </button>

            {/* Explore Section */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Монголыг Судал</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Destination Card 1 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <img src="/khuvsgul-lake.jpg" alt="Khuvsgul Lake" className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Хөвсгөл Нуур</h3>
                        <p className="text-gray-600 mb-4">Хөвсгөл нуурыг үзэсгэлэнт уулсаар хүрээлэгдсэн, тунгалаг усан дунд амрахыг хүссэн аялагчдад тохирсон газар юм.</p>
                        <Link href="/khuvsgul-lake">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                                Судлах
                            </button>
                        </Link>
                    </div>

                    {/* Destination Card 2 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <img src="/Gobi.jpg" alt="Gobi Desert" className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Говь</h3>
                        <p className="text-gray-600 mb-4">Говь гайхамшигтай элсэн гүвээ, эртний түүхийг судалж, түүгээр аялах боломжтой.</p>
                        <Link href="/gobi-desert">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                                Судлах
                            </button>
                        </Link>
                    </div>

                    {/* Destination Card 3 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <img src="Terelj.jpg" alt="Terelj National Park" className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Тэрэлж Үндэсний Парк</h3>
                        <p className="text-gray-600 mb-4">Тэрэлж нь үзэсгэлэнт байгаль, гадаа үйл ажиллагаа хийх боломжуудыг санал болгодог үндэсний цэцэрлэгт хүрээлэн юм.</p>
                        <Link href="/terelj-national-park">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                                Судлах
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6">Өнөөдөр Таны Адал Явдал Эхлэхийг Хүсэж байна уу?</h2>
                <Link href="/book">
                    <button className="bg-white text-blue-500 py-3 px-8 text-lg font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        Аялалаа Захиалаарай
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default ExplorePage;
