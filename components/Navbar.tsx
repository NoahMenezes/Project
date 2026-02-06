'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }} animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-widest text-white serif">{restaurantData.navbar.brand}</span>
                </div>

                <div className="hidden md:flex gap-10">
                    {restaurantData.navbar.links.map((item) => (
                        <Link
                            key={item}
                            href={
                                item === "MENU" ? "/menu" :
                                    item === "LOCATIONS" ? "/locations" :
                                        "#"
                            }
                            className="text-xs font-medium tracking-widest text-white/80 hover:text-amber-400 transition uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <Link href="/reservations">
                    <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm">
                        {restaurantData.navbar.cta}
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
}
