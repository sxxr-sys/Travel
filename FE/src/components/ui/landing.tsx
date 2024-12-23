"use client";
import Link from "next/link";

const KhuvsgulLakePage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('/Lake.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                    <h1 className="text-5xl font-bold mb-6">Хөвсгөл Нуур</h1>
                    <p className="text-lg">
                        Монголын хамгийн том цэнгэг усны нуур, байгалийн гайхамшгийг мэдрэх газарт тавтай морилно уу.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-6 md:px-16 lg:px-32">
                <h2 className="text-4xl font-bold text-center mb-12">Хөвсгөл Нуурын тухай</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Хөвсгөл нуур нь Монгол Улсын хойд хэсэгт, Сибирийн хилийн ойролцоо орших цэнгэг устай томоохон нуур юм.
                    Энэ нуур нь дэлхийд цэвэр усаараа хоёрдугаарт бичигдэх бөгөөд 2760 км² талбай эзэлдэг.
                    Хөвсгөл нуур нь аялал жуулчлалын гол бүс нутгийн нэг бөгөөд зун нь усан завь, явган аялал, загасчлалын аялал хийхэд тохиромжтой бол өвөл нь
                    мөсөн баяр, цанаар гулгах зэрэг өвлийн спортоор хичээллэх боломжтой.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Нуурын орчинд сибирийн хусан ой, өвөрмөц амьтан ургамалтай үзэсгэлэнт байгаль байдаг.
                    Энэ нуур нь нутгийн иргэдийн соёл, уламжлалтай танилцаж, тайван амралт болон адал явдалт аяллыг нэгэн зэрэг эдлэхэд тохиромжтой.
                </p>
            </section>

            {/* Stops Section */}
            <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold text-center mb-12">Аялалын Зогсоолууд</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stop 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Хатгал Суурин</h3>
                        <p className="text-gray-600">
                            Хөвсгөл нуурын урд хэсэгт байрлах энэ суурин нь аяллын эхлэх цэг бөгөөд нутгийн зах, гар урлалын бүтээгдэхүүн худалдаалдаг дэлгүүрүүдээрээ алдартай.
                        </p>
                    </div>
                    {/* Stop 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Жанхайн Булан</h3>
                        <p className="text-gray-600">
                            Нуурын хамгийн үзэсгэлэнт булан бөгөөд энд амрах, зугаалах, усан завиар аялах боломжтой.
                            Мөн ойролцоох цагаан оройт уулс гайхалтай зураг авах байршил санал болгодог.
                        </p>
                    </div>
                    {/* Stop 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Цаатан Иргэдийн Нутаг</h3>
                        <p className="text-gray-600">
                            Хөвсгөл нуурын ойролцоох ууланд цаатан буюу бугын аргаар амьдардаг уламжлалт иргэд амьдардаг.
                            Тэдний өвөрмөц амьдралтай танилцах, соёлын солилцоо хийх боломжтой.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6">Аялалаа Өнөөдөр Захиалаарай</h2>
                <p className="text-lg mb-8">
                    Хөвсгөл нуурын гайхамшигийг биеэр үзэж, түүх, байгалийн дурсгалт газруудаар аялахыг хүсвэл бидэнтэй холбогдоорой.
                </p>
                <Link href="/book">
                    <button className="bg-white text-blue-500 py-3 px-8 text-lg font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        Захиалах
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default KhuvsgulLakePage;
