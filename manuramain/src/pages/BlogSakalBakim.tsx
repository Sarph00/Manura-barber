import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogSakalBakim = () => {
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
                        Sakal Bakımı ve{" "}
                        <span className="italic text-primary">Tıraş Teknikleri</span>
                    </h1>
                    <p className="font-sans text-[13px] md:text-sm text-foreground/40 leading-[1.9] mt-6 max-w-2xl">
                        Sağlıklı ve şık bir sakal için profesyonel bakım rehberi
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
                            Sakal, erkek güzelliğinin ve kişiliğin en önemli unsurlarından biridir. Ancak çoğu erkek, sakallarının nasıl bakılacağını ve profesyonel şekilde nasıl tıraş edileceğini bilmez. Manura Barber olarak, İzmit ve Kocaeli bölgesinde erkeklere sağlık, stil ve özgüven kazandırıyoruz. Bu rehberde, sakal bakımı ve profesyonel tıraş teknikleri hakkında bilmeniz gereken her şeyi öğreneceksiniz.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Sakal Neden Önemlidir?
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Sakal yalnızca estetik bir unsur değildir. Sağlıklı bir sakal, kişisel bakımınızın bir göstergesi ve kendinize olan güveninizi artırır. Aynı zamanda yüz şeklinizi define eder, yaşlanma izlerini gizleyebilir ve maskülin bir görünüm sağlar.
                        </p>

                        <blockquote className="border-l-2 border-primary/30 pl-6 my-8 text-foreground/50">
                            <p className="font-sans text-[13px] md:text-[15px] leading-[1.9] italic">
                                "İyi bakılmış bir sakal, bir erkeğin en iyi aksessuarıdır."
                            </p>
                        </blockquote>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Günlük Sakal Bakım Rutini
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Sağlıklı bir sakal için her gün yapmanız gereken adımlar:
                        </p>

                        <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mt-8 mb-4">
                            1. Temizlik
                        </h3>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Sakalınızı günde iki kez (sabah ve akşam) ılık su ve özel sakal şampuanı ile yıkayın. Düzenli saç şampuanı kullanmayın çünkü sakalı kuru hale getirir. Sakal şampuanları, sakal saçının yapısını ve yağını dikkate alarak formüle edilmiştir.
                        </p>

                        <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mt-8 mb-4">
                            2. Nemlendir
                        </h3>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Temizliğin hemen ardından, sakal balsamı veya sakal yağı kullanın. Bu, sakalınızı nemli ve yumuşak tutar, kaşıntı ve kuruluğu önler. Sakal yağları aynı zamanda koku ve stil sağlar.
                        </p>

                        <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mt-8 mb-4">
                            3. Tarı
                        </h3>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Geniş dişli bir sakal tarası kullanarak sakalınızı yönlendirilmiş şekilde tarayın. Bu, düzensiz saçları yönetmeye yardımcı olur ve sakalınızı şekil içinde tutar.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Profesyonel Tıraş Teknikleri
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Evde tıraş yaparsanız, doğru teknik kullanmak önemlidir. Ancak profesyonel bir berbere başvurmak daima daha güvenli ve etkilidir.
                        </p>

                        <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mt-8 mb-4">
                            Klasik Tıraş
                        </h3>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Sıcak su ile cilt ısıtıldığında, sakalın saçları yumuşar ve açılır. Tıraş kreması uygulandıktan sonra tıraş bıçağı saçın yönüne karşı hareket ederek tıraş edilir. Bu teknik, cilt irritasyonunu en aza indirir.
                        </p>

                        <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mt-8 mb-4">
                            Özür Tıraşı (Shaping)
                        </h3>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Bu teknik, sakalın çizgilerini ve kenarlarını net bir şekilde tanımlar. Çene, yanak ve boyun bölgesindeki sakallar hassas bir şekilde tıraş edilir, sakalın şekli ve stilini koruyarak.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Farklı Sakal Stilleri
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Sakal stiliniz, yüz şeklinize, kişiliğinize ve yaşam tarzınıza uygun olmalıdır:
                        </p>

                        <ul className="list-disc list-inside font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] space-y-3 mb-8">
                            <li><strong>Full Beard:</strong> Tam sakal, klasik ve maskulin görünüm sunar</li>
                            <li><strong>Goatee:</strong> Çene ve üst dudak sakalı, cesur ve modern bir tarz</li>
                            <li><strong>Van Dyke:</strong> Uzun bıyık ve çene sakalı, sahibinin dikkat çekici bir görünümü vardır</li>
                            <li><strong>Stubble:</strong> Tıraş sonrası 2-3 günlük sakal, rahatlık ve çekicilik sağlar</li>
                            <li><strong>French Fork:</strong> Çatallanmış çene sakalı, benzersiz ve katmanlı bir stil</li>
                        </ul>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Ne Zaman Profesyonal Berbere Gitmeli?
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Sakalınızın en iyi şekilde korunması için:
                        </p>

                        <ul className="list-disc list-inside font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] space-y-3 mb-8">
                            <li><strong>Her 1-2 hafta:</strong> Sakal çizgilerini tanımlamak ve şekil koruması için</li>
                            <li><strong>Her 3-4 haftada:</strong> Sakalın uzunluğunu ve kalınlığını kontrol etmek için</li>
                            <li><strong>Özel etkinlikler öncesinde:</strong> Tıraş ve şekillendirme için</li>
                        </ul>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Manura Barber'da Sakal Bakımı
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Yahyakaptan'da Manura Barber, sakal bakımı ve tıraş hizmetlerinde Kocaeli bölgesinin en deneyimli berberidir. Uzman berberlerin elimizde, sakalınız profesyonel şekilde bakılır ve stillendirilir.
                        </p>

                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Kaliteli tıraş aletleri, özel tıraş ürünleri ve yılların deneyimi ile, sakalınızı mükemmel hale getiririz. Mars İş Merkezi'nde bulunan salonumuzda, rahat bir ortamda profesyonel hizmet alacaksınız.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Sık Sorulan Sorular
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-3">
                            <strong>Sakal tıraşından sonra nasıl bakım yapmalıyım?</strong>
                        </p>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Tıraş sonrası, soğuk su ile yüzünüzü yıkayın ve yüz balsamı kullanın. Bu, cilt irritasyonını azaltır ve sakalın yeniden çıkışını rahatlatır.
                        </p>

                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-3">
                            <strong>Sakal kaşıntısını nasıl giderebilirim?</strong>
                        </p>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-6">
                            Kaşıntı genellikle sakalın kuruluğundan kaynaklanır. Sakal şampuanı, yağı ve balsamı düzenli olarak kullanın. Eğer sorun devam ederse, dermatolog ile görüşün.
                        </p>

                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-3">
                            <strong>Sakalıma ne sıklıkla boyanmalıyım?</strong>
                        </p>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9] mb-8">
                            Sakal boyası kullanırsanız, 3-4 haftada bir ya da kökleri görüldüğünde boyama yapılmalıdır. Doğal görünüm için profesyonel boyama önerilir.
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mt-12 mb-6">
                            Hemen Randevu Alın
                        </h2>
                        <p className="font-sans text-[13px] md:text-[15px] text-foreground/40 leading-[1.9]">
                            Manura Barber'da sakal bakımı ve tıraş deneyimini yaşamak için hemen randevu alabilirsiniz. Yahyakaptan, Mars İş Merkezi'nde sizi bekliyoruz.
                        </p>
                    </motion.article>

                    {/* Related Blog Post Link */}
                    <motion.div
                        className="mt-16 pt-12 border-t border-foreground/10"
                        {...fadeInUp}
                    >
                        <p className="font-sans text-[13px] text-foreground/40 mb-4">İlgili Rehber:</p>
                        <a
                            href="/blog/anatomik-kesim-nedir"
                            className="inline-block text-primary hover:text-primary/80 transition font-sans text-[13px] underline"
                        >
                            → Anatomik Kesim Nedir? rehberimizi okuyun
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

export default BlogSakalBakim;
