'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import PremiumModal from '@/components/PremiumModal';

const contactOptions = [
    {
        id: 'reservations',
        label: 'Table Reservations',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSd7q9aKri9SEST71514iIOMlFdPPl3Dlqyq_GwoJDD_gkWocQ/viewform?embedded=true',
        content: (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 italic mb-4">Table Reservations</h2>
                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                        Secure your table to experience Goa's most beloved multi-cuisine destination. Reservations are highly recommended for weekends, public holidays, and special festive occasions to ensure your preferred seating.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-400 font-light leading-relaxed">
                        For parties larger than 10, or specific seating requests like our Private Dining rooms (Solitaire or 10@Infinity), please call our outlets directly or mention your preference in the special requests section of the form.
                    </p>
                    <div className="bg-black/40 p-6 border border-white/10 rounded-sm">
                        <h4 className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase mb-4">Operating Hours</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Lunch Service</p>
                                <p className="text-white font-serif italic text-lg">11:30 AM - 3:30 PM</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Dinner Service</p>
                                <p className="text-white font-serif italic text-lg">7:00 PM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'private',
        label: 'Private Dining',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSew_9JVCO3zvHdm7hCKHCIYnBI5FaIolngySo0ikvrsfmkKAw/viewform?embedded=true',
        content: (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 italic mb-4">Private Dining Spaces</h2>
                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                        From intimate signature dining in Solitaire to panoramic city views in Infinity, our private spaces are crafted for exclusivity. Each venue is equipped with modern amenities to suit both personal celebrations and corporate meetings.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="size-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm font-light">Customized buffet and à la carte options tailored to your event requirements.</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="size-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm font-light">Equipped with 55" Personal Smart TVs, butler services, and private entries.</p>
                    </div>
                    <div className="pt-4">
                        <Link href="/private-dining" className="inline-flex items-center text-amber-500 hover:text-white border-b border-amber-500/30 hover:border-white pb-2 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 group">
                            Explore Dining Concepts
                            <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'corporate',
        label: 'Corporate Discount',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSeR3eafDRAOqWhwDpP1lYZh5GfYL01XLHy9meu4XzZUOKsLug/viewform?embedded=true',
        content: (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 italic mb-4">Corporate Excellence</h2>
                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                        Our Corporate Discount Program (FY23) provides exclusive dining benefits to employees of our partner companies. We believe in fostering long-term relationships through exceptional service and value.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-400 font-light leading-relaxed italic border-l-2 border-amber-500/50 pl-6">
                        Applicable on Dine-in, Delivery, and Takeaway services for both employees and their immediate family members.
                    </p>
                    <p className="text-sm text-gray-500 font-light">
                        *Valid Company Identification is mandatory to avail benefits. This is an on-going enrollment program.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'elite',
        label: 'Elite Club',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSe2m9eptyRyn2nDCdRHBhvAx8_eI5pAQtcFXmqN6dbImkcwvA/viewform?embedded=true',
        content: (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 italic mb-4">Elite Club Membership</h2>
                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                        Elevate your dining experience with Goa's premier loyalty program. Earn points, enjoy cashback, and receive priority treatment every time you step into a Copperleaf outlet.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border border-white/5 bg-black/20 rounded-sm">
                        <p className="text-amber-500 font-bold text-xl mb-1">5000*</p>
                        <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Welcome Bonus</p>
                    </div>
                    <div className="p-4 border border-white/5 bg-black/20 rounded-sm">
                        <p className="text-amber-500 font-bold text-xl mb-1">50%*</p>
                        <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Max Cashback</p>
                    </div>
                </div>

                <Link href="/elite-club" className="inline-block text-amber-500 hover:text-white border-b border-amber-500/30 pb-2 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300">
                    See All Member Perks
                </Link>
            </div>
        )
    },
    {
        id: 'menu',
        label: 'Menu Inquiry',
        form: 'https://docs.google.com/forms/d/e/1FAIpQLSe4R0PqqxkFAiQx9YPOjTFu6uOITvoBusKe34kY6JmKk3JvLQ/viewform?embedded=true',
        content: (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 italic mb-4">Culinary Selection</h2>
                    <div className="w-12 h-1 bg-amber-500 mb-6"></div>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                        Whether you are planning a large order for an office gathering or inquiring about seasonal specials, our team is here to help. Get our latest menus delivered straight to your WhatsApp.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                        Explore our Multi-Cuisine options including traditional Goan delicacies, North Indian classics, and International favorites, all prepared with the freshest ingredients.
                    </p>
                    <Link href="/menu" className="inline-block px-8 py-3 bg-white/5 border border-white/10 hover:bg-amber-600 hover:border-amber-600 text-white transition-all duration-300 text-xs font-bold tracking-[0.3em] uppercase rounded-sm">
                        Open Digital Menu
                    </Link>
                </div>
            </div>
        )
    }
];

export default function ContactPage() {
    const [activeOption, setActiveOption] = useState(contactOptions[0]);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ title: '', message: '', type: 'success' as 'success' | 'confirm' });
    const [loadCount, setLoadCount] = useState(0);

    const handleTabChange = (option: any) => {
        setActiveOption(option);
        setLoadCount(0); // Reset load count for the new tab's iframe
    };

    const handleIframeLoad = () => {
        setLoadCount(prev => prev + 1);
        // If it's the second load or more, it usually means the form was submitted 
        // and redirected to the "Response Recorded" page.
        if (loadCount > 0) {
            setModalConfig({
                title: 'Request Received',
                message: 'Thank you for reaching out to Copperleaf. Your request has been successfully transmitted to our team. We will get back to you shortly.',
                type: 'success'
            });
            setShowModal(true);
        }
    };

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
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Personalized Service</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-4">Get In Touch</h1>
                </motion.div>

                {/* Tab Navigation Hub - Matches User Design Reference */}
                <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-20 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 max-w-fit mx-auto shadow-2xl">
                    {contactOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleTabChange(option)}
                            className={`px-4 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 relative group overflow-hidden ${activeOption.id === option.id
                                ? 'bg-amber-600 text-white shadow-[0_0_30px_rgba(217,119,6,0.3)]'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="relative z-10">{option.label}</span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Section with Enhanced Design */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeOption.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-sm shadow-2xl overflow-hidden relative"
                        >
                            <div className="flex flex-col lg:flex-row min-h-[700px]">
                                {/* Copy-side */}
                                <div className="p-8 md:p-16 lg:w-2/5 flex flex-col justify-center bg-white/5 relative border-b lg:border-b-0 lg:border-r border-white/10">
                                    {activeOption.content}
                                </div>

                                {/* Form-side - Strong Glassmorphism */}
                                <div className="lg:w-3/5 relative p-4 md:p-10">
                                    <div className="h-[750px] md:h-[800px] w-full border border-white/20 rounded-sm overflow-hidden bg-white/5 shadow-2xl relative backdrop-blur-md">
                                        <div className="absolute inset-0 z-10 pointer-events-none border-[8px] border-white/5 rounded-sm"></div>
                                        <iframe
                                            src={activeOption.form}
                                            onLoad={handleIframeLoad}
                                            className="w-full h-full border-none transform scale-[1.01]"
                                            title={activeOption.label}
                                        >
                                            Loading…
                                        </iframe>
                                    </div>
                                    <p className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest font-light italic">
                                        Secure Transmission via Copperleaf Systems
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Final Separate Contact Form for General Queries */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-48 max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Still Have Questions?</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">General Inquiries</h2>
                        <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto w-full h-[850px] border border-white/20 rounded-sm bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl relative p-1">
                        <div className="absolute inset-0 z-10 pointer-events-none border-[6px] border-white/10 rounded-sm"></div>
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

            <PremiumModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title={modalConfig.title}
                message={modalConfig.message}
                type={modalConfig.type}
            />
        </main>
    );
}
