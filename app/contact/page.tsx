'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
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

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-6">Contact Us</h1>
                </motion.div>

                {/* Section 1: Table Reservations */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6 italic text-amber-500">Table Reservations</h2>
                            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                                Table Reservations are recommended. Kindly fill the form with your request and we will get back to you.
                            </p>
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/reservations"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 rounded-sm"
                                >
                                    Go to Reservations
                                </Link>
                            </div>
                        </div>
                        <div className="h-[500px] border border-white/10 rounded-sm overflow-hidden">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSd7q9aKri9SEST71514iIOMlFdPPl3Dlqyq_GwoJDD_gkWocQ/viewform?embedded=true"
                                className="w-full h-full border-none"
                                title="Table Reservation Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </motion.section>

                {/* Buttons Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {/* Private Events */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm flex flex-col"
                    >
                        <h3 className="text-xl font-serif font-bold text-amber-500 mb-4">PRIVATE EVENTS</h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                            Looking for an ideal venue? Look no further. Corporate dinners, special occasions, birthday celebrations, let us handle your needs.
                        </p>
                        <Link href="/private-dining" className="text-xs font-bold tracking-widest uppercase text-white border-b border-amber-500 pb-1 self-start hover:text-amber-500 transition-colors">
                            Check Out Private Dining
                        </Link>
                    </motion.div>

                    {/* Open Hours */}
                    <motion.div
                        className="p-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm flex flex-col"
                    >
                        <h3 className="text-xl font-serif font-bold text-amber-500 mb-4">OPEN HOURS</h3>
                        <div className="text-gray-300 font-light space-y-2 mb-6">
                            <p className="uppercase tracking-widest text-[10px] font-bold text-gray-500">Monday thru Sunday:</p>
                            <p className="text-lg font-serif">11:30 AM - 3:30 PM</p>
                            <p className="text-xs opacity-50 font-serif italic">&</p>
                            <p className="text-lg font-serif">7:00 PM - 11:00 PM</p>
                        </div>
                        <Link href="/menu" className="text-xs font-bold tracking-widest uppercase text-white border-b border-amber-500 pb-1 self-start hover:text-amber-500 transition-colors">
                            View Menu
                        </Link>
                    </motion.div>

                    {/* Elite Club */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm flex flex-col"
                    >
                        <h3 className="text-xl font-serif font-bold text-amber-500 mb-4">ELITE CLUB</h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                            Join our exclusive loyalty program for premium benefits, point redemptions, and priority table allocation.
                        </p>
                        <Link href="/elite-club" className="text-xs font-bold tracking-widest uppercase text-white border-b border-amber-500 pb-1 self-start hover:text-amber-500 transition-colors">
                            Membership Details
                        </Link>
                    </motion.div>
                </div>

                {/* Section 3: Corporate Discount Program */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 h-[600px] border border-white/10 rounded-sm overflow-hidden">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeR3eafDRAOqWhwDpP1lYZh5GfYL01XLHy9meu4XzZUOKsLug/viewform?embedded=true"
                                className="w-full h-full border-none"
                                title="Corporate Registration Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-serif font-bold mb-6 italic text-amber-500">Corporate Discount Program</h2>
                            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                                We introduced Corporate Discount Program in FY23 to provide discount benefits to various Employees of Companies who are enrolled with us under this program.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                This special discount is applicable on Dine-in, Delivery & Takeaway services. Family members of the Employees are also included in this program. Valid Company ID card is always required to avail the discount.
                            </p>
                            <p className="text-amber-500 font-medium mb-8">
                                Interested in joining? Kindly submit the details below to initiate registration process.
                            </p>
                            <Link
                                href="/programs#corporate"
                                className="text-xs font-bold tracking-widest uppercase text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors"
                            >
                                Learn More About the Program
                            </Link>
                        </div>
                    </div>
                </motion.section>

                {/* Final Contact Page Separate */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-serif font-bold mb-8 text-white">General Inquiries</h2>
                    <div className="w-full h-[800px] border border-white/10 rounded-sm bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl p-1">
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
