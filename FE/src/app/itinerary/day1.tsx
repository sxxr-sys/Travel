"use client";

const Day1 = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Өдөр 1: Улаанбаатараас Мөрөн рүү
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    Улаанбаатараас Мөрөн рүү машинаар явах нь адал явдал дүүрэн аяллын эхлэл юм.
                    Замд байгалийн үзэсгэлэнт газруудыг харах боломжтой.
                </p>
                <img
                    src="/day1.jpg"
                    alt="Өдөр 1"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
                <p className="text-gray-700 text-lg">
                    Энэ өдөр та Монголын хөдөө нутгийн байгалийн үзэсгэлэнг эдлэх болно.
                    Замын туршид олон янзын үзэсгэлэнт газрууд болон орон нутгийн амьдралыг харж болно.
                </p>
            </div>
        </div>
    );
};

export default Day1;
