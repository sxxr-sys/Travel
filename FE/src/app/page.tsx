import AboutTravelMongolia from "@/components/ui/AboutTravelMongolia";
import AboutUs from "@/components/ui/AboutUs";
import KhuvsgulItinerary from "@/components/ui/KhuvsgulItinerary";
import KhuvsgulReview from "@/components/ui/KhuvsgulReview";
import KhuvsgulTourPackages from "@/components/ui/KhuvsgulTourPackages";
import LandingPage from "@/components/ui/landing";



export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <AboutTravelMongolia />
      <KhuvsgulItinerary />
      <AboutUs />
      <KhuvsgulTourPackages />
      <KhuvsgulReview />
    </div>

  );
}
