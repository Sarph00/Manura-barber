import logo from "@/assets/logo.webp";

const Footer = () => {
    return (
        <footer className="theme-dark bg-background text-foreground border-t border-foreground/[0.06]">
            {/* Main footer content */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Left: Logo + tagline */}
                    <div>
                        <img src={logo} alt="Manura" className="h-10 mb-4" />
                        <p className="font-sans text-xs text-foreground/25 tracking-[0.15em] uppercase">
                            Own your aura
                        </p>
                    </div>

                    {/* Center: Opening Hours */}
                    <div>
                        <h4 className="section-label text-foreground/40 mb-6">Çalışma Saatleri</h4>
                        <div className="font-sans text-[13px] text-foreground/50 space-y-2">
                            <div className="flex justify-between max-w-[240px]">
                                <span>Pazartesi</span>
                                <span>09:00 – 21:00</span>
                            </div>
                            <div className="flex justify-between max-w-[240px]">
                                <span>Salı – Pazar</span>
                                <span>09:00 – 19:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact + Social */}
                    <div className="md:text-right">
                        <h4 className="section-label text-foreground/40 mb-6">İletişim</h4>
                        <div className="font-sans text-[13px] text-foreground/50 space-y-2 mb-8">
                            <p>Yahya Kaptan Mh. No: 54</p>
                            <p>6.Giriş Kat: 2 Daire: 50 Mars Avm</p>
                            <p>İzmit Kocaeli</p>
                            <p className="text-foreground/40">manurabarberinfo@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-3 md:justify-end">
                            <a href="https://www.instagram.com/manurabarber/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-foreground/[0.08] rounded flex items-center justify-center hover:border-primary/40 transition-colors duration-300">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/35">
                                    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-foreground/[0.08] rounded flex items-center justify-center hover:border-primary/40 transition-colors duration-300">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/35">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.34-6.33V8.87a8.28 8.28 0 0 0 4.84 1.55V7.04a4.84 4.84 0 0 1-1.08-.35z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-foreground/[0.04] py-6 px-6 md:px-10">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/15">
                        © {new Date().getFullYear()} Manura Barbershops. Tüm hakları saklıdır.
                    </p>
                    <a href="#" className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/15 hover:text-foreground/30 transition-colors">
                        Gizlilik Politikası
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
