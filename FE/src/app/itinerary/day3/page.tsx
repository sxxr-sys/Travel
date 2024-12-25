"use client";

import Link from "next/link";

import Image from 'next/image'; // Import the Image component

const Day3 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 3: Цаатан Ард Түмэнтэй Уулзах
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Энэ өдөр бид Хөвсгөл нуураас хөдөлж, хойд бүсэд амьдардаг Цаатан ард түмэнтэй танилцана. Тэд бол Монголын үндэстний соёлын чухал хэсэг бөгөөд цаа буга маллаж, өвөрмөц амьдралын хэв маягаа хадгалсаар ирсэн.
                </p>

                {/* Main Image */}
                <Image
                    src="/day3.jpg"
                    alt="Өдөр 3: Цаатан Ард Түмэн"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                    width={1200} // Define width and height for optimization
                    height={800}
                />

                {/* Section: Route Details */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Маршрут</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нуураас хөдлөн хойд зүг рүү явж Цаатан ард түмэнтэй уулзах газар хүрнэ. Замын турш байгалийн үзэсгэлэнт уулс, тайга бүхий газар нутгаар аялна.
                    </p>
                    {/* Google Map Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="400"
                        
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </section>

                {/* Section: Highlights */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Онцлох зүйлс</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Цаа буга маллаж буй ард түмний соёл, амьдралын хэв маягийг танилцах.</li>
                        <li>Монголын тайгын байгалийн үзэсгэлэнг харах.</li>
                        <li>Цаатан ард түмний уламжлалт гар урлал, хувцас, амьдралын тухай суралцах.</li>
                    </ul>
                </section>

                {/* Section: Cultural Exchange */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Соёлын Солилцоо</h2>
                    <p className="text-gray-700">
                        Цаатан ард түмэнтэй танилцаж, тэдний өдөр тутмын амьдралд оролцох боломжтой. Та цаа буга арчилж, тайгын эргэн тойрныг судлах, орон нутгийн хоолны соёлоос суралцах болно.
                    </p>
                </section>

                {/* Section: Packing Checklist */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Аяны Баглаа Боодол</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Дулаан хувцас (тайгын сэрүүн нөхцөлд зориулагдсан).</li>
                        <li>Өдрийн хоолны бэлдмэл болон ус.</li>
                        <li>Камер, батерей, дрон зэрэг зураг авах хэрэгсэл.</li>
                        <li>Тайгад алхахад тохиромжтой гутал.</li>
                    </ul>
                </section>

                {/* Section: Tips */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Зөвлөгөө</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Аяллын эхэнд нутгийн газарч, орчуулагч хөлслөх нь чухал.</li>
                        <li>Цаатан ард түмний амьдралд хүндэтгэлтэй хандаарай.</li>
                        <li>Тайгын зэрлэг байгалийг хамгаалж, хог хаягдал үлдээхгүй байх.</li>
                    </ul>
                </section>
                <div className="text-center mt-12">
                    <Link href="/itinerary/day4">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Өдөр 4-р Урагшлах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day3;
