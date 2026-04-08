import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import detailTowel from "@/assets/detail-towel.webp";
import heroBg from "@/assets/hero-bg.webp";
import detailScissors from "@/assets/detail-scissors.webp";

const images = [
    { src: gallery1, alt: "Manura Barber salon iç mekanı Yahyakaptan", span: "col-span-2 row-span-2" },
    { src: detailTowel, alt: "Profesyonel sakal bakımı ve tıraş hizmeti", span: "col-span-1 row-span-1" },
    { src: gallery3, alt: "Anatomik kesim sonucu Kocaeli berber", span: "col-span-1 row-span-2" },
    { src: gallery2, alt: "Berber aletleri ve ekipmanları", span: "col-span-1 row-span-1" },
    { src: heroBg, alt: "Manura Barber berber salonu atmosferi", span: "col-span-2 row-span-1" },
    { src: detailScissors, alt: "Profesyonel berber makas ve tıraş aletleri", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
    return (
        <section id="gallery" className="theme-dark bg-background text-foreground py-28 md:py-40 px-6 md:px-10">
            <div className="max-w-screen-2xl mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5 mb-5"
                    >
                        <div className="w-10 h-px bg-primary/60" />
                        <span className="section-label">Galeri</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="section-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                    >
                        Salonumuzdan{" "}
                        <span className="italic text-primary">kareler</span>
                    </motion.h2>
                </div>

                {/* Masonry grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            className={`${img.span} img-hover-zoom rounded-lg overflow-hidden relative group`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="section-label text-foreground/60">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
