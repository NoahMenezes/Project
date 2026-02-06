'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function CloseupGalleryVideo() {
    return (
        <div className="bg-black text-white relative z-20">
            {/* Main Showcase Section with Unified Video Background */}
            <section className="relative py-40">
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
                        {/* Using fire-mastery for the entire section including header */}
                        <source src="/fire-mastery.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Header integrated into the video section */}
                    <div className="text-center mb-40">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-xs font-bold text-amber-500 mb-6 tracking-[0.3em] uppercase drop-shadow-md">{restaurantData.showcase.heading.subtitle}</h3>
                            <p className="text-5xl md:text-7xl font-serif tracking-tight text-white max-w-4xl mx-auto leading-none drop-shadow-lg">
                                {restaurantData.showcase.heading.title} <span className="text-amber-500/80 italic block mt-2">{restaurantData.showcase.heading.highlight}</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Items */}
                    <div className="space-y-40">
                        {restaurantData.showcase.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col items-center text-center`}
                            >
                                <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tight mb-6 drop-shadow-lg">{item.title}</h2>
                                <p className="text-xl md:text-3xl text-gray-100 font-light leading-relaxed max-w-3xl drop-shadow-md">{item.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spotlight CTA Section with Video Background */}
            <section className="relative py-60 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
                        {/* Using edible-art for the final CTA */}
                        <source src="/edible-art.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl mx-auto text-center px-6"
                >
                    <h2 className="text-6xl md:text-9xl font-serif text-white mb-16 tracking-tight leading-[0.9] drop-shadow-2xl">{restaurantData.showcase.cta.title}</h2>
                    <button className="px-16 py-6 bg-white hover:bg-amber-50 text-black text-sm font-bold tracking-[0.2em] uppercase transition duration-300 shadow-2xl">
                        {restaurantData.showcase.cta.button}
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
