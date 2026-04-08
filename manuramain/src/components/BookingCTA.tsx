import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Check } from "lucide-react";

const services = [
    {
        id: "haircut",
        title: "Erkek Saç Kesimi",
        duration: "45 dk",
        price: 350,
    },
    {
        id: "beard",
        title: "Sakal Bakımı",
        duration: "30 dk",
        price: 250,
    },
    {
        id: "color",
        title: "Saç Renklendirme",
        duration: "90 dk",
        price: 500,
    },
    {
        id: "premium",
        title: "Premium Bakım Paketi",
        duration: "120 dk",
        price: 800,
    },
    {
        id: "wash",
        title: "Saç Yıkama & Şekillendirme",
        duration: "20 dk",
        price: 150,
    },
    {
        id: "kids",
        title: "Çocuk Saç Kesimi",
        duration: "30 dk",
        price: 200,
    },
];

const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30",
];

const BookingCTA = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState(0); // 0: services, 1: date/time, 2: info
    const [submitted, setSubmitted] = useState(false);

    const toggleService = (id: string) => {
        setSelectedServices(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const totalPrice = services
        .filter(s => selectedServices.includes(s.id))
        .reduce((sum, s) => sum + s.price, 0);

    const totalDuration = services
        .filter(s => selectedServices.includes(s.id))
        .reduce((sum, s) => sum + parseInt(s.duration), 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // Generate next 14 days
    const dates = Array.from({ length: 14 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return d;
    }).filter(d => d.getDay() !== 0); // exclude Sundays

    const formatDate = (d: Date) => {
        const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
        return {
            day: days[d.getDay()],
            date: d.getDate(),
            month: d.toLocaleDateString("tr-TR", { month: "short" }),
            full: d.toISOString().split("T")[0],
        };
    };

    return (
        <section id="booking" className="py-28 md:py-40 px-6 md:px-10 border-t border-foreground/[0.06] pb-32 md:pb-40">
            <div className="max-w-screen-xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-5 mb-6"
                    >
                        <div className="w-10 h-px bg-primary/40" />
                        <span className="section-label">Randevu</span>
                        <div className="w-10 h-px bg-primary/40" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="section-heading text-4xl md:text-6xl lg:text-7xl mb-4"
                    >
                        Randevunuzu{" "}
                        <span className="italic text-primary">oluşturun</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-sm text-foreground/35 max-w-md mx-auto"
                    >
                        Hizmet seçin, tarih ve saat belirleyin, biz sizi arayalım.
                    </motion.p>
                </div>

                {submitted ? (
                    /* Success State */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto text-center py-20"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Check className="text-primary" size={28} />
                        </div>
                        <h3 className="font-serif text-3xl text-foreground mb-3">Randevunuz Alındı!</h3>
                        <p className="font-sans text-sm text-foreground/40 mb-8">
                            En kısa sürede sizi arayarak randevunuzu onaylayacağız.
                        </p>
                        <button
                            onClick={() => { setSubmitted(false); setStep(0); setSelectedServices([]); setSelectedDate(""); setSelectedTime(""); setName(""); setPhone(""); }}
                            className="font-sans text-[11px] uppercase tracking-[0.18em] border border-foreground/15 text-foreground/60 px-8 py-3 rounded-full hover:border-primary/40 hover:text-primary transition-all"
                        >
                            Yeni Randevu
                        </button>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left: Steps */}
                        <div className="lg:col-span-2">
                            {/* Step indicators */}
                            <div className="flex items-center gap-2 mb-10">
                                {["Hizmet", "Tarih & Saat", "Bilgiler"].map((label, i) => (
                                    <button
                                        key={label}
                                        onClick={() => i <= Math.max(step, selectedServices.length > 0 ? 1 : 0) && setStep(i)}
                                        className={`flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] transition-colors duration-300 ${step === i ? "text-primary" : "text-foreground/25"
                                            }`}
                                    >
                                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] border transition-colors flex-shrink-0 ${step === i
                                            ? "border-primary text-primary"
                                            : step > i
                                                ? "border-primary/30 bg-primary/10 text-primary"
                                                : "border-foreground/10 text-foreground/25"
                                            }`}>
                                            {step > i ? <Check size={10} /> : i + 1}
                                        </span>
                                        <span className="hidden xs:inline sm:inline">{label}</span>
                                        {i < 2 && <div className="w-6 md:w-16 h-px bg-foreground/[0.06] ml-1" />}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                {/* Step 0: Service Selection */}
                                {step === 0 && (
                                    <motion.div
                                        key="services"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-2"
                                    >
                                        {services.map((service) => {
                                            const isSelected = selectedServices.includes(service.id);
                                            return (
                                                <button
                                                    key={service.id}
                                                    onClick={() => toggleService(service.id)}
                                                    className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-300 text-left ${isSelected
                                                        ? "border-primary/30 bg-primary/[0.04]"
                                                        : "border-foreground/[0.05] hover:border-foreground/[0.1] bg-card/30"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected
                                                            ? "border-primary bg-primary"
                                                            : "border-foreground/15"
                                                            }`}>
                                                            {isSelected && <Check size={10} className="text-primary-foreground" />}
                                                        </div>
                                                        <div>
                                                            <span className="font-serif text-lg text-foreground block">{service.title}</span>
                                                            <span className="font-sans text-[11px] text-foreground/30 uppercase tracking-wider">{service.duration}</span>
                                                        </div>
                                                    </div>
                                                    <span className="font-serif text-xl text-primary">{service.price} TL</span>
                                                </button>
                                            );
                                        })}

                                        <div className="pt-6">
                                            <button
                                                disabled={selectedServices.length === 0}
                                                onClick={() => setStep(1)}
                                                className="btn-magnetic font-sans text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3"
                                            >
                                                Devam Et <span>→</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 1: Date & Time */}
                                {step === 1 && (
                                    <motion.div
                                        key="datetime"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Date picker */}
                                        <div className="mb-10">
                                            <h3 className="section-label text-foreground/30 mb-4">Tarih Seçin</h3>
                                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                                {dates.map((d) => {
                                                    const f = formatDate(d);
                                                    const isSelected = selectedDate === f.full;
                                                    return (
                                                        <button
                                                            key={f.full}
                                                            onClick={() => setSelectedDate(f.full)}
                                                            className={`flex-shrink-0 w-[72px] py-4 rounded-xl border flex flex-col items-center gap-1 transition-all duration-300 ${isSelected
                                                                ? "border-primary bg-primary/[0.06] text-primary"
                                                                : "border-foreground/[0.05] text-foreground/40 hover:border-foreground/[0.1]"
                                                                }`}
                                                        >
                                                            <span className="text-[10px] uppercase tracking-wider font-sans">{f.day}</span>
                                                            <span className="font-serif text-2xl font-light">{f.date}</span>
                                                            <span className="text-[9px] uppercase tracking-wider font-sans opacity-50">{f.month}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Time picker */}
                                        <div className="mb-10">
                                            <h3 className="section-label text-foreground/30 mb-4">Saat Seçin</h3>
                                            <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-7 gap-2">
                                                {timeSlots.map((time) => {
                                                    const isSelected = selectedTime === time;
                                                    return (
                                                        <button
                                                            key={time}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-3 rounded-lg border font-sans text-sm transition-all duration-300 ${isSelected
                                                                ? "border-primary bg-primary/[0.06] text-primary"
                                                                : "border-foreground/[0.05] text-foreground/40 hover:border-foreground/[0.1]"
                                                                }`}
                                                        >
                                                            {time}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setStep(0)}
                                                className="font-sans text-[11px] uppercase tracking-[0.18em] border border-foreground/10 text-foreground/40 px-8 py-4 rounded-full hover:border-foreground/20 transition-all"
                                            >
                                                ← Geri
                                            </button>
                                            <button
                                                disabled={!selectedDate || !selectedTime}
                                                onClick={() => setStep(2)}
                                                className="btn-magnetic font-sans text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3"
                                            >
                                                Devam Et <span>→</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Contact Info */}
                                {step === 2 && (
                                    <motion.div
                                        key="info"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
                                            <div>
                                                <label className="section-label text-foreground/25 block mb-2.5">Adınız Soyadınız</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-background/60 border border-foreground/[0.08] rounded-lg px-4 py-3.5 text-sm font-sans text-foreground placeholder:text-foreground/15 focus:outline-none focus:border-primary/40 transition-colors duration-300"
                                                    placeholder="Ad Soyad"
                                                />
                                            </div>
                                            <div>
                                                <label className="section-label text-foreground/25 block mb-2.5">Telefon Numaranız</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full bg-background/60 border border-foreground/[0.08] rounded-lg px-4 py-3.5 text-sm font-sans text-foreground placeholder:text-foreground/15 focus:outline-none focus:border-primary/40 transition-colors duration-300"
                                                    placeholder="05XX XXX XX XX"
                                                />
                                            </div>

                                            <div className="flex gap-3 pt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    className="font-sans text-[11px] uppercase tracking-[0.18em] border border-foreground/10 text-foreground/40 px-8 py-4 rounded-full hover:border-foreground/20 transition-all"
                                                >
                                                    ← Geri
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={!name || !phone}
                                                    className="btn-magnetic font-sans text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3"
                                                >
                                                    <Phone size={13} />
                                                    Randevu Al
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile sticky bottom bar — visible only when services are selected */}
                        {selectedServices.length > 0 && (
                            <motion.div
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-foreground/[0.08] px-6 py-4 flex items-center justify-between"
                            >
                                <div>
                                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-0.5">
                                        {selectedServices.length} hizmet • {totalDuration} dk
                                    </p>
                                    <p className="font-serif text-xl text-primary">{totalPrice} TL</p>
                                </div>
                                <button
                                    onClick={() => step < 2 && setStep(step + 1)}
                                    disabled={step === 2}
                                    className="font-sans text-[10px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-6 py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    {step === 0 ? "Devam →" : step === 1 ? "Son Adım →" : "Tamamlandı ✓"}
                                </button>
                            </motion.div>
                        )}

                        {/* Right: Summary sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 bg-card/40 border border-foreground/[0.05] rounded-xl p-6 backdrop-blur-sm">
                                <h3 className="font-serif text-xl text-foreground mb-5">Randevu Özeti</h3>

                                {selectedServices.length === 0 ? (
                                    <p className="font-sans text-xs text-foreground/25 italic">Henüz hizmet seçilmedi</p>
                                ) : (
                                    <div className="space-y-3 mb-6">
                                        {services
                                            .filter(s => selectedServices.includes(s.id))
                                            .map(s => (
                                                <div key={s.id} className="flex justify-between items-center">
                                                    <div>
                                                        <span className="font-sans text-[13px] text-foreground/70 block">{s.title}</span>
                                                        <span className="font-sans text-[10px] text-foreground/25 uppercase tracking-wider">{s.duration}</span>
                                                    </div>
                                                    <span className="font-serif text-sm text-primary">{s.price} TL</span>
                                                </div>
                                            ))}
                                    </div>
                                )}

                                {selectedDate && (
                                    <div className="border-t border-foreground/[0.05] pt-4 mb-4">
                                        <span className="section-label text-foreground/20 block mb-2">Tarih & Saat</span>
                                        <span className="font-sans text-sm text-foreground/60">
                                            {new Date(selectedDate).toLocaleDateString("tr-TR", { day: "numeric", month: "long", weekday: "long" })}
                                            {selectedTime && ` — ${selectedTime}`}
                                        </span>
                                    </div>
                                )}

                                {selectedServices.length > 0 && (
                                    <div className="border-t border-foreground/[0.05] pt-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-sans text-xs text-foreground/30 uppercase tracking-wider">Toplam Süre</span>
                                            <span className="font-sans text-sm text-foreground/50">{totalDuration} dk</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-sans text-xs text-foreground/30 uppercase tracking-wider">Toplam</span>
                                            <span className="font-serif text-2xl text-primary">{totalPrice} TL</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BookingCTA;
