import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IftarSection from "@/components/IftarSection";
import SuhourSection from "@/components/SuhourSection";
import ExperienceCards from "@/components/ExperienceCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="iftar">
          <IftarSection />
        </section>
        <section id="suhour">
          <SuhourSection />
        </section>
        <ExperienceCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
