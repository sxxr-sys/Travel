"use client";

const AboutTravelMongolia = () => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Монголд Аялал
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Монгол улс нь өргөн уудам тал, тунгалаг нуур, үзэсгэлэнт байгаль,
                    олон зууны түүхтэй өв соёлоороо дэлхийд алдартай. Энэ нь эртний
                    нүүдэлчдийн амьдрал, гайхамшигтай хээр тал, Говийн элсэн цөлөөс
                    Хөвсгөл нуурын тунгалаг усанд хүрэх хүртэлх аяллын төгс орчин юм.
                    Монголд аялах нь танд мартагдашгүй дурсамжуудыг үлдээх болно.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Unique Feature 1 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="/nomadic-life.jpg"
                            alt="Nomadic Life"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Нүүдэлчин Амьдрал</h3>
                        <p className="text-gray-600">
                            Монголын уламжлалт нүүдэлчин амьдралыг туршиж,
                            өвөрмөц соёл, зан заншлыг мэдрээрэй.
                        </p>
                    </div>

                    {/* Unique Feature 2 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="/landscape.jpg"
                            alt="Diverse Landscapes"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Өвөрмөц Байгалийн Дүр зураг</h3>
                        <p className="text-gray-600">
                            Уул, гол мөрөн, элсэн манхан зэрэг гайхамшигтай
                            байгалийн дүр зурагтай танилцаарай.
                        </p>
                    </div>

                    {/* Unique Feature 3 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="/history.jpg"
                            alt="Rich History"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">Эртний Түүх</h3>
                        <p className="text-gray-600">
                            Монголын эртний түүх, соёлын өвийг судалж,
                            Чингис хааны эзэнт гүрний тухай илүү ихийг мэдэж аваарай.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTravelMongolia;
