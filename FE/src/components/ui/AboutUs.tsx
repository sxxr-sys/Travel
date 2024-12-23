"use client";

import { FaRegHandshake, FaHotel, FaCarSide } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    Хөвсгөл Нуур Аяллын Үйлчилгээ
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Бид таны аяллыг санагдуулам, амжилттай болгоход туслах зорилготой. Манай тур
                    пакетуудаас сонгоод та хамгийн сайн үйлчилгээ, байрлал, тээвэрлэлтийг авах болно.
                </p>

                {/* Services Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Amazing Tour Packages */}
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <FaRegHandshake className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">Аялалын Пакетууд</h3>
                        <p className="text-gray-600">
                            Бид танд хамгийн сайн аяллын багцуудыг санал болгох бөгөөд аяллын маршрут болон амрах газрыг танд зориулан тохируулан гаргана.
                        </p>
                    </div>

                    {/* Book Top Class Hotel */}
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <FaHotel className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">Топ Төрлийн Зочид Буудал</h3>
                        <p className="text-gray-600">
                            Бид зөвхөн хамгийн өндөр үнэлгээтэй зочид буудлуудыг санал болгож, таны орон нутгийн амралт болон аялагчдын туршлагыг сайжруулна.
                        </p>
                    </div>

                    {/* Transport Booking */}
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <FaCarSide className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">Тээвэрлэлт Захиалга</h3>
                        <p className="text-gray-600">
                            Бид бүх төрлийн тээврийн хэрэгслийг захиалж, таны аяллыг илүү амар, хялбар, ая тухтай болгоход туслана.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
