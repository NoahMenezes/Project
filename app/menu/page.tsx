'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const menuOptions = [
    { id: 'food', label: 'Food', video: '/fire-mastery.mp4' },
    { id: 'bar', label: 'Bar', video: '/edible-art.mp4' },
    { id: 'delivery', label: 'Delivery', video: '/sourced-daily.mp4' },
    { id: 'takeaway', label: 'Takeaway', video: '/background-video.mp4' }
];

export default function MenuPage() {
    const [activeOption, setActiveOption] = useState(menuOptions[0]);

    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Dynamic Background Video */}
            <div className="fixed inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeOption.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-50"
                        >
                            <source src={activeOption.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/50"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-grow pt-40 px-6 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-12 tracking-tight">Our Menu</h1>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                    {menuOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setActiveOption(option)}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 ${activeOption.id === option.id
                                ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.5)]'
                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                {/* Menu Content */}
                <motion.div
                    key={activeOption.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-5xl md:h-[800px] h-[600px] border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-20 overflow-hidden"
                >
                    {activeOption.id === 'delivery' ? (
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSe4R0PqqxkFAiQx9YPOjTFu6uOITvoBusKe34kY6JmKk3JvLQ/viewform?embedded=true"
                            className="w-full h-full border-none"
                            title="Delivery Form"
                        >
                            Loading…
                        </iframe>
                    ) : (
                        <div className="text-center text-gray-400">
                            <p className="text-xl font-serif italic mb-2">{activeOption.label} Menu</p>
                            <p className="text-sm tracking-widest uppercase opacity-50">Coming Soon</p>
                        </div>
                    )}
                </motion.div>

            </div>

            <Footer />
        </main>
    );
}
