import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <section id="contact" className="theme-dark bg-background text-foreground py-28 md:py-40 px-6 md:px-10 border-t border-foreground/[0.06]">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-5 mb-8"
                        >
                            <div className="w-10 h-px bg-primary/60" />
                            <span className="section-label">İletişim</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="section-heading text-4xl md:text-5xl lg:text-6xl mb-14 leading-[1.08]"
                        >
                            Bize <span className="italic text-primary">ulaşın</span>
                        </motion.h2>

                        <div className="space-y-8">
                            {[
                                { label: "Adres", value: "Yahya Kaptan Mh. No: 54 6.Giriş Kat: 2 Daire: 50 Mars Avm İzmit Kocaeli" },
                                { label: "Telefon", value: "+90 533 507 19 66" },
                                { label: "E-posta", value: "manurabarberinfo@gmail.com" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="border-l-2 border-primary/15 pl-6"
                                >
                                    <span className="section-label text-foreground/25 block mb-2">
                                        {item.label}
                                    </span>
                                    <span className="font-sans text-sm text-foreground/70">
                                        {item.value}
                                    </span>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="border-l-2 border-primary/15 pl-6"
                            >
                                <span className="section-label text-foreground/25 block mb-3">
                                    Çalışma Saatleri
                                </span>
                                <div className="font-sans text-sm text-foreground/70 space-y-1.5">
                                    <div className="flex justify-between max-w-xs">
                                        <span>Pazartesi</span>
                                        <span className="text-foreground/50">09:00 – 21:00</span>
                                    </div>
                                    <div className="flex justify-between max-w-xs">
                                        <span>Salı – Pazar</span>
                                        <span className="text-foreground/50">09:00 – 19:00</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-6 bg-card/40 border border-foreground/[0.05] rounded-xl p-8 md:p-10 backdrop-blur-sm"
                    >
                        <h3 className="font-serif text-2xl text-foreground mb-1">Mesaj Gönderin</h3>
                        <p className="font-sans text-xs text-foreground/30 mb-8">Sizinle en kısa sürede iletişime geçeceğiz.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group">
                                <label className="section-label text-foreground/25 block mb-2.5">Ad</label>
                                <input
                                    type="text"
                                    className="w-full bg-background/60 border border-foreground/[0.08] rounded-lg px-4 py-3.5 text-sm font-sans text-foreground placeholder:text-foreground/15 focus:outline-none focus:border-primary/40 transition-colors duration-300"
                                    placeholder="Adınız"
                                />
                            </div>
                            <div className="group">
                                <label className="section-label text-foreground/25 block mb-2.5">Soyad</label>
                                <input
                                    type="text"
                                    className="w-full bg-background/60 border border-foreground/[0.08] rounded-lg px-4 py-3.5 text-sm font-sans text-foreground placeholder:text-foreground/15 focus:outline-none focus:border-primary/40 transition-colors duration-300"
                                    placeholder="Soyadınız"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="section-label text-foreground/25 block mb-2.5">E-posta</label>
                            <input
                                type="email"
                                className="w-full bg-background/60 border border-foreground/[0.08] rounded-lg px-4 py-3.5 text-sm font-sans text-foreground placeholder:text-foreground/15 focus:outline-none focus:border-primary/40 transition-colors duration-300"
                                placeholder="E-posta adresiniz"
                            />
                        </div>

                        <div>
                            <label className="section-label text-foreground/25 block mb-2.5">Mesaj</label>
                            <textarea
                                rows={4}
                                className="w-full bg-background/60 border border-foreground/[0.08] rounded-lg px-4 py-3.5 text-sm font-sans text-foreground placeholder:text-foreground/15 focus:outline-none focus:border-primary/40 transition-colors duration-300 resize-none"
                                placeholder="Mesajınız..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-magnetic w-full font-sans text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground py-4 rounded-full hover:bg-primary/90 transition-all duration-300"
                        >
                            Gönder →
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
