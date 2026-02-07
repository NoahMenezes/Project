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

                <div className="flex flex-col gap-12 items-center mb-24 max-w-6xl mx-auto">
                    {/* Main Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-sm shadow-2xl w-full"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 border-l-4 border-amber-500 pl-6 uppercase tracking-tight">Corporate Discount Program</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
                                <div className="space-y-4">
                                    <h3 className="text-amber-500 font-bold tracking-widest text-sm uppercase">About the Program</h3>
                                    <p>
                                        We introduced the <span className="text-amber-500 font-medium">Corporate Discount Program</span> in FY23 as a testament to our commitment to the professional community. This initiative is designed to provide exclusive dining benefits to the hardworking employees of various organizations enrolled in our network.
                                    </p>
                                    <p>
                                        At Copperleaf, we understand that productivity is fueled by great experiences. Our program aims to bridge the gap between high-pressure work environments and high-quality dining, making elite hospitality accessible to your entire workforce.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-amber-500 font-bold tracking-widest text-sm uppercase">Where it Applies</h3>
                                    <p>
                                        Whether you're hosting a business lunch, grabbing a quick takeaway, or enjoying a family dinner, this program ensures that premium hospitality is always within reach. The special discount is applicable across all our services:
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4">
                                        {['Fine Dining (Dine-in)', 'Direct Delivery', 'Express Takeaway', 'Corporate Gatherings'].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                                                <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-amber-600/10 p-8 border border-amber-500/20 text-white rounded-sm">
                                    <h3 className="text-xl font-serif italic mb-4">"Elevating the Corporate Experience"</h3>
                                    <p className="text-gray-300 font-light leading-relaxed italic">
                                        "We believe that great business is often built over great meals. Our program extends these benefits not just to you, but also to your family members, ensuring that your work-life balance is celebrated."
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-amber-500 font-bold tracking-widest text-sm uppercase">Program Eligibility & Terms</h3>
                                    <div className="space-y-4 text-sm text-gray-300">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1.5 w-2 h-2 bg-amber-500 rounded-full shrink-0"></div>
                                            <p><span className="text-white font-medium">Identification:</span> A valid Company ID card is always required at the time of billing to avail the discount.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1.5 w-2 h-2 bg-amber-500 rounded-full shrink-0"></div>
                                            <p><span className="text-white font-medium">Continuity:</span> This is an on-going program as long as your organization is officially enrolled with us.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1.5 w-2 h-2 bg-amber-500 rounded-full shrink-0"></div>
                                            <p><span className="text-white font-medium">Family Inclusion:</span> Benefits are extended to immediate family members when accompanied by the employee.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Partner Section */}
                        <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-4">
                                <h4 className="text-white font-serif font-bold text-xl uppercase tracking-tight">For Employers</h4>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">Boost employee morale and retention by offering a premium lifestyle perk at zero cost to the company.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-white font-serif font-bold text-xl uppercase tracking-tight">For Employees</h4>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">Enjoy significant savings on Goa's favorite multi-cuisine dishes, from Fish Thalis to Global Classics.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-white font-serif font-bold text-xl uppercase tracking-tight">Global Network</h4>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">Join a network of top-tier Goan and National companies already benefiting from our hospitality expertise.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enrollment Form Section */}
                    <div className="w-full text-center mt-12 pb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Enroll Your Organization</h2>
                        <p className="text-gray-400 font-light tracking-widest text-xs uppercase mb-12">Interested in joining? Kindly submit the details below to initiate the registration process.</p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-3xl border border-amber-500/20 p-4 md:p-8 rounded-sm shadow-2xl relative overflow-hidden h-[900px] w-full"
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

                    <div className="text-center opacity-50 space-y-4">
                        <h3 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">Our Tie-Ups</h3>
                        <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">Our program currently serves major IT firms, banking institutions, healthcare organizations, and government entities across Goa.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
