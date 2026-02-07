'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Background Video Placeholder Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Transparency & Trust</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-8">Privacy Policy</h1>
                    <div className="w-20 h-1 bg-amber-500 mb-12"></div>

                    <div className="prose prose-invert max-w-none space-y-12 text-gray-300 font-light leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">1. Introduction</h2>
                            <p className="text-lg">
                                At Copperleaf (a brand under Vishwamukta Group), we are committed to protecting the privacy and security of our guests' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our restaurants in Panaji or Porvorim, use our website, or enroll in our loyalty programs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">2. Information We Collect</h2>
                            <p className="mb-4 text-lg">We collect information that helps us provide you with the ultimate dining experience. This includes:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li className="bg-white/5 border border-white/10 p-4 rounded-sm">
                                    <strong className="text-amber-500 block mb-1">Reservation Data:</strong>
                                    Name, contact number, email address, and dining preferences.
                                </li>
                                <li className="bg-white/5 border border-white/10 p-4 rounded-sm">
                                    <strong className="text-amber-500 block mb-1">Elite Club Membership:</strong>
                                    Birthday, anniversary dates, and transaction history to calculate your reward points.
                                </li>
                                <li className="bg-white/5 border border-white/10 p-4 rounded-sm">
                                    <strong className="text-amber-500 block mb-1">Corporate Program:</strong>
                                    Employer details and professional identification for program eligibility.
                                </li>
                                <li className="bg-white/5 border border-white/10 p-4 rounded-sm">
                                    <strong className="text-amber-500 block mb-1">Digital Interaction:</strong>
                                    IP addresses, browser types, and cookies to improve website performance.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">3. How We Use Your Information</h2>
                            <p className="mb-4 text-lg">Your data is utilized strictly for service excellence:</p>
                            <div className="space-y-4">
                                <p className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5"></span>
                                    <span>To process and confirm your table reservations at our Panaji or Porvorim outlets.</span>
                                </p>
                                <p className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5"></span>
                                    <span>To credit Elite Club points and notify you of exclusive "Birthday" or "Anniversary" incentives.</span>
                                </p>
                                <p className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5"></span>
                                    <span>To send transactional updates via WhatsApp or Email regarding your orders and bookings.</span>
                                </p>
                                <p className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5"></span>
                                    <span>To improve our culinary offerings based on your feedback and preferences.</span>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">4. Data Sharing & Security</h2>
                            <p className="text-lg">
                                Copperleaf does not sell your personal information to third parties. Data may be shared with trusted service providers (such as reservation management systems or CRM platforms) solely to facilitate our services. We implement industry-standard security measures, including SSL encryption, to protect your data during transmission and storage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">5. Your Rights</h2>
                            <p className="text-lg">
                                You have the right to access, correct, or request the deletion of your personal data held by us. Elite Club members can manage their preferences through their registered mobile number or by contacting our support team.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-amber-500/20 p-8 rounded-sm">
                            <h2 className="text-xl font-serif font-bold text-white mb-4 uppercase">Direct Contact</h2>
                            <p className="mb-4">For any privacy-related inquiries or to exercise your data rights, please reach out to us:</p>
                            <div className="text-gray-300 space-y-1 font-medium">
                                <p>Email: <span className="text-amber-500">eat@copperleafgoa.com</span></p>
                                <p>Address: Chogm Road, Alto-Porvorim, Goa 403521</p>
                                <p>Phone: +91 91750 18461</p>
                            </div>
                        </section>
                    </div>

                    <p className="mt-16 text-[10px] text-gray-500 uppercase tracking-widest text-center">
                        Last Updated: February 2026 • © Copperleaf Multi-Cuisine Fine Dining
                    </p>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
