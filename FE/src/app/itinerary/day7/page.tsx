"use client";

import Link from "next/link";

const Day7 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 7: Улаанбаатар Руу Буцах
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Өдөр 7-д бид Хөвсгөл нуурын аяллаа дуусгаад Улаанбаатар руу буцах болно. Бидний аялалын энэ сүүлчийн өдөр бидэнд амьдралын шинэ эргэн тойрон, их хотын амьдралтай танилцах боломж олгоно. Хөвсгөл нууртай хамт өнгөрүүлсэн гайхалтай өдрүүдийн дурсамжтайгаа Улаанбаатарт ирэх болно.
                </p>

                {/* Main Image */}
                <img
                    src="/day7.jpg"
                    alt="Өдөр 7: Улаанбаатар руу буцах"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />

                {/* Section: Journey Back to Ulaanbaatar */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Улаанбаатар Руу Буцах Аялал</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нууртай салах ёс хийсний дараа бид Улаанбаатар руу буцаж явах болно. Энэхүү аялал нь амьдралын онцгой туршлагыг дуусгаж, бидний бие махбодь болон сэтгэл санаа шинэчлэгдсэн байна. Хөвсгөл нуурын түүх, соёл, байгаль, тэр ч байтугай орон нутгийн хүмүүсийн харилцаа нь олон жилийн турш таны дурсамжид үлдэж, та ирээдүйд дахин нэг аялал хийхийг хүсэх болно.
                    </p>
                </section>

                {/* Section: Stops on the way back to Ulaanbaatar */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Улаанбаатар Руу Явах Замд Зогсох Байршлууд</h2>
                    <p className="text-gray-700">
                        Улаанбаатар руу буцах замд та зарим нэг сонирхолтой газруудыг үзэх боломжтой:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Мөрөн хот</strong>: Хөвсгөл аймгийн төв, байгалийн үзэсгэлэнт газар, амралттай. Энэ газарт та орон нутгийн амттай хоолны дурсамжтай болоод, орон нутгийн соёлтой танилцах боломжтой.</li>
                        <li><strong>Цагаан-Уул</strong>: Замд та амрахад тохиромжтой, айлчлал хийхэд тохиромжтой нэгэн сайхан газар.</li>
                        <li><strong>Тэрэлж</strong>: Улаанбаатар хотод ирэхийн өмнө Тэрэлжийн үзэсгэлэнт байгалийн нөөц газраар зочлох нь аялалд амралт авчирна. Тэрэлжийн хаднууд, тансаг орон нутгийн соёлтой танилцах нь маш сэтгэлд нийцдэг.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Эдгээр газруудаар аялж, амрах нь таны Улаанбаатар руу буцах замд илүү сонирхолтой болгоно. Энэ аялалд, та олон шинэ мэдрэмжүүдийг өөртөө авчирч, дурсамжтай аяллыг бүтээх болно.
                    </p>
                </section>

                {/* Section: Ulaanbaatar Map */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Улаанбаатар Хотоор Зочлох</h2>
                    <p className="text-gray-700 mb-4">
                        Улаанбаатар хот нь Монгол улсын хамгийн том хот бөгөөд эдийн засгийн, соёлын, түүхийн төв болж байна. Буцаж ирээд, Улаанбаатарын амьдрал, дурсгалт газруудыг үзэх, орон нутгийн соёлтой танилцах боломжтой.
                    </p>

                    {/* Map Embed */}
                    <div className="w-full h-80 mb-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254674.78707610995!2d104.52433173839642!3d47.92816831603203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d963d87b5c4a51f%3A0x433ed9d4d1bada0b!2z0JHQs9Cw0YDRgdGC0LjQvNCw!5e0!3m2!1sen!2smn!4v1712672614242"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

                {/* Section: Farewell to Khuvsgul Lake */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Хөвсгөл Нуураас Салах</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нуур бидний зүрхэнд үргэлж үлдэж, бүх аялалын хамгийн сүүлчийн дурсамж болж хүндэтгэлтэйгээр бид үргэлж мөнхөд санаж явна. Үүний дараа Улаанбаатар хотыг өнгөрүүлэх нь олон хүнээс адилхан тухтай болон шинэчилсэн туршлага авчрах болно.
                    </p>
                </section>

                <div className="text-center mt-12">
                    <Link href="/">
                        <button className="bg-green-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-green-600 transition duration-300">
                            Аялалаа Дуусгах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day7;
