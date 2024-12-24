"use client";

import Link from "next/link";

const Day5 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 5: Нуурын Өдөр
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Өдөр 5-д бид Хөвсгөл нуурын эрэг дээр өнгөрүүлэх бөгөөд нуурын усанд сэлж, завиар аялах, болон нуурын орчимд амрах сайхан боломж олгоно. Мөн Хөвсгөл нуурын үзэсгэлэнт байгальтай танилцаж, орон нутгийн соёлын талаар суралцах болно.
                </p>

                {/* Main Image */}
                <img
                    src="/day5.jpg"
                    alt="Өдөр 5: Нуурын Өдөр"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />

                {/* Section: Route Details */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Маршрут</h2>
                    <p className="text-gray-700">
                        Бид Хөвсгөл нуурын эрэг дагуух үзэсгэлэнт газруудыг судлах бөгөөд завь болон сэлэлтээр тайга болон нуурын байгалийг оролцож үзнэ. Энэ нь Монголын цэвэр байгалийн үзэсгэлэнг мэдрэх сайхан боломж.
                    </p>
                    {/* Google Map Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d275513.63521509594!2d100.16371329999998!3d50.5749964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x5d95a5d721e7c47f%3A0x7b0af77b12d98af9!2z0JDQkNC90LXRhNC40YDQvtGB0YLRgNC10LzQvdGB0LrQsNGPINGD0LTQvtC10LrRgNCw0LvRjNGG0LjQsNC60LjRhtCw!3m2!1d50.5749964!2d100.1637133!4m5!1s0x5d94d7c3e1309147%3A0x77e4a11b7be71ab8!2z0JDQkNCy0LDQtNCy0YvQvdC40Lkg0L_RgNC-0LTQtdGA0LjQt9C90LjQuSDQsdC40LLQtdC90YLQsNGC!3m2!1d51.2!2d100.717!5e0!3m2!1sen!2smn!4v1700000000000!5m2!1sen!2smn"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </section>

                {/* Section: Highlights */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Онцлох зүйлс</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Хөвсгөл нуурын эрэг дагуух завиар аялах.</li>
                        <li>Нуурын усаар сэлж, тайгын үзэсгэлэнтэй байгалийг үзэх.</li>
                        <li>Монголын ардын соёл, амьдралтай танилцах.</li>
                    </ul>
                </section>

                {/* Section: Cultural Exchange */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Соёлын Солилцоо</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нуурын орчимд та орон нутгийн амьдралд оролцож, нуурын тухай олон төрлийн соёлын мэдээлэл авч, уламжлалт хоол, түүхийг танилцана.
                    </p>
                </section>

                {/* Section: Packing Checklist */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Аяны Баглаа Боодол</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Усанд сэлэх хувцас, завь унах тохиромжтой хувцас.</li>
                        <li>Хурдан хатуу замд зориулсан гутал.</li>
                        <li>Нарны хамгаалалт (нарны тос, малгай, нүдний шил).</li>
                        <li>Фото зургийн хэрэгсэл (камера, дрон гэх мэт).</li>
                    </ul>
                </section>

                {/* Section: Tips */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Зөвлөгөө</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Усанд сэлэхдээ аюулгүй байдлаа хадгалаарай.</li>
                        <li>Тайга нуурын орчинд байгалийн тэнцвэрийг хамгаалаарай.</li>
                        <li>Завиар аялж буй үед аюулгүй байдлыг нэгдмэл байлгаарай.</li>
                    </ul>
                </section>

                <div className="text-center mt-12">
                    <Link href="/itinerary/day6">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Өдөр 6-р Урагшлах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day5;
