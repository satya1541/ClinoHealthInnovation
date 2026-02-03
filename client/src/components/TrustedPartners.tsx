import { motion } from "framer-motion";

const partners = [
    { name: "Meity", logo: "/partners/meity.png" },
    { name: "SIDBI", logo: "/partners/sidbi.png" },
    { name: "BCKIC", logo: "/partners/bckic.png" },

    { name: "Startup India", logo: "/partners/startup-india.webp" },
    { name: "Startup Odisha", logo: "/partners/startup-odisha.webp" },
    { name: "KIIT TBI", logo: "/partners/kiit-tbi.png" },

    { name: "MSME", logo: "/partners/msme.webp" },
    { name: "AIC CV", logo: "/partners/aic-cv.webp" },
    { name: "TiE Bhubaneswar", logo: "/partners/tie-bhubaneswar.webp" },
];

const Planet = ({ item, angle, reverse, duration }: { item: any, angle: number, reverse: boolean, duration: number }) => {
    // Calculate position
    const rad = (angle * Math.PI) / 180;
    const x = 50 + 50 * Math.cos(rad);
    const y = 50 + 50 * Math.sin(rad);

    return (
        <div
            className="absolute w-16 h-16 pointer-events-auto"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)' // Centering needs to be handled carefully if we rotate parent, but here parent is just the track
            }}
        >
            <motion.div
                className="w-full h-full"
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            >
                <motion.div
                    className="w-full h-full p-3 bg-white rounded-full shadow-md border border-border/50 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                >
                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </motion.div>
            </motion.div>
        </div>
    );
};

const Orbit = ({ radius, duration, reverse = false, items }: { radius: number, duration: number, reverse?: boolean, items: any[] }) => {
    return (
        <motion.div
            className="absolute rounded-full border-[2px] border-dashed border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] pointer-events-none"
            style={{ width: radius * 2, height: radius * 2 }}
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
            {/* Inner decorative ring for depth */}
            <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-[0.98]" />

            {items.map((item, idx) => {
                const angle = (360 / items.length) * idx;
                return (
                    <Planet
                        key={item.name}
                        item={item}
                        angle={angle}
                        reverse={reverse}
                        duration={duration}
                    />
                );
            })}
        </motion.div>
    );
};

export default function TrustedPartners() {
    // Distribute partners across 3 orbits
    const innerOrbit = partners.slice(0, 3);
    const middleOrbit = partners.slice(3, 6);
    const outerOrbit = partners.slice(6, 9);

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                    Recognized By
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Honored to be recognized by the ecosystem's best.
                </p>
            </div>

            <div className="container mx-auto px-4 relative flex flex-col items-center justify-center min-h-[700px]">

                {/* Center Solar System */}
                <div className="relative flex items-center justify-center w-[800px] h-[800px] scale-[0.55] md:scale-75 lg:scale-100">

                    {/* Central Logo */}
                    <div className="absolute z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-primary/10 ring-4 ring-primary/5">
                        <img src="/logo.png" alt="Clino" className="w-24 h-auto object-contain" />
                    </div>

                    {/* Orbits */}
                    {/* Orbit 1 (Inner) */}
                    <Orbit radius={180} duration={40} items={innerOrbit} />

                    {/* Orbit 2 (Middle) */}
                    <Orbit radius={280} duration={60} reverse items={middleOrbit} />

                    {/* Orbit 3 (Outer) */}
                    <Orbit radius={380} duration={80} items={outerOrbit} />

                    {/* Decorative Background Circles with Pulse */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-blue-500/5 bg-blue-500/[0.02] pointer-events-none"
                        style={{ width: 800, height: 800 }}
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute rounded-full border border-blue-500/5 pointer-events-none"
                        style={{ width: 600, height: 600 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </section>
    );
}
