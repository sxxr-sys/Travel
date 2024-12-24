import Script from "next/script";

const HeadComponent = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places,directions`}
            />
        </>
    );
};

export default HeadComponent;
