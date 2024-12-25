import Link from "next/link";
import Image from "next/image"; // Import Image component

const Day2 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 2: Мөрөнөөс Хөвсгөл нуур руу
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Өнөөдөр бид Мөрөн хотоос Хөвсгөл нуур руу аялах болно. Энэ нь 100 км орчим зайтай бөгөөд ойролцоогоор 2 цаг орчим үргэлжилнэ.
                    Зам зуур Монголын хөдөө нутгийн онцлог байгаль, үзэсгэлэнт уул нуруудыг таашаах боломжтой.
                </p>

                {/* Main Image */}
                <Image
                    src="/day2.jpg"
                    alt="Өдөр 2"
                    width={1200} // Set image width
                    height={800} // Set image height
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />

                {/* Section: Route Details */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Маршрут</h2>
                    <p className="text-gray-700">
                        Мөрөн хотоос гарч, Хөвсгөл нуурын зүг хойд зүгт үргэлжлэх замаар явна. Зам зуур Түнэл, Хатгал зэрэг жижиг суурин газруудыг дайран өнгөрч болно. Хатгал нь Хөвсгөл нуурын өмнөд хэсэгт байрладаг бөгөөд аяллын хамгийн эхний зогсоол болно.
                    </p>
                    {/* Google Map Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d551576.9258461317!2d99.92548770000001!3d49.4704538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x5d6ac1af319653f3%3A0x894fdb7c75af2069!2z0JDQkNC10L3QuNC90LDRgCDQkNC60L7QstCw0YbQtdC90LjQvdGB0LrQsNC90LDRgNC40Y8!3m2!1d49.6303801!2d100.1556059!4m5!1s0x5d95a5d721e7c47f%3A0x7b0af77b12d98af9!2z0JDQkNC90LXRhNC40YDQvtGB0YLRgNC10LzQvdGB0LrQsNGPINGD0LTQvtC10LrRgNCw0LvRjNGG0LjQsNC60LjRhtCw!3m2!1d50.5749964!2d100.1637133!5e0!3m2!1sen!2smn!4v1700000000000!5m2!1sen!2smn"
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
                        <li>Монголын байгалийн үзэсгэлэнт уулархаг газар нутгаар аялах.</li>
                        <li>Хатгал тосгонд хүрч, орон нутгийн хүмүүсийн амьдралтай танилцах.</li>
                        <li>Хөвсгөл нуурын эрэгт байрлах кемпүүд болон амралтын газруудыг судлах.</li>
                    </ul>
                </section>

                {/* Section: Weather */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Цаг Агаар</h2>
                    <p className="text-gray-700">
                        Хөвсгөл нуурын цаг агаар зуны улиралд сэрүүн байх бөгөөд дундаж температур 10°C - 20°C байдаг. Замд дулаан хувцас, борооны цув бэлдэж явахыг зөвлөж байна.
                    </p>
                </section>

                {/* Section: Packing Checklist */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Аяны Баглаа Боодол</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Зузаан хүрэм, дулаан хувцас</li>
                        <li>Борооны цув</li>
                        <li>Зай багтаамж сайтай камераар байгалийн зураг авах</li>
                        <li>Замын хөнгөн зууш, ус</li>
                    </ul>
                </section>

                {/* Section: Tips */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Зөвлөгөө</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Шатахуун болон бусад хэрэгцээтэй зүйлсээ Мөрөнд хангалттай базаагаарай.</li>
                        <li>Хөвсгөл нуурын эрэг дээр шөнийн цагаар сэрүүцэх магадлалтай тул дулаан хөнжил авч яваарай.</li>
                        <li>Хөдөө замын хүнд хэцүү нөхцөлд зориулсан тээврийн хэрэгсэл сонгох нь чухал.</li>
                    </ul>
                </section>
                <div className="text-center mt-12">
                    <Link href="/itinerary/day3">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Өдөр 3-р Урагшлах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day2;
