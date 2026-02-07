'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const programs = [
    {
        id: 'armed-forces',
        title: "Armed Forces Discount",
        image: "/fire-mastery.mp4", // Using video as placeholder/bg
        isLeft: true,
        content: (
            <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed font-light">
                    On 26th January 2022, we launched ARMED FORCES DISCOUNT as a token of respect & appreciation for the armed forces. After a successful run of one year, we have decided to make this Armed Forces Discount available throughout the lifetime.
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                    We thank you once for your service. Your bravery, sacrifice, and strength do not go unnoticed, and we will always be indebted to you for all that you have given to the country.
                </p>
                <ul className="space-y-2 mt-6">
                    <li className="flex items-center gap-3 text-sm text-amber-500 font-medium tracking-wide">
                        <div className="size-1.5 rounded-full bg-amber-500"></div>
                        Discount is applicable for active, ex and retired servicemen.
                    </li>
                    <li className="flex items-center gap-3 text-sm text-amber-500 font-medium tracking-wide">
                        <div className="size-1.5 rounded-full bg-amber-500"></div>
                        ID card is required to avail this discount.
                    </li>
                    <li className="flex items-center gap-3 text-sm text-amber-500 font-medium tracking-wide">
                        <div className="size-1.5 rounded-full bg-amber-500"></div>
                        Includes Indian Army, Navy, Air Force, Goa Police & the list goes on...
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'corporate',
        title: "Corporate Discount",
        image: "/edible-art.mp4",
        isLeft: false,
        content: (
            <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed font-light">
                    We introduced CORPORATE DISCOUNT PROGRAM in FY22-23 to provide discount benefits to various Employees of Companies who are enrolled with us under this program. This special discount is applicable on Dine-in, Delivery & Takeaway services.
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                    Family members of the Employees are also included in this program. Valid Company ID card is always required to avail the discount. This is an on-going program till the Company is enrolled with us.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mb-3">Enrolled Companies</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Bank of Baroda, BNI Members, Canara Bank, Deltin Corp, Enigmasoft, FC Goa, Frontline Managed Services, GMR, Golden Globe, Group Priority, Kineco Kaman, MARC, Open Destinations, Persistent Systems, R.K. Pikale & Co., Reserve Bank of India, Sai Service, Sandu Pharma, Sanofi, State Bank of India, Tangentia, Teknorix Systems, Unichem, & Vedanta.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'influencer',
        title: "Influencer Connect",
        image: "/sourced-daily.mp4",
        isLeft: true,
        content: (
            <div className="space-y-4">
                <p className="text-gray-400 font-serif italic text-lg mb-4">Are you a Social Media Influencer? Do you like to blog about food?</p>
                <p className="text-gray-300 leading-relaxed font-light">
                    INFLUENCER CONNECT PROGRAM is a flagship program of Copperleaf where we collaborate with Social Media Influencers like you to come and experience the Ultimate Dining Experience at Copperleaf and share your content with the followers.
                </p>
                <div className="mt-8 p-6 bg-black border border-amber-500/20 rounded-sm inline-block">
                    <p className="text-sm text-white font-medium mb-2">Interested in working with us?</p>
                    <p className="text-xs text-gray-500">Kindly scan the enrollment QR code at our restaurant or contact us for more details.</p>
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
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Special Initatives</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-6">Our Programs</h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        At Copperleaf, we believe in giving back to the community and fostering meaningful collaborations. Explore our various specialized discount and engagement programs.
                    </p>
                </motion.div>

                {/* Programs Sections */}
                <div className="space-y-32">
                    {programs.map((program, index) => (
                        <motion.section
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col ${program.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/2 group">
                                <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                    >
                                        <source src={program.image} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-amber-500 font-bold">
                                    Program 0{index + 1}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">{program.title}</h2>
                                <div className="w-12 h-0.5 bg-amber-500"></div>
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
