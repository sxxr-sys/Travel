"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const KhuvsgulLakePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Persist dark mode preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>

            {/* Khuvsgul Lake Details Section */}
            <section className="py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-6">Хөвсгөл Нуур</h1>
                <Image
                    src="/Lake.jpg" // Add leading slash to the image path
                    alt="Khuvsgul Lake"
                    width={1200} // Specify width
                    height={800} // Specify height
                    className="w-full h-96 object-cover rounded-lg mb-8"
                />

                <p className="text-lg text-gray-600 mb-8">
                    Хөвсгөл нуур нь Монгол улсын хойд хэсэгт, Оросын хилийн ойролцоо оршдог &quot;Монголын цэнхэр эрхэс&quot; гэж алдаршсан томоохон усан сан юм. Энэ нь Монголын хамгийн том цэвэр усны нуур бөгөөд үзэсгэлэнт байгалийн тайван орчин, уулсаар хүрээлэгдсэн байдаг. Нуур нь аялал жуулчлалын хамгийн шилдэг газар бөгөөд амар тайван байдал, байгалийн үзэмж, адал явдал хүсэгчдэд тохиромжтой.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Шилдэг Үйл Ажиллагаанууд</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Нуурын эргийн дагуух аялал</li>
                            <li>Нуурын хөвөөнд палаткаар амрах</li>
                            <li>Цэвэр устай нуурт загас барих</li>
                            <li>Ан амьтан ажиглах (бүргэд, мэлхий, зэрэг)</li>
                            <li>Нуур дээр завиар аялал хийх</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Тамирлагчид хэрхэн очих вэ?</h2>
                        <p className="text-gray-600">
                            Хөвсгөл нуур нь хатуу замаар очиж болох ч, энэ нь холоос явдаг газар юм. Ихэнх аялагчид Мөрөн хот руу нисч, тэндээс автомашинаар нуур руу явдаг. Энэ нь удаан аялал ч, зам дагуу үзэсгэлэнт байгальтай.
                            Нуурт очсон хойноо та янз бүрийн адал явдлуудыг, жишээлбэл, явган аялал, загас барих, байгалийн гайхамшигтай орчинд аялж болно.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <Link href="/book">
                        <button className="bg-blue-500 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
                            Аялалаа Захиалаарай
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default KhuvsgulLakePage;
