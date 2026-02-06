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
                        className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm"
                    >
                        <h2 className="text-3xl font-serif text-white mb-8 text-center">Request a Table</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors"
                                    required
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors [color-scheme:dark]"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Time</label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors [&>option]:bg-black"
                                        required
                                    >
                                        <option value="">Select Time</option>
                                        <option value="lunch">Lunch (11:30 - 3:30)</option>
                                        <option value="dinner">Dinner (7:00 - 11:00)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Guests</label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors [&>option]:bg-black"
                                    required
                                >
                                    <option value="">Number of Guests</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                        <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                                    ))}
                                    <option value="more">10+ (Large Group)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-amber-500 uppercase">Special Requests</label>
                                <textarea
                                    name="requests"
                                    value={formData.requests}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-white/5 border-b border-white/20 focus:border-amber-500 text-white p-3 outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 mt-4">
                                Confirm Request
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
