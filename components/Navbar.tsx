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
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/90 backdrop-blur-md py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Brand / Home */}
                <Link href="/">
                    <span className="text-2xl font-bold tracking-widest text-white serif cursor-pointer">
                        {restaurantData.navbar.brand}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 items-center">
                    {restaurantData.navbar.links.map((item) => {
                        if (item === 'OUR RESTAURANTS') {
                            return (
                                <div key={item} className="relative group py-2">
                                    <button className="text-xs font-medium tracking-widest text-white/80 group-hover:text-amber-400 transition uppercase flex items-center gap-1">
                                        {item}
                                        <svg
                                            className="w-3 h-3 transition-transform group-hover:rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm">
                                        <Link
                                            href="/locations?loc=Panaji"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase"
                                        >
                                            Panaji
                                        </Link>
                                        <Link
                                            href="/locations?loc=Porvorim"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase border-t border-white/5"
                                        >
                                            Porvorim
                                        </Link>
                                        <Link
                                            href="/gallery"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase border-t border-white/5"
                                        >
                                            Gallery
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        if (item === 'OUR COMPANY') {
                            return (
                                <div key={item} className="relative group py-2">
                                    <button className="text-xs font-medium tracking-widest text-white/80 group-hover:text-amber-400 transition uppercase flex items-center gap-1">
                                        {item}
                                        <svg
                                            className="w-3 h-3 transition-transform group-hover:rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm">
                                        <Link
                                            href="/accolades"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase"
                                        >
                                            Accolades
                                        </Link>
                                        <Link
                                            href="/programs"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase border-t border-white/5"
                                        >
                                            Programs
                                        </Link>
                                        <Link
                                            href="/private-dining"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase border-t border-white/5"
                                        >
                                            Private Dining
                                        </Link>
                                        <Link
                                            href="/careers"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase border-t border-white/5"
                                        >
                                            Careers
                                        </Link>
                                        <Link
                                            href="/news"
                                            className="block px-6 py-4 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/5 transition uppercase border-t border-white/5"
                                        >
                                            News
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item}
                                href={
                                    item === 'HOME' ? '/' :
                                        item === 'MENU' ? '/menu' :
                                            item === 'ELITE CLUB'
                                                ? (restaurantData.navbar as any).eliteClubLink
                                                : item === 'RESERVATIONS'
                                                    ? '/reservations'
                                                    : item === 'LOCATIONS'
                                                        ? '/locations'
                                                        : item === 'OUR STORY'
                                                            ? '/#story'
                                                            : item === 'CONTACT'
                                                                ? '/contact'
                                                                : item === 'CORPORATE DISCOUNT'
                                                                    ? '/corporate-discount'
                                                                    : '#'
                                }
                                className="text-xs font-medium tracking-widest text-white/80 hover:text-amber-400 transition uppercase"
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <Link href="/reservations">
                    <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm shadow-[0_0_15px_rgba(217,119,6,0.2)]">
                        {restaurantData.navbar.cta}
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
}
