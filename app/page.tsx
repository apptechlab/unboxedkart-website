import Details from "@/components/ProductUsp";
import Hero from "@/components/Hero";
import Product from "@/components/Repair";
import Promotion from "@/components/Promotion";
import CertifyProduct from "@/components/CertifyProduct";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
    <Hero/>
    <Product/>
    <Details/>
    <CertifyProduct/>
    <Faq/>
    <Promotion/>
    </>
  );
}
