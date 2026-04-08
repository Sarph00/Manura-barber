import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroBg from "@/assets/hero-cinematic.webp";
import MagneticElement from "./MagneticElement";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    let start = 0;
                    const duration = 2200;
                    const step = (timestamp: number) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, started]);

    return (
        <div ref={ref}>
            <span className="font-serif text-5xl md:text-6xl font-light text-primary tabular-nums">
                {count}{suffix}
            </span>
        </div>
    );
};

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Detect touch/mobile devices — skip heavy effects for performance
    const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });
    // Disable parallax on touch devices to prevent jank
    const y = useTransform(scrollYProgress, [0, 1], isTouchDevice ? [0, 0] : [0, 250]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], isTouchDevice ? [1, 1] : [1, 1.15]);

    // Cursor spotlight effect — desktop only
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
    useEffect(() => {
        if (isTouchDevice) return;
        const handleMouse = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [isTouchDevice]);

    return (
        <section ref={containerRef} className="theme-dark text-foreground relative h-screen overflow-hidden bg-background">
            {/* Cursor spotlight */}
            <div
                className="pointer-events-none fixed inset-0 z-[5] opacity-[0.07] transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 40%)`,
                }}
            />

            {/* Parallax Background */}
            <motion.div style={{ y, scale }} className="absolute inset-0 bg-black">
                <img
                    src={heroBg}
                    alt="Manura Barbershops"
                    className="w-full h-full object-cover opacity-20 grayscale sepia-[0.1]"
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            </motion.div>

            {/* Large background text — Amiro style */}
            <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none z-[1]">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.03 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="font-serif text-[18vw] font-light leading-none text-foreground -mr-[2vw] -mb-[3vw] select-none"
                >
                    manura
                </motion.span>
            </div>

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center">
                <div className="px-6 md:px-10 w-full max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left text */}
                        <div className="lg:col-span-7 xl:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center gap-5 mb-10"
                            >
                                <div className="w-14 h-px bg-primary/60" />
                                <span className="section-label">
                                    Manura Barbershops — Est. 2020
                                </span>
                            </motion.div>

                            <div className="overflow-hidden mb-3">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="hero-heading font-serif text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-light leading-[1.02] text-foreground"
                                >
                                    Tarzınızı keşfedin,
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden mb-8">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-serif text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-light leading-[1.02]"
                                >
                                    <span className="italic text-primary">auranızı</span>{" "}
                                    <span className="text-foreground">yaşayın.</span>
                                </motion.h1>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="font-sans text-sm md:text-[15px] text-foreground/45 max-w-lg leading-[1.8] mb-12"
                            >
                                Uzman stilistlerimizle farkı yaşayın. Her kesim bir sanat eseri,
                                her ziyaret kendinizi yeniden keşfettiğiniz bir deneyim.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="flex flex-wrap gap-4"
                            >
                                <MagneticElement>
                                    <a
                                        href="https://rande.vu/manura-barber"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-magnetic font-sans text-[11px] uppercase tracking-[0.18em] bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-400 flex items-center gap-3"
                                    >
                                        Randevu Al
                                        <span className="text-sm">→</span>
                                    </a>
                                </MagneticElement>
                                <MagneticElement>
                                    <a
                                        href="#services"
                                        className="btn-magnetic font-sans text-[11px] uppercase tracking-[0.18em] border border-foreground/20 text-foreground/80 px-8 py-4 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-400 flex items-center gap-3"
                                    >
                                        Hizmetlerimiz
                                        <span className="text-sm">→</span>
                                    </a>
                                </MagneticElement>
                            </motion.div>
                        </div>

                        {/* Right stats */}
                        <div className="lg:col-span-5 xl:col-span-4 hidden lg:flex flex-col items-end gap-8">
                            {[
                                { value: 3000, suffix: "+", label: "Mutlu Müşteri" },
                                { value: 5, suffix: "+", label: "Yıl Deneyim" },
                                { value: 6, suffix: "", label: "Uzman Stilist" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 1 + i * 0.15 }}
                                    className="flex items-center gap-5"
                                >
                                    <div className="text-right">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                        <p className="section-label mt-2">
                                            {stat.label}
                                        </p>
                                    </div>
                                    <div className="w-px h-16 bg-primary/25" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
            >
                <span className="section-label text-foreground/25">Keşfet</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
