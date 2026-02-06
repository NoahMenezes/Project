'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function PricingTiers() {
    return (
        <section className="relative py-32 bg-zinc-900 px-6 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
                >
                    {/* Using one of the available videos as a background for the section */}
                    <source src="/sourced-daily.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-sm font-medium text-amber-500 mb-4 tracking-[0.2em] uppercase">{restaurantData.reservations.subtitle}</h3>
                    <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight">{restaurantData.reservations.title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {restaurantData.reservations.options.map((tier, idx) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative bg-black/40 backdrop-blur-md border border-white/10 p-12 hover:border-amber-500/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/5 transition-all duration-500"></div>

                            <h3 className="text-xl font-medium text-white mb-4 tracking-wide uppercase relative z-10">{tier.name}</h3>
                            <p className="text-4xl font-serif text-amber-500 mb-8 italic relative z-10">{tier.price}</p>

                            <div className="w-10 h-[1px] bg-white/20 mb-8 relative z-10"></div>

                            <ul className="space-y-4 mb-12 flex-grow relative z-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="text-gray-300 text-sm tracking-wide font-light">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="relative z-10 w-full py-4 border border-white/20 bg-transparent hover:bg-white text-white hover:text-black font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300">
                                Reserve Table
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Lumière Text Background Effect */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none select-none">
                    <h1 className="text-[15rem] font-serif font-bold text-white tracking-tighter leading-none whitespace-nowrap">LUMIÈRE</h1>
                </div>
            </div>
        </section>
    );
}
