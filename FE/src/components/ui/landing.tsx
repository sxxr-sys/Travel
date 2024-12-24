"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext"; // Assuming you have a LanguageContext
import { useTheme } from "../context/ThemeProvider"; // Assuming you have a ThemeContext for dark mode

const KhuvsgulLakePage = () => {
    const { language } = useLanguage(); // Get the current language from context
    const { isDarkMode } = useTheme(); // Get the dark mode state from context

    const bgColor = isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800";
    const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";

    return (
        <div className={`min-h-screen ${bgColor}`}>
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/Lake.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                    <h1 className="text-5xl font-bold mb-6 text-blue-400">
                        {language === "en" ? "Khuvsgul Lake" : "Хөвсгөл Нуур"}
                    </h1>
                    <p className="text-lg text-blue-200">
                        {language === "en"
                            ? "Welcome to Mongolia's largest freshwater lake, a place to experience the natural wonders."
                            : "Монголын хамгийн том цэнгэг усны нуур, байгалийн гайхамшгийг мэдрэх газарт тавтай морилно уу."}
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-6 md:px-16 lg:px-32">
                <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    {language === "en" ? "About Khuvsgul Lake" : "Хөвсгөл Нуурын тухай"}
                </h2>
                <p className={`text-lg leading-relaxed mb-8 ${textColor}`}>
                    {language === "en"
                        ? "Khuvsgul Lake is a large freshwater lake located in the northern part of Mongolia, near the Siberian border. It is the second-largest freshwater lake by volume in the world, covering an area of 2760 km²."
                        : "Хөвсгөл нуур нь Монгол Улсын хойд хэсэгт, Сибирийн хилийн ойролцоо орших цэнгэг устай томоохон нуур юм. Энэ нуур нь дэлхийд цэвэр усаараа хоёрдугаарт бичигдэх бөгөөд 2760 км² талбай эзэлдэг."}
                </p>
                <p className={`text-lg leading-relaxed ${textColor}`}>
                    {language === "en"
                        ? "The lake is a popular tourist destination, offering opportunities for boating, hiking, and fishing during the summer, while in winter, visitors can enjoy ice festivals and skiing."
                        : "Хөвсгөл нуур нь аялал жуулчлалын гол бүс нутгийн нэг бөгөөд зун нь усан завь, явган аялал, загасчлалын аялал хийхэд тохиромжтой бол өвөл нь мөсөн баяр, цанаар гулгах зэрэг өвлийн спортоор хичээллэх боломжтой."}
                </p>
            </section>

            {/* Stops Section */}
            <section className={`py-16 px-6 md:px-16 lg:px-32 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                    {language === "en" ? "Tour Stops" : "Аялалын Зогсоолууд"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: language === "en" ? "Khatgal Village" : "Хатгал Суурин",
                            description: language === "en"
                                ? "Located at the northern part of Khuvsgul Lake, Khatgal is a starting point for many travelers, known for its local market and handmade goods."
                                : "Хөвсгөл нуурын урд хэсэгт байрлах энэ суурин нь аяллын эхлэх цэг бөгөөд нутгийн зах, гар урлалын бүтээгдэхүүн худалдаалдаг дэлгүүрүүдээрээ алдартай.",
                        },
                        {
                            title: language === "en" ? "Jankhain Bay" : "Жанхайн Булан",
                            description: language === "en"
                                ? "One of the most beautiful bays on the lake, offering opportunities for relaxation, sightseeing, and boat tours. The nearby white peaks also provide a fantastic photo opportunity."
                                : "Нуурын хамгийн үзэсгэлэнт булан бөгөөд энд амрах, зугаалах, усан завиар аялах боломжтой. Мөн ойролцоох цагаан оройт уулс гайхалтай зураг авах байршил санал болгодог.",
                        },
                        {
                            title: language === "en" ? "Tsaatan People Territory" : "Цаатан Иргэдийн Нутаг",
                            description: language === "en"
                                ? "The Tsaatan people, who live in the surrounding mountains, are known for their reindeer herding lifestyle. Visitors can learn about their unique way of life and culture."
                                : "Хөвсгөл нуурын ойролцоох ууланд цаатан буюу бугын аргаар амьдардаг уламжлалт иргэд амьдардаг. Тэдний өвөрмөц амьдралтай танилцах, соёлын солилцоо хийх боломжтой.",
                        },
                    ].map((stop, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{stop.title}</h3>
                            <p className="text-gray-600">{stop.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6">{language === "en" ? "Book Your Tour Today" : "Аялалаа Өнөөдөр Захиалаарай"}</h2>
                <p className="text-lg mb-8">
                    {language === "en"
                        ? "Experience the wonders of Khuvsgul Lake and explore the cultural and natural landmarks. Get in touch with us to book your tour."
                        : "Хөвсгөл нуурын гайхамшигийг биеэр үзэж, түүх, байгалийн дурсгалт газруудаар аялахыг хүсвэл бидэнтэй холбогдоорой."}
                </p>
                <Link href="/book">
                    <button className="bg-white text-blue-500 py-3 px-8 text-lg font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        {language === "en" ? "Book Now" : "Захиалах"}
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default KhuvsgulLakePage;
