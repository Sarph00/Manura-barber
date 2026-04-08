import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogAnatomikKesim = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: true },
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Banner */}
            <motion.section
                className="theme-dark bg-background text-foreground py-20 md:py-32 px-6 md:px-10"
                {...fadeInUp}
            >
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-10 h-px bg-primary/60" />
                        <span className="section-label">Berber Rehberi</span>
                    </div>
                    <h1 className="section-heading text-4xl md:text-6xl lg:text-7xl">
                        Anatomik Kesim{" "}
                        <span className="italic text-primary">Nedir?</span>
                    </h1>
                    <p className="font-sans text-[13px] md:text-sm text-foreground/40 leading-[1.9] mt-6 max-w-2xl">
                        Yüz şeklinize özel tasarlanan profesyonel saç kesim tekniği hakkında her şey
                    </p>
                </div>
            </motion.section>

            {/* Content Section */}
            <main className="flex-grow py-28 md:py-40 px-6 md:px-10">
                <div className="max-w-3xl mx-auto">
                    <motion.article
                        className="prose prose-invert max-w-none"
                        {...fadeInUp}
                    >
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-8">
                            Anatomik kesim, son yıllarda berber dünyasında devrim yaratmış bir saç kesim tekniğidir. Yahyakaptan'da Manura Barber olarak, bu innovative tekniği müşterilerimize sunarken, birçok kişinin bu konuda bilgi sahibi olmadığını görüyoruz. Bu rehberde, anatomik kesimin ne olduğunu, nasıl çalıştığını ve neden erkekler için ideal bir çözüm olduğunu açıklayacağız.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Anatomik Kesim Nedir?
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Anatomik kesim, yüz şekli, kafa yapısı ve vücut hattınız dikkate alınarak tasarlanan özel bir saç kesim tekniğidir. Geleneksel berber kesimlerinde genelde standart bir şekil uygulanırken, anatomik kesim her bireye kişisel bir yaklaşım sunmaktadır.
                        </p>

                        <blockquote className="border-l-2 border-primary/30 pl-6 my-8 text-foreground/50">
                            <p className="font-sans text-[13px] md:text-[15px] leading-[1.9] italic">
                                "Anatomik kesim, sadece saçınızı kesmek değil, yüz hatlarınızı en iyi şekilde vurgulamaktır."
                            </p>
                        </blockquote>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Yüz Şekillerine Göre Anatomik Kesim
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Her yüz şekli farklıdır ve her biri farklı kesim tekniklerine ihtiyaç duyar:
                        </p>

                        <ul className="list-disc list-inside font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] space-y-3 mb-6">
                            <li><strong>Yuvarlak Yüzler:</strong> Açılı çizgiler ve kontrast oluşturan kesimler tercih edilir</li>
                            <li><strong>Kare Yüzler:</strong> Yumuşak geçişler yüzü daha uyumlu hale getirir</li>
                            <li><strong>Dikdörtgen Yüzler:</strong> Yan taraflara hacim veren kesimler dengeleme sağlar</li>
                            <li><strong>Elmas Şekilli Yüzler:</strong> Alın ve çeneyi dengeleyen kesimler ideal sonuç verir</li>
                        </ul>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Anatomik Kesimin Avantajları
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Anatomik kesim seçtiğinizde, aşağıdaki avantajlardan faydalanırsınız:
                        </p>

                        <ul className="list-disc list-inside font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] space-y-3 mb-8">
                            <li>Yüz şeklinizi en iyi vurgulayan stil elde edersiniz</li>
                            <li>Uzun vadede bakımı daha kolay bir saç kesimi alırsınız</li>
                            <li>Kişisel tarzınıza ve yüz yapınıza uygun bir görünüm kazanırsınız</li>
                            <li>Özgüveniniz ve dış görünüş memnuniyetiniz artar</li>
                            <li>Profesyonel bir görünüm elde edersiniz</li>
                        </ul>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Manura Barber'da Anatomik Kesim
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Yahyakaptan'da bulunan Manura Barber, anatomik kesim konusunda Kocaeli bölgesinin en deneyimli berberlerinden biridir. Uzman stilistlerimiz, her müşterinin yüz şekli ve tercihleri doğrultusunda özel bir kesim tasarımı yapar.
                        </p>

                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Bize geldiğinizde, yüz şekliniz, saç tipi, yaşam tarzınız ve kişisel tercihleri göz önüne alarak size özel bir anatomik kesim uygularız. Mars İş Merkezi'nde bulunan salonumuzda, modern teknikler ve geleneksel berberlik sanatının mükemmel birleşimini bulacaksınız.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Sık Sorulan Sorular
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-3">
                            <strong>Anatomik kesim daha pahalı mı?</strong>
                        </p>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Evet, biraz daha fazla fiyatlı olabilir çünkü daha deneyimli bir berber tarafından yapılır ve daha fazla özen gerektirir. Ancak uzun vadede bakım masraflarını azaltır.
                        </p>

                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-3">
                            <strong>Ne sıklıkla anatomik kesim yaptırmalıyım?</strong>
                        </p>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Şekli koruması için 3-4 haftada bir düzenli kesim yaptırmanız önerilir. Bu şekilde stiliniz her zaman pik yapında kalır.
                        </p>

                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-3">
                            <strong>Tüm saç tiplerine uygun mudur?</strong>
                        </p>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-8">
                            Evet! Düz, kıvırcık, çelik saç olup olmadığına bakılmaksızın, anatomik kesim tüm saç tiplerine uyarlanabilir.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Hemen Randevu Alın
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9]">
                            Manura Barber'da anatomik kesim deneyimini yaşamak için hemen randevu alabilirsiniz. Yahyakaptan, Mars İş Merkezi'nde sizi bekliyoruz.
                        </p>
                    </motion.article>

                    {/* Related Blog Post Link */}
                    <motion.div
                        className="mt-16 pt-12 border-t border-foreground/10"
                        {...fadeInUp}
                    >
                        <p className="font-sans text-[13px] text-foreground/40 mb-4">İlgili Rehber:</p>
                        <a
                            href="/blog/sakal-bakimi"
                            className="inline-block text-primary hover:text-primary/80 transition font-sans text-[13px] underline"
                        >
                            → Sakal Bakımı ve Tıraş Teknikleri rehberimizi okuyun
                        </a>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-8 flex gap-4"
                        {...fadeInUp}
                    >
                        <a
                            href="https://maps.app.goo.gl/Jz4yPd98kXFp1h1W7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-primary text-background font-medium text-sm rounded-lg hover:opacity-90 transition"
                        >
                            Harita'da Görüntüle
                        </a>
                        <a
                            href="https://wa.me/905335071966"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-primary/30 text-foreground font-medium text-sm rounded-lg hover:border-primary/60 transition"
                        >
                            WhatsApp'tan Randevu
                        </a>
                    </motion.div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BlogAnatomikKesim;
