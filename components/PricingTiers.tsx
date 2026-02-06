'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function PricingTiers() {
    return (
        <section className="py-40 bg-black px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-sm font-bold font-space text-blue-500 mb-4 tracking-[0.3em] uppercase">{restaurantData.reservations.subtitle}</h3>
                    <h2 className="text-6xl font-bold text-white tracking-tight">{restaurantData.reservations.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {restaurantData.reservations.options.map((tier, idx) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2 font-rajdhani">{tier.name}</h3>
                            <p className="text-5xl font-bold text-white mb-8 font-space">{tier.price}</p>
                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-4 bg-white text-black font-bold font-space text-sm tracking-widest rounded-lg hover:shadow-[0_0_20px_white] transition">
                                BOOK TABLE
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
