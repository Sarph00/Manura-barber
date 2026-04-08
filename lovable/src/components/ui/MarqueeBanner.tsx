const MarqueeBanner = () => {
    const items = [
        "Saç Kesimi", "Sakal Bakımı", "Saç Renklendirme", "Premium Bakım",
        "Stilist", "Randevu", "Own Your Aura", "Manura",
    ];

    return (
        <div className="py-5 overflow-hidden border-y border-foreground/10 bg-secondary/30">
            <div className="animate-marquee flex whitespace-nowrap">
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="font-sans text-[11px] uppercase tracking-[0.3em] text-foreground/30 mx-6 flex items-center gap-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MarqueeBanner;
