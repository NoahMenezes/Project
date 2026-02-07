'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumModal from '@/components/PremiumModal';

const menuOptions = [
    { id: 'food', label: 'Food Menu', video: '/fire-mastery.mp4', link: 'https://drive.google.com/file/d/1CSwvym-7QbmMEA7fJNbLKw5j4Vh3WGoH/preview' },
    { id: 'bar', label: 'Bar Menu', video: '/edible-art.mp4', link: 'https://drive.google.com/file/d/1LI3i82jZe3FsG_L_gSEOr9_bOhMW9q9z/preview' },
    { id: 'delivery', label: 'Delivery & Menu', video: '/sourced-daily.mp4', link: 'https://docs.google.com/forms/d/e/1FAIpQLSe4R0PqqxkFAiQx9YPOjTFu6uOITvoBusKe34kY6JmKk3JvLQ/viewform?embedded=true' }
];

export default function MenuPage() {
    const [activeOption, setActiveOption] = useState(menuOptions[0]);
    const [showModal, setShowModal] = useState(false);
    const [loadCount, setLoadCount] = useState(0);

    const handleTabChange = (option: typeof menuOptions[0]) => {
        setActiveOption(option);
        setLoadCount(0); // Reset load count for fresh iframe load
    };

    const handleIframeLoad = () => {
        // Only trigger if we are on the delivery menu (the only Google Form)
        if (activeOption.id === 'delivery') {
            setLoadCount(prev => prev + 1);
            if (loadCount > 0) {
                setShowModal(true);
            }
        }
    };

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
                            className="w-full h-full object-cover opacity-70"
                        >
                            <source src={activeOption.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/30"></div>
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
                            onClick={() => handleTabChange(option)}
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
                    className="w-full max-w-5xl md:h-[900px] h-[700px] border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-20 overflow-hidden shadow-2xl"
                >
                    <iframe
                        src={activeOption.link}
                        onLoad={handleIframeLoad}
                        className="w-full h-full border-none"
                        title={activeOption.label}
                        allow="autoplay"
                    >
                        Loading…
                    </iframe>
                </motion.div>

            </div>

            <Footer />

            <PremiumModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Request Successful"
                message="Your request for the latest menu has been received. We will send the details to your provided WhatsApp number shortly."
            />
        </main>
    );
}
