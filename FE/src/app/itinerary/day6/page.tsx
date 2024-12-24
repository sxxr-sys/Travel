"use client";

import Link from "next/link";

const Day6 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 6: Салах Ёс
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Өдөр 6-д бид Хөвсгөл нууртай салах ёс хийж, аялалаа дуусгах болно. Энэ өдөр бид нуурын эрэг дээр суугаад өнгөрсөн 5 өдрийн адал явдал, байгалийн үзэсгэлэнт газруудаар аялсан дурсамжаа хуваалцаж, амьдралыг дахин нэг удаа эргэцүүлэх болно.
                </p>

                {/* Main Image */}
                <img
                    src="/day6.jpg"
                    alt="Өдөр 6: Салах Ёс"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />

                {/* Section: Reflection & Farewell */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Өнгөрсөн Аяллын Эргэцүүлэл</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нуурын эргийн үзэсгэлэнт байгаль, нуурын далай дээр өнгөрүүлсэн цаг хугацаа бидэнд олон дурсамжийг үлдээсэн. Энэ өдөр бид салах ёс хийж, аяллынхаа төгсгөлд ирэх болно. Аялагчид энэ газрыг амралт, амьдралын шинэ замтай холбогдож, оюун санаагаа шинэчлэхэд тохиромжтой гэж үздэг.
                    </p>
                </section>

                {/* Section: Other Traveler Reviews */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Аялагчдын Сэтгэгдэл</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 italic">"Хөвсгөл нуур нь миний амьдралын хамгийн гайхалтай аялал байсан. Үнэхээр үзэсгэлэнтэй орчин, тайван амьдралын хэв маяг. Салах ёс хийх үед эмэгтэй хүн зам дагуу гарч ирээд бидэнд хүндэтгэл үзүүлсэн нь маш сэтгэлд дулаахан байлаа." - Гэрэлмаа, 35 нас</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 italic">"Энэ аялал нь миний санааг амраасан. Нуурын эрэг дээр суугаад хамтран аялагчидтайгаа ярилцах нь миний хамгийн их санаж болох хэсэг байсан. Хөвсгөл нууртай салах ёс хийхэд үнэхээр сэтгэл хөдөлсөн." - Батсайхан, 29 нас</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 italic">"Үзэсгэлэнт байгаль, сайхан хүмүүс, урт удаан аялал. Хөвсгөл нууртай салах ёс хийхэд бид орон нутгийн хүмүүсээс уламжлалт салах ёс хийж байсан. Энэ нь бидэнд энэ газар хамгийн үнэ цэнэтэй дурсамжийг үлдээсэн." - Мөнхбат, 40 нас</p>
                        </div>
                    </div>
                </section>

                {/* Section: Farewell Ritual */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Салах Ёс</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нууртай салах ёс хийх нь тухайн аялалын төгсгөл бөгөөд энэ үеэр орон нутгийн уламжлалаар талархал илэрхийлэн, амар амгалангийн төлөө залбирах ёс заншил байдаг. Энэ нь аялагчдад амьдралын төгсгөлийг нээх нэгэн гайхамшигтай туршлага юм.
                    </p>
                </section>

                <div className="text-center mt-12">
                    <Link href="/itinerary/day7">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Өдөр 7-р Урагшлах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day6;
