import AboutTravelMongolia from "@/components/ui/AboutTravelMongolia";
import AboutUs from "@/components/ui/AboutUs";
import HeadComponent from "@/components/ui/HeadComponent";
import KhuvsgulItinerary from "@/components/ui/KhuvsgulItinerary";
import KhuvsgulReview from "@/components/ui/KhuvsgulReview";
import KhuvsgulTourPackages from "@/components/ui/KhuvsgulTourPackages";
import LandingPage from "@/components/ui/landing";
import MapComponent from "@/components/ui/MapComponent";



export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <AboutTravelMongolia />
      <KhuvsgulItinerary />
      <AboutUs />
      <KhuvsgulTourPackages />
      <KhuvsgulReview />
      <MapComponent />
    </div>

  );
}
