"use client";

import { FaStar } from "react-icons/fa"; // Star icon for rating

const KhuvsgulReview = () => {
  const reviews = [
    {
      name: "Б.Анударь",
      rating: 5,
      comment: "Хөвсгөл нуурын аялал бол миний амьдралдаа хэзээ ч мартагдашгүй туршлага байлаа. Байгалийн үзэсгэлэнт газрууд, цэвэр агаартай нуур, мөн Цаатан ард түмний соёлтой танилцах нь гайхамшигтай байсан.",
      image: "/namuun.jpg",
    },
    {
      name: "Г.Ундрах",
      rating: 4,
      comment: "Морьтой аялал, нуурын дэргэд амрах нь сэтгэлд маш их таалагдсан. Аяллын удирдагч нар маш мэргэжлийн, бидний хэрэгцээг сайн анхаарсан.",
      image: "/anudari.jpg",
    },
    {
      name: "Т.Намуун",
      rating: 5,
      comment: "Хөвсгөл нуурын аялал нь миний хамгийн сайхан аялал байсан. Сайхан амралт, шинэ хүмүүстэй уулзаж, гайхамшигтай байгальтай танилцах нь хамгийн үнэтэй туршлага байлаа.",
      image: "/nomio.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Хөвсгөл Нуурын Аяллын Тухай Сэтгэгдлүүд
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KhuvsgulReview;
