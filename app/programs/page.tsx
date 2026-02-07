'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const programs = [
    {
        id: 'armed-forces',
        title: "Armed Forces Discount",
        image: "/programs/armed-forces.jpg",
        isLeft: true,
        content: (
            <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed font-light">
                    On 26th January 2022, we launched ARMED FORCES DISCOUNT as a token of respect & appreciation for the armed forces. After a successful run of one year, we have decided to make this Armed Forces Discount available throughout the lifetime.
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                    We thank you once for your service. Your bravery, sacrifice, and strength do not go unnoticed, and we will always be indebted to you for all that you have given to the country.
                </p>
                <ul className="space-y-4 mt-8">
                    <li className="flex items-start gap-4">
                        <div className="size-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300 leading-relaxed">Discount is applicable for active, ex and retired servicemen.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="size-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300 leading-relaxed">ID card is required to avail this discount.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="size-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300 leading-relaxed">Includes Indian Army, Navy, Air Force, Goa Police & the list goes on...</span>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'corporate',
        title: "Corporate Discount",
        image: "/programs/corporate.jpg",
        isLeft: false,
        content: (
            <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed font-light">
                    We introduced CORPORATE DISCOUNT PROGRAM in FY22-23 to provide discount benefits to various Employees of Companies who are enrolled with us under this program. This special discount is applicable on Dine-in, Delivery & Takeaway services.
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                    Family members of the Employees are also included in this program. Valid Company ID card is always required to avail the discount. This is an on-going program till the Company is enrolled with us and you are an Employee of the Company.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs text-amber-500 font-bold uppercase tracking-[0.2em] mb-4">Enrolled Companies</p>
                    <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Bank of Baroda, BNI Members, Canara Bank, Deltin Corp, Enigmasoft, FC Goa, Frontline Managed Services, GMR, Golden Globe, Group Priority, Kineco Kaman, MARC, Open Destinations, Persistent Systems, R.K. Pikale & Co., Reserve Bank of India, Sai Service, Sandu Pharma, Sanofi, State Bank of India, Tangentia, Teknorix Systems, Unichem, & Vedanta.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'influencer',
        title: "Influencer Connect",
        image: "/programs/influencer.png",
        isLeft: true,
        content: (
            <div className="space-y-6">
                <p className="text-xl font-serif text-white italic leading-relaxed">
                    Are you a Social Media Influencer? Do you like to blog about food? Do you create Instagrammable content?
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                    INFLUENCER CONNECT PROGRAM is a flagship program of Copperleaf where we collaborate with Social Media Influencers like you to come and experience the Ultimate Dining Experience at Copperleaf and share your content with the followers.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-8 p-8 bg-amber-500/5 border border-amber-500/20 rounded-sm">
                    <div className="size-24 bg-white/10 flex-shrink-0 flex items-center justify-center border border-white/10">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest text-center">QR Code<br />Placeholder</span>
                    </div>
                    <p className="text-sm text-gray-400 text-center sm:text-left">
                        If this excites you, then kindly scan the QR code for enrollment.
                    </p>
                </div>
            </div>
        )
    }
];

export default function ProgramsPage() {
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
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Special Initiatives</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-6">Our Programs</h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        Explore our various specialized discount and engagement programs designed to support our community and create meaningful connections.
                    </p>
                </motion.div>

                {/* Programs Sections */}
                <div className="space-y-40">
                    {programs.map((program, index) => (
                        <motion.section
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col ${program.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className="space-y-2">
                                    <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-amber-500 font-bold">
                                        Program 0{index + 1}
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">{program.title}</h2>
                                    <div className="w-16 h-1 bg-amber-500"></div>
                                </div>
                                {program.content}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
