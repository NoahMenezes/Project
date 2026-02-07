'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

const newsItems = [
    {
        date: "Jan 15, 2024",
        title: "Copperleaf Recognized as 'Best Seafood Experience'",
        category: "Awards",
        description: "We are honored to receive the 'Best Seafood Experience' award at the 2023 Food Connoisseurs India Awards. Thank you for your continued support!"
    },
    {
        date: "Dec 20, 2023",
        title: "New Seasonal Specials Launched",
        category: "Menu",
        description: "Our culinary team has crafted a new selection of seasonal specials featuring the freshest winter ingredients from local Goan markets."
    },
    {
        date: "Nov 05, 2023",
        title: "Copperleaf Elite Club Reaches New Milestone",
        category: "Elite Club",
        description: "We are proud to announce that the Elite Club has now surpassed 10,000 active members. Join today to experience exclusive benefits."
    }
];

const socialLinks = [
    {
        name: 'Instagram', url: 'https://www.instagram.com/copperleafgoa/', icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        )
    },
    {
        name: 'LinkedIn', url: 'https://www.linkedin.com/company/copperleaf/', icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        )
    }
];

export default function NewsPage() {
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
                    className="text-center mb-24"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Updates & Events</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">Latest News</h1>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12">
                        We update the latest news about Copperleaf here. Stay informed about our awards, menu launches, and community activities.
                    </p>

                    {/* Social Profiles */}
                    <div className="flex justify-center gap-8 border-t border-white/10 pt-12">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-4 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300">
                                    <span className="text-white group-hover:text-amber-500 transition-colors">
                                        {social.icon}
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 group-hover:text-amber-500 transition-colors">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-3xl p-10 border border-white/10 rounded-sm shadow-2xl hover:border-amber-500/50 transition-all duration-500 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 border border-amber-500/20 rounded-full">
                                    {item.category}
                                </span>
                                <span className="text-gray-500 text-[10px] uppercase tracking-widest">
                                    {item.date}
                                </span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight group-hover:text-amber-500 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                                {item.description}
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Read More</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
