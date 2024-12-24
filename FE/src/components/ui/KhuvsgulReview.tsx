"use client";

import { FaStar } from "react-icons/fa"; // Star icon for rating
import { useLanguage } from "../context/LanguageContext"; // Assuming you have a LanguageContext
import { useTheme } from "../context/ThemeProvider"; // Assuming you have a ThemeContext for dark mode

const KhuvsgulReview = () => {
  const { language } = useLanguage(); // Get the current language from context
  const { isDarkMode } = useTheme(); // Get the dark mode state from context

  const reviews = [
    {
      name: "Б.Анударь",
      rating: 5,
      comment: language === "en"
        ? "The Khuvsgul Lake trip was an unforgettable experience in my life. The beautiful natural sights, the clean air of the lake, and getting to know the Tsaatan people’s culture was amazing."
        : "Хөвсгөл нуурын аялал бол миний амьдралдаа хэзээ ч мартагдашгүй туршлага байлаа. Байгалийн үзэсгэлэнт газрууд, цэвэр агаартай нуур, мөн Цаатан ард түмний соёлтой танилцах нь гайхамшигтай байсан.",
      image: "/namuun.jpg",
    },
    {
      name: "Г.Ундрах",
      rating: 4,
      comment: language === "en"
        ? "Horseback riding and resting by the lake was very enjoyable. The tour guides were very professional and paid great attention to our needs."
        : "Морьтой аялал, нуурын дэргэд амрах нь сэтгэлд маш их таалагдсан. Аяллын удирдагч нар маш мэргэжлийн, бидний хэрэгцээг сайн анхаарсан.",
      image: "/anudari.jpg",
    },
    {
      name: "Т.Намуун",
      rating: 5,
      comment: language === "en"
        ? "The Khuvsgul Lake trip was my best trip ever. It was a valuable experience meeting new people and exploring the breathtaking nature."
        : "Хөвсгөл нуурын аялал нь миний хамгийн сайхан аялал байсан. Сайхан амралт, шинэ хүмүүстэй уулзаж, гайхамшигтай байгальтай танилцах нь хамгийн үнэтэй туршлага байлаа.",
      image: "/nomio.jpg",
    },
  ];

  return (
    <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-700"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {language === "en" ? "Reviews about Khuvsgul Lake Trip" : "Хөвсгөл Нуурын Аяллын Тухай Сэтгэгдлүүд"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-2xl ${isDarkMode ? "bg-gray-700" : ""}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KhuvsgulReview;
