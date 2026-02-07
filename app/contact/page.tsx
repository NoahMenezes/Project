'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const contactOptions = [
    {
        id: 'reservations',
        label: 'Table Reservations',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSd7q9aKri9SEST71514iIOMlFdPPl3Dlqyq_GwoJDD_gkWocQ/viewform?embedded=true',
        content: (
            <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-amber-500 italic">Table Reservations</h2>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Table Reservations are recommended. Kindly fill the form with your request and we will get back to you.
                </p>
                <div className="bg-white/5 p-6 border-l-2 border-amber-500">
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">OPEN HOURS</h4>
                    <p className="text-gray-400 text-sm">Monday thru Sunday: 11:30 AM - 3:30 PM & 7:00 PM - 11:00 PM</p>
                </div>
            </div>
        )
    },
    {
        id: 'private',
        label: 'Private Dining',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSew_9JVCO3zvHdm7hCKHCIYnBI5FaIolngySo0ikvrsfmkKAw/viewform?embedded=true',
        content: (
            <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-amber-500 italic">Private Dining</h2>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Looking for an ideal venue? Look no further. Corporate dinners, special occasions, birthday celebrations, let us handle your needs.
                </p>
                <Link href="/private-dining" className="inline-block text-amber-500 hover:text-white border-b border-amber-500 pb-1 text-xs font-bold tracking-widest uppercase transition-colors">
                    Explore Our Private Spaces
                </Link>
            </div>
        )
    },
    {
        id: 'corporate',
        label: 'Corporate Discount',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSeR3eafDRAOqWhwDpP1lYZh5GfYL01XLHy9meu4XzZUOKsLug/viewform?embedded=true',
        content: (
            <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-amber-500 italic">Corporate Discount Program</h2>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Enrolled Companies receive exclusive benefits on Dine-in, Delivery & Takeaway services.
                </p>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Interested in joining? Kindly submit the details below to initiate registration process. Valid Company ID required.
                </p>
            </div>
        )
    },
    {
        id: 'elite',
        label: 'Elite Club',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSe2m9eptyRyn2nDCdRHBhvAx8_eI5pAQtcFXmqN6dbImkcwvA/viewform?embedded=true',
        content: (
            <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-amber-500 italic">Copperleaf Elite Club</h2>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Join our premier loyalty program for cashback, point redemptions, and priority table allocation.
                </p>
                <Link href="/elite-club" className="inline-block text-amber-500 hover:text-white border-b border-amber-500 pb-1 text-xs font-bold tracking-widest uppercase transition-colors">
                    View Membership Benefits
                </Link>
            </div>
        )
    },
    {
        id: 'menu',
        label: 'Menu Inquiry',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSe4R0PqqxkFAiQx9YPOjTFu6uOITvoBusKe34kY6JmKk3JvLQ/viewform?embedded=true',
        content: (
            <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-amber-500 italic">Menu & Delivery</h2>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Inquire about our latest offerings, daily specials, or coordinate a delivery for your home or office.
                </p>
                <Link href="/menu" className="inline-block text-amber-500 hover:text-white border-b border-amber-500 pb-1 text-xs font-bold tracking-widest uppercase transition-colors">
                    View Full Digital Menu
                </Link>
            </div>
        )
    }
];

export default function ContactPage() {
    const [activeOption, setActiveOption] = useState(contactOptions[0]);

    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
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
                    <source src="/fire-mastery.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Connect With Us</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight">Contact</h1>
                </motion.div>

                {/* Tab Navigation Hub */}
                <div className="flex flex-wrap justify-center gap-2 mb-20 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 max-w-fit mx-auto">
                    {contactOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setActiveOption(option)}
                            className={`px-6 md:px-10 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 ${activeOption.id === option.id
                                ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.5)]'
                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Section */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeOption.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-12 items-center bg-black/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-600"></div>

                            <div className="space-y-8">
                                {activeOption.content}
                            </div>

                            <div className="h-[600px] border border-white/10 rounded-sm overflow-hidden bg-black/40">
                                <iframe
                                    src={activeOption.form}
                                    className="w-full h-full border-none"
                                    title={activeOption.label}
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Final Separate Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center"
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">General Inquiries</h2>
                        <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto w-full h-[800px] border border-white/10 rounded-sm bg-black/80 backdrop-blur-xl overflow-hidden shadow-2xl p-1">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSew_9JVCO3zvHdm7hCKHCIYnBI5FaIolngySo0ikvrsfmkKAw/viewform?embedded=true"
                            className="w-full h-full border-none"
                            title="General Contact Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
