'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function PricingTiers() {
    return (
        <section className="py-32 bg-zinc-900 px-6">
            <div className="max-w-7xl mx-auto">
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
                            className="bg-black border border-white/5 p-12 hover:border-amber-500/30 transition-colors duration-300 flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl font-medium text-white mb-4 tracking-wide uppercase">{tier.name}</h3>
                            <p className="text-4xl font-serif text-amber-500 mb-8 italic">{tier.price}</p>

                            <div className="w-10 h-[1px] bg-white/20 mb-8"></div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="text-gray-400 text-sm tracking-wide">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 border border-white/20 hover:bg-white text-white hover:text-black font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300">
                                Reserve Table
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
