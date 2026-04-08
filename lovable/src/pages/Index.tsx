import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <MarqueeBanner />
            <ServicesSection />
            <GallerySection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Index;
