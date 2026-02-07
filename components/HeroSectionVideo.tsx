'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function HeroSectionVideo() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
                <source src={restaurantData.hero.videoPath} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

            {/* Main Content - Centered */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <p className="text-sm md:text-base text-amber-200 tracking-[0.3em] uppercase mb-6 font-medium">
                        {restaurantData.hero.badge}
                    </p>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-8">
                        {restaurantData.hero.title}
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-200 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        {restaurantData.hero.subtitle}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-sm">
                            {restaurantData.hero.cta.primary}
                        </button>
                        <button className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-sm backdrop-blur-sm">
                            {restaurantData.hero.cta.secondary}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Elegant Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </div>
        </section>
    );
}
