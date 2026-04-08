import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";
import MagneticElement from "./MagneticElement";

const navLinks = [
    { label: "Hizmetler", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "Hakkımızda", href: "#about" },
    { label: "İletişim", href: "#contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isBookingPage = location.pathname === "/randevu";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`theme-dark text-foreground fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-background border-b ${scrolled ? "border-foreground/[0.06]" : "border-transparent"}`}
        >
            <div className="px-6 md:px-10 h-20 flex items-center justify-center lg:justify-between relative">
                {/* Mobile: CTA + Hamburger (LEFT on mobile) */}
                <div className="flex lg:hidden items-center gap-3 absolute left-6 md:left-10">
                    {isBookingPage ? (
                        <a
                            href="/"
                            className="text-[10px] font-sans uppercase tracking-[0.15em] border border-foreground/15 text-foreground px-4 py-2 rounded-full"
                        >
                            Ana Sayfa
                        </a>
                    ) : (
                        <a
                            href="/randevu"
                            className="text-[10px] font-sans uppercase tracking-[0.15em] bg-primary text-primary-foreground px-4 py-2 rounded-full"
                        >
                            Randevu
                        </a>
                    )}
                    <button className="text-foreground z-10 w-9 h-9 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Left: Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    {isBookingPage ? (
                        <MagneticElement>
                            <a
                                href="/"
                                className="btn-magnetic text-[11px] font-sans uppercase tracking-[0.18em] border border-foreground/15 text-foreground px-6 py-2.5 rounded-full hover:border-foreground/40 transition-all duration-300 flex items-center gap-2"
                            >
                                <span className="text-sm">←</span>
                                Ana Sayfa
                            </a>
                        </MagneticElement>
                    ) : (
                        <MagneticElement>
                            <a
                                href="/randevu"
                                className="btn-magnetic text-[11px] font-sans uppercase tracking-[0.18em] bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                            >
                                Randevu Al
                                <span className="text-sm">→</span>
                            </a>
                        </MagneticElement>
                    )}
                    <MagneticElement>
                        <a
                            href="tel:+905335071966"
                            className="btn-magnetic text-[11px] font-sans uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground px-5 py-2.5 border border-foreground/15 rounded-full hover:border-foreground/40 transition-all duration-300 flex items-center gap-2"
                        >
                            <Phone size={12} />
                            Bizi Ara
                        </a>
                    </MagneticElement>
                </div>

                {/* Center: Logo */}
                <a href="#" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <img src={logo} alt="Manura Barbershops" className="h-11 md:h-12" />
                </a>

                {/* Right: Social icons (Desktop only) */}
                <div className="hidden lg:flex items-center gap-2">
                    <a
                        href="https://www.instagram.com/manurabarber/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-foreground/10 rounded flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/50">
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                    <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-foreground/10 rounded flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/50">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.34-6.33V8.87a8.28 8.28 0 0 0 4.84 1.55V7.04a4.84 4.84 0 0 1-1.08-.35z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Desktop: Navigation bar below header */}
            <nav className={`hidden lg:flex items-center justify-center gap-12 py-3 border-t border-foreground/[0.04] transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="link-underline text-[11px] font-sans uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* Mobile fullscreen nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center overflow-y-auto"
                    >
                        {/* Close button — top right of menu */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center text-foreground hover:opacity-60 transition-all duration-300"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </motion.button>

                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-serif text-4xl md:text-5xl font-light text-foreground hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="flex flex-col gap-3 mt-12 items-center"
                        >
                            <a
                                href="tel:+905335071966"
                                className="text-[11px] uppercase tracking-[0.18em] border border-foreground/20 px-8 py-3.5 text-foreground rounded-full flex items-center gap-2"
                            >
                                <Phone size={13} />
                                Bizi Ara
                            </a>
                            {isBookingPage ? (
                                <a
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[11px] uppercase tracking-[0.18em] border border-foreground/20 text-foreground px-8 py-3.5 rounded-full flex items-center gap-2"
                                >
                                    <span className="text-xl leading-none -mt-1">←</span> Ana Sayfaya Dön
                                </a>
                            ) : (
                                <a
                                    href="/randevu"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-3.5 rounded-full flex items-center gap-2"
                                >
                                    Randevu Al <span>→</span>
                                </a>
                            )}
                        </motion.div>

                        {/* Mobile social icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 mt-10"
                        >
                            <a href="https://www.instagram.com/manurabarber/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-foreground/10 rounded flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/40">
                                    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-foreground/10 rounded flex items-center justify-center">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/40">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.34-6.33V8.87a8.28 8.28 0 0 0 4.84 1.55V7.04a4.84 4.84 0 0 1-1.08-.35z" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
