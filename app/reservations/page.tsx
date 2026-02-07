'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import PremiumModal from '@/components/PremiumModal';

export default function ReservationsPage() {
    const [showModal, setShowModal] = useState(false);
    const [loadCount, setLoadCount] = useState(0);

    const handleIframeLoad = () => {
        setLoadCount(prev => prev + 1);
        if (loadCount > 0) {
            setShowModal(true);
        }
    };
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani">
            <Navbar />

            {/* Background Video */}
            <div className="fixed inset-0 z-0">
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

            <div className="relative z-10 pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Reservation</h1>
                            <div className="space-y-6">
                                <p className="text-xl text-gray-300 font-light leading-relaxed">
                                    Table Reservations are recommended at Copperleaf to ensure the best possible dining experience for you and your guests. Whether it's a casual family lunch, a romantic dinner, or a milestone celebration, we strive to make every moment memorable.
                                </p>
                                <p className="text-lg text-gray-400 font-light leading-relaxed">
                                    To help us serve you better, we encourage guests to book their tables in advance, especially during weekends and public holidays. Our team will review your request and contact you shortly to confirm the availability.
                                </p>
                                <p className="text-lg text-gray-400 font-light leading-relaxed">
                                    For groups larger than 10, or for specific seating requests like our Private Dining rooms (Solitaire or 10@Infinity), please mention this in the "Special Requests" section of the form or contact us directly at our respective outlets.
                                </p>
                                <div className="pt-4">
                                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                                    <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-8">Experience the Ultimate Dining</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <a
                                            href="https://api.whatsapp.com/send/?phone=919175018461&text=Hi+Copperleaf!+I'd+like+to+make+a+reservation+at+Panaji&type=phone_number&app_absent=0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-sm hover:border-amber-500/50 transition-all duration-300 group"
                                        >
                                            <h4 className="text-amber-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Panaji Outlet</h4>
                                            <p className="text-white font-serif italic text-xl">+91 91750 18461</p>
                                            <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest group-hover:text-amber-500 transition-colors">Instant WhatsApp Reservation</p>
                                        </a>
                                        <a
                                            href="https://api.whatsapp.com/send/?phone=917558298641&text=Hi+Copperleaf!+I'd+like+to+make+a+reservation+at+Porvorim&type=phone_number&app_absent=0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-sm hover:border-amber-500/50 transition-all duration-300 group"
                                        >
                                            <h4 className="text-amber-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Porvorim Outlet</h4>
                                            <p className="text-white font-serif italic text-xl">+91 75582 98641</p>
                                            <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest group-hover:text-amber-500 transition-colors">Instant WhatsApp Reservation</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-sm shadow-2xl relative overflow-hidden">
                            <h3 className="text-3xl font-serif text-white mb-4 italic">PRIVATE EVENTS</h3>
                            <p className="text-gray-300 font-light leading-relaxed mb-8">
                                Looking for an ideal venue? Look no further. From corporate power lunches to cherished family reunions, our dedicated event spaces are designed to host your most important moments with elegance and style.
                            </p>
                            <a href="/private-dining" className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-500 hover:text-white transition-colors border-b-2 border-amber-500 pb-2">
                                Explore Private Dining Spaces
                            </a>
                        </div>

                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-sm shadow-2xl relative overflow-hidden">
                            <h3 className="text-3xl font-serif text-white mb-6 italic">OPEN HOURS</h3>
                            <div className="text-gray-300 font-light space-y-4">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="uppercase tracking-[0.2em] text-xs font-bold text-amber-500">Monday - Sunday</span>
                                    <span className="text-sm">7 Days a Week</span>
                                </div>
                                <div className="grid grid-cols-2 gap-8 pt-2">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Lunch Service</p>
                                        <p className="text-2xl font-serif text-white">11:30 AM - 3:30 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Dinner Service</p>
                                        <p className="text-2xl font-serif text-white">7:00 PM - 11:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form with Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-2xl border border-white/20 p-2 rounded-sm overflow-hidden h-[900px] shadow-2xl relative"
                    >
                        <div className="absolute inset-0 z-10 pointer-events-none border-[8px] border-white/5 rounded-sm"></div>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSd7q9aKri9SEST71514iIOMlFdPPl3Dlqyq_GwoJDD_gkWocQ/viewform?embedded=true"
                            onLoad={handleIframeLoad}
                            className="w-full h-full border-none transform scale-[1.01]"
                            title="Table Reservation Form"
                        >
                            Loading…
                        </iframe>
                    </motion.div>
                </div>
            </div>
            <Footer />

            <PremiumModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Reservation Requested"
                message="Thank you for your request. Our team will review the availability and contact you shortly to confirm your reservation. We look forward to hosting you at Copperleaf."
            />
        </main>
    );
}
