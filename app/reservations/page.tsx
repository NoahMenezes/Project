'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ReservationsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        requests: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your request. We will contact you shortly to confirm your reservation.');
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
                    className="w-full h-full object-cover opacity-40"
                >
                    {/* Reusing the background video or we could copy another one. Using background-video.mp4 for consistency */}
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Reservation</h1>
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                Table Reservations are recommended. Kindly fill the form below with your request and we will get back to you.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm">
                            <h3 className="text-2xl font-serif text-amber-500 mb-4">PRIVATE EVENTS</h3>
                            <p className="text-gray-300 font-light leading-relaxed mb-6">
                                Looking for an ideal venue? Look no further. Corporate dinners, special occasions, birthday celebrations, let us handle your needs. Check out Private Dining.
                            </p>
                            <button className="text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-amber-500 transition-colors border-b border-amber-500 pb-1">
                                Inquire For Events
                            </button>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm">
                            <h3 className="text-2xl font-serif text-amber-500 mb-4">OPEN HOURS</h3>
                            <div className="text-gray-300 font-light space-y-2">
                                <p className="uppercase tracking-widest text-sm">Monday thru Sunday:</p>
                                <p className="text-2xl font-serif text-white">11:30 AM - 3:30 PM</p>
                                <p className="text-sm opacity-50">&</p>
                                <p className="text-2xl font-serif text-white">7:00 PM - 11:00 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-sm overflow-hidden h-[800px]"
                    >
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSd7q9aKri9SEST71514iIOMlFdPPl3Dlqyq_GwoJDD_gkWocQ/viewform?embedded=true"
                            className="w-full h-full border-none"
                            title="Table Reservation Form"
                        >
                            Loading…
                        </iframe>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
