import { motion } from "framer-motion";
import serviceHaircut from "@/assets/service-haircut.webp";
import serviceBeard from "@/assets/service-beard.webp";
import serviceColor from "@/assets/service-color.webp";
import detailScissors from "@/assets/detail-scissors.webp";

const services = [
    {
        num: "01",
        title: "Erkek Saç Kesimi",
        description: "Modern ve klasik saç kesim modelleri. Yüz şeklinize ve kişiliğinize en uygun tarzı uzman stilistlerimizle keşfedin.",
        price: "350 TL",
        image: serviceHaircut,
    },
    {
        num: "02",
        title: "Sakal Bakımı",
        description: "Profesyonel sakal şekillendirme ve bakım. Detaylı düzeltme, sıcak havlu uygulaması ve özel bakım ürünleri.",
        price: "250 TL",
        image: serviceBeard,
    },
    {
        num: "03",
        title: "Saç Renklendirme",
        description: "Saç renginizi yenileme veya cesur bir değişiklik. Profesyonel ürünlerle zarar görmeden doğal sonuçlar.",
        price: "500 TL+",
        image: serviceColor,
    },
    {
        num: "04",
        title: "Premium Bakım Paketi",
        description: "Saç kesimi, sakal bakımı, yüz bakımı ve sıcak havlu uygulamasını kapsayan VIP deneyim.",
        price: "800 TL",
        image: detailScissors,
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-28 md:py-40 px-6 md:px-10">
            <div className="max-w-screen-2xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-5 mb-5"
                        >
                            <div className="w-10 h-px bg-primary/60" />
                            <span className="section-label">Hizmetler</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="section-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                        >
                            Uzmanlık{" "}
                            <span className="italic text-primary">alanlarımız</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-sm text-foreground/40 max-w-sm leading-[1.8]"
                    >
                        Her hizmetimiz, yılların deneyimi ve tutkusuyla şekillendirilmiş benzersiz bir deneyim sunar.
                    </motion.p>
                </div>

                {/* Service cards — editorial style */}
                <div className="space-y-px">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="group border-t border-foreground/[0.06] last:border-b"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-8 md:py-10">
                                {/* Number */}
                                <div className="md:col-span-1 hidden md:block">
                                    <span className="font-mono text-xs text-primary/40">{service.num}</span>
                                </div>

                                {/* Image */}
                                <div className="md:col-span-3 img-hover-zoom rounded-lg overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={`${service.title} - Manura Barber Yahyakaptan Kocaeli`}
                                        loading="lazy"
                                        className="w-full h-48 md:h-52 object-cover"
                                    />
                                </div>

                                {/* Title */}
                                <div className="md:col-span-3">
                                    <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-3">
                                    <p className="font-sans text-[13px] text-foreground/35 leading-[1.7]">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Price + CTA — on mobile: row with price left, button right */}
                                <div className="md:col-span-2 flex items-center justify-between md:flex-col md:items-end gap-3">
                                    <span className="font-serif text-2xl text-primary font-light">{service.price}</span>
                                    <a
                                        href="https://rande.vu/manura-barber"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-sans text-[10px] uppercase tracking-[0.18em] text-foreground/30 group-hover:text-primary transition-colors duration-400 flex items-center gap-2 py-3 px-1"
                                        aria-label={`${service.title} için randevu al`}
                                    >
                                        Randevu Al <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
