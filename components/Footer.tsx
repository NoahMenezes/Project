'use client';
import { restaurantData } from '@/data/restaurantData';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-24 px-6 relative z-20 border-t border-white/5 overflow-hidden">
            {/* Animated Background Shaders/Embers */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -left-1/4 w-full h-full bg-amber-900/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-red-900/10 blur-[120px] rounded-full"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,0),rgba(0,0,0,1))]" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-[0.2em] mb-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {restaurantData.footer.brand.name}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 mb-20 w-full max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500 mb-8 border-b border-amber-500/20 pb-2 inline-block">
                            {restaurantData.footer.address.title}
                        </h5>
                        <div className="text-white/90 font-light leading-relaxed space-y-2">
                            {restaurantData.footer.address.lines.map((line, i) => (
                                <p key={i} className="text-sm md:text-base hover:text-amber-400 transition-colors cursor-default">{line}</p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500 mb-8 border-b border-amber-500/20 pb-2 inline-block">
                            {restaurantData.footer.hours.title}
                        </h5>
                        <div className="text-white/90 font-light leading-relaxed space-y-2">
                            {restaurantData.footer.hours.lines.map((line, i) => (
                                <p key={i} className="text-sm md:text-base italic font-serif">{line}</p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500 mb-8 border-b border-amber-500/20 pb-2 inline-block">
                            {restaurantData.footer.contact.title}
                        </h5>
                        <div className="text-white/90 font-light leading-relaxed space-y-2">
                            {restaurantData.footer.contact.lines.map((line, i) => (
                                <p key={i} className="text-sm md:text-base hover:text-amber-400 transition-colors cursor-default">{line}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-[9px] tracking-[0.3em] uppercase">
                        {restaurantData.footer.copyright}
                    </p>

                    <div className="flex gap-10">
                        <a
                            href={(restaurantData as any).termsDriveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-amber-500 text-[9px] tracking-[0.3em] uppercase transition-all duration-300"
                        >
                            Terms & Conditions
                        </a>
                        <Link href="/terms" className="text-white hover:text-amber-500 text-[9px] tracking-[0.3em] uppercase transition-all duration-300">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
