import { useRef, useEffect } from "react";

const items = [
    "Saç Kesimi", "Sakal Bakımı", "Saç Renklendirme", "Premium Bakım",
    "Own Your Aura", "Manura", "Stilist", "Randevu",
];

// Create a seamless infinite loop by using 2 identical strips side-by-side
// and resetting position with CSS animation translate -50%
const MarqueeBanner = () => {
    const stripRef = useRef<HTMLDivElement>(null);

    // Ensure seamless loop: duplicate the items enough to fill the screen
    const repeated = [...items, ...items, ...items, ...items];

    return (
        <div className="py-6 overflow-hidden border-y border-foreground/[0.06] bg-primary/[0.04]">
            <div className="flex">
                {/* Two identical strips for seamless infinite scroll */}
                <div ref={stripRef} className="flex shrink-0 animate-marquee-seamless">
                    {repeated.map((item, i) => (
                        <span
                            key={`a-${i}`}
                            className="font-sans text-[12px] font-medium uppercase tracking-[0.35em] text-foreground/25 mx-8 flex items-center gap-8 whitespace-nowrap"
                        >
                            <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex shrink-0 animate-marquee-seamless">
                    {repeated.map((item, i) => (
                        <span
                            key={`b-${i}`}
                            className="font-sans text-[12px] font-medium uppercase tracking-[0.35em] text-foreground/25 mx-8 flex items-center gap-8 whitespace-nowrap"
                        >
                            <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeBanner;
