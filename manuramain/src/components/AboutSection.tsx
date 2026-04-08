import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroCinematic from "@/assets/hero-cinematic.webp";

const AboutSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Skip parallax on touch devices — prevents jank and saves battery
    const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], isTouchDevice ? [0, 0] : [80, -80]);

    return (
        <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-10">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                {/* Image with parallax */}
                <motion.div style={{ y: imgY }} className="relative order-2 lg:order-1">
                    <div className="img-hover-zoom rounded-lg overflow-hidden">
                        <img
                            src={heroCinematic}
                            alt="Manura Barbershops"
                            loading="lazy"
                            className="w-full h-[50vh] md:h-[70vh] object-cover"
                            width={1920}
                            height={1080}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none rounded-lg" />
                    <div className="absolute bottom-6 left-6">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/30">
                            Kocaeli / İzmit
                        </span>
                    </div>
                    {/* Decorative border offset */}
                    <div className="hidden md:block absolute -right-4 -bottom-4 w-full h-full border border-primary/10 rounded-lg -z-10" />
                </motion.div>

                {/* Text */}
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5 mb-8"
                    >
                        <div className="w-10 h-px bg-primary/60" />
                        <span className="section-label">Hakkımızda</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="section-heading text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.08]"
                    >
                        Tutku üzerine kurulmuş,
                        <br />
                        <span className="italic text-primary">özenle</span> şekillendirilmiş.
                    </motion.h2>

                    {/* Pull quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="border-l-2 border-primary/30 pl-6 mb-10"
                    >
                        <p className="font-serif text-xl md:text-2xl italic text-foreground/60 leading-[1.6]">
                            "Own your aura — her erkeğin kendine özgü tarzını ve enerjisini ortaya çıkarmasına yardımcı oluyoruz."
                        </p>
                    </motion.blockquote>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="font-sans text-[13px] text-foreground/40 leading-[1.9] mb-6"
                    >
                        Manura Barbershops, erkek bakımında profesyonellik ve uzmanlığı bir araya getiriyor.
                        Her müşterimize özel yaklaşımımız ve detaylara verdiğimiz önemle, sadece bir saç kesimi
                        değil, kendinizi yeniden keşfettiğiniz bir deneyim sunuyoruz.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="font-sans text-[13px] text-foreground/40 leading-[1.9] mb-12"
                    >
                        Uzman ekibimiz, en son trendleri ve klasik teknikleri harmanlayarak size en uygun
                        görünümü yaratıyor.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="h-px bg-foreground/[0.06] mb-8" />
                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { label: "Yıllık Deneyim", value: "5+" },
                                { label: "Mutlu Müşteri", value: "3K+" },
                                { label: "Uzman Stilist", value: "6" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="font-serif text-3xl md:text-4xl text-primary font-light">{item.value}</div>
                                    <p className="section-label mt-2 text-foreground/25">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
