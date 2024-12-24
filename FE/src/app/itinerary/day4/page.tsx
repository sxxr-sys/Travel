"use client";

import Link from "next/link";

const Day4 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 4: Морьтой Аялал
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Өдөр 4-д бид Хөвсгөл нуураас морьтой аялал хийхээр төлөвлөж байна. Морьтой аялал нь Монголын соёлын нэгэн чухал хэсэг бөгөөд байгалийн үзэсгэлэнт газруудаар аялж, орон нутгийн амьдралтай танилцах сайхан боломж олгоно.
                </p>

                {/* Main Image */}
                <img
                    src="/day4.jpg"
                    alt="Өдөр 4: Морьтой Аялал"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />

                {/* Section: Route Details */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Маршрут</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нуурын эрэг дагуух үзэсгэлэнт газруудаар морьтой аялал хийх бөгөөд энэ аялал нь тайга, нуур, уулсын дундуур зам гарч, жинхэнэ Монголын байгалийг мэдрэх боломж олгоно.
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
                        <li>Монголын тайга болон уулсаар морьтой аялал хийх.</li>
                        <li>Морь унах туршлага, мэдрэмжийг амсах.</li>
                        <li>Орон нутгийн малчин ард түмний амьдралтай танилцах.</li>
                    </ul>
                </section>

                {/* Section: Cultural Exchange */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Соёлын Солилцоо</h2>
                    <p className="text-gray-700">
                        Аялалын явцад та Монголын малчин ард түмний амьдралд оролцох боломжтой. Та морь унаж, Монголын уламжлалт амьдралын хэв маягтай танилцаж, нутгийн иргэдтэй харилцан соёлын солилцоонд орно.
                    </p>
                </section>

                {/* Section: Packing Checklist */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Аяны Баглаа Боодол</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Морь унахад тохиромжтой хувцас (дууны гутал, жинхэнэ үслэг хувцас).</li>
                        <li>Ус болон хүнс.</li>
                        <li>Камер, батерей, дрон зэрэг зураг авах хэрэгсэл.</li>
                        <li>Халуунд тохиромжтой гутал, жоом зэргийг аваарай.</li>
                    </ul>
                </section>

                {/* Section: Tips */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Зөвлөгөө</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Морьтой аялал хийхийн өмнө хурдан морь унах анхан шатны хичээл авна уу.</li>
                        <li>Морьтой аяллын үеэр аюулгүй байдалд анхаарна уу.</li>
                        <li>Аялалын явцад байгаль орчноо хамгаалах, хог хаягдал үлдээхгүй байх нь чухал.</li>
                    </ul>
                </section>

                <div className="text-center mt-12">
                    <Link href="/itinerary/day5">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Өдөр 5-р Урагшлах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day4;
