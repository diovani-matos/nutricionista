import Abordagem from "@/components/Abordagem";
import CtaSection from "@/components/CtaSection";
import Depoimentos from "@/components/Depoimentos";
import Dores from "@/components/Dores";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Dores />
      <Abordagem />
      <Sobre />
      <Depoimentos />
      <CtaSection />
      <Footer />
    </>
  );
}
