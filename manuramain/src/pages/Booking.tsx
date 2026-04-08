import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Booking = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-20">
            <Header />
            <main className="flex-grow">
                <BookingCTA />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Booking;
