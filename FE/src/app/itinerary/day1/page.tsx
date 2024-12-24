"use client";

import Image from "next/image";
import Link from "next/link";

const Day1 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Title Section */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 1: Улаанбаатараас Мөрөн рүү
                </h1>

                {/* Intro Description */}
                <p className="text-gray-700 text-lg mb-4">
                    Улаанбаатараас Мөрөн рүү машинаар явах нь адал явдал дүүрэн аяллын эхлэл юм.
                    Замд байгалийн үзэсгэлэнт газруудыг харах боломжтой.
                </p>
                <Image
                    src="/day1.jpg"
                    alt="Өдөр 1"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                    width={800}
                    height={400}
                />

                {/* Weather and Climate */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Цаг агаар</h2>
                    <p className="text-gray-700 text-lg">
                        Аяллын улиралд цаг агаар өөрчлөгдөж болно. Зохих хувцаслалт хийхийг зөвлөж байна.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li><strong>Зун (6-8 сар):</strong> 20-25°C, нарлаг, заримдаа бага зэргийн бороо.</li>
                        <li><strong>Өвөл (11-3 сар):</strong> -15°C-аас -30°C, цас их ордог.</li>
                    </ul>
                </section>

                {/* Interactive Map */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Маршрут</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Улаанбаатараас Мөрөн рүү явах замын маршрутыг доорх газрын зургаас харах боломжтой.
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2728521.0977193453!2d100.92085293984327!3d48.4814702572968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x5d969430fe2ec81b%3A0x7d6e0b937e550c61!2z0JDQu9C10LHQsCDQkNC10L3QuNC90LDRgNC40Y8!3m2!1d47.9214474!2d106.9057434!4m5!1s0x5d6ac1af319653f3%3A0x894fdb7c75af2069!2z0JDQkNC10L3QuNC90LDRgCDQkNC60L7QstCw0YbQtdC90LjQvdGB0LrQsNC90LDRgNC40Y8!3m2!1d49.6303801!2d100.1556059!5e0!3m2!1sen!2smn!4v1698613183734!5m2!1sen!2smn"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </section>

                {/* Food and Rest Stops */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Хоол, Амралтын Цэгүүд</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Дархан:</strong> Орон нутгийн амттай бууз болон хоолны газрууд.</li>
                        <li><strong>Эрдэнэт:</strong> Түлшний станц болон 00-ын өрөөтэй зогсоолууд.</li>
                    </ul>
                </section>

                {/* Transportation Options */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Тээврийн Сонголтууд</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Хувийн машин:</strong> Уян хатан, тав тухтай сонголт.</li>
                        <li><strong>Автобус:</strong> Хямд өртөгтэй ч илүү удаан явах хугацаатай.</li>
                        <li><strong>Нислэг:</strong> Түргэн бөгөөд 1.5 цаг орчим үргэлжилнэ.</li>
                    </ul>
                </section>

                {/* Packing Checklist */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ачаа Баглах Санамж</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Амттан болон ус</li>
                        <li>Цэнэглэгч төхөөрөмж</li>
                        <li>Хувцас (давхарлаж өмсөх боломжтой)</li>
                        <li>GPS эсвэл оффлайн газрын зураг</li>
                        <li>Онцгой байдлын иж бүрдэл (анхны тусламж, гар чийдэн)</li>
                    </ul>
                </section>

                {/* Travel Safety Tips */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Аюулгүй Байдлын Зөвлөгөө</h2>
                    <p className="text-gray-700 text-lg">
                        Холын замд аюулгүй явахын тулд дараах зөвлөгөөг дагаарай:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Машинаа шалгах (түлш, дугуй, гэрэл).</li>
                        <li>Шөнө оройн цагт жолоо барихаас зайлсхий.</li>
                        <li>Замын хажуугийн тусламжийн дугааруудыг тэмдэглэх.</li>
                    </ul>
                </section>

                {/* CTA to Day 2 */}
                <div className="text-center mt-12">
                    <Link href="/itinerary/day2">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Өдөр 2-р Урагшлах
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Day1;
