'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function GalleryPage() {
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Background Video */}
            <div className="fixed inset-0 z-0 text-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Visual Journey</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">Gallery</h1>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                        "A journey through the flavors and ambiance of Copperleaf."
                    </p>
                </motion.div>

                <div className="flex flex-col items-center justify-center py-20 border border-white/10 bg-white/5 backdrop-blur-3xl rounded-sm">
                    <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-8"></div>
                    <p className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs">Coming Soon</p>
                    <p className="text-gray-400 mt-4 font-light">We are presently curating our finest moments for you.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
