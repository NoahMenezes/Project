'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function CorporateDiscountPage() {
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
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">B2B Partnerships</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">Corporate Discount</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-sm shadow-2xl"
                    >
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-amber-500 pl-6">Elevating Corporate Dining</h2>
                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                            <p>
                                We introduced the <span className="text-amber-500 font-medium">Corporate Discount Program</span> in FY23 as a testament to our commitment to the professional community. This initiative is designed to provide exclusive dining benefits to the hardworking employees of various organizations enrolled in our network.
                            </p>
                            <p>
                                Whether you're hosting a business lunch, grabbing a quick takeaway, or enjoying a family dinner, this program ensures that premium hospitality is always within reach. The special discount is applicable across all our services: <span className="text-white italic">Dine-in, Delivery, and Takeaway.</span>
                            </p>
                            <p className="bg-amber-600/10 p-6 border border-amber-500/20 text-white italic rounded-sm">
                                "We believe that great business is often built over great meals. Our program extends these benefits not just to you, but also to your family members."
                            </p>
                            <div className="space-y-4 pt-4 text-sm">
                                <p className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    Valid Company ID card is required to avail benefits.
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    Ongoing benefits as long as your company is enrolled.
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                    Includes family members for a holistic dining experience.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-3xl border border-amber-500/20 p-8 rounded-sm shadow-2xl relative overflow-hidden h-[800px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeR3eafDRAOqWhwDpP1lYZh5GfYL01XLHy9meu4XzZUOKsLug/viewform?embedded=true"
                            className="w-full h-full bg-transparent"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
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
