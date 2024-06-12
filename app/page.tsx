import Details from "@/components/ProductUsp";
import Hero from "@/components/Hero";
import Product from "@/components/WhyBuyFromUs";
import Promotion from "@/components/Promotion";
import CertifyProduct from "@/components/CertifyProduct";
import Faq from "@/components/Faq";
import LandingScreen from "@/components/LandingScreen";
import PhysicalPresence from "@/components/PhysicalPresence";
import BlogDetailsScreen from "@/components/BlogsDetailsScreen";

export default function Home() {
  return (
    <>
    <LandingScreen/>
    <Product/>
    <Details/>
    <CertifyProduct/>
    <PhysicalPresence/>
    <Faq/>
    <Promotion/>
    </>
  );
}
