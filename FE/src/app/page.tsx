import { Mail, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-500">
        <Link href="/">TRAVEL MONGOLIA</Link>
      </div>

      <div className="flex gap-10 items-center">
        <div className="flex gap-3 items-center">
          <Mail className="text-blue-400" />
          <a href="mailto:Travelmongolia@gmail.com" className="font-semibold text-gray-700 hover:text-blue-500">
            Travelmongolia@gmail.com
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <PhoneCallIcon className="text-blue-400" />
          <a href="tel:+97699038823" className="font-semibold text-gray-700 hover:text-blue-500">
            +976-99038823
          </a>
        </div>
      </div>
    </nav>

  );
}
