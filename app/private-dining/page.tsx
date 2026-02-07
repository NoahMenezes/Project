'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const diningOptions = [
    {
        id: 'solitaire',
        title: "Solitaire",
        subtitle: "Signature Private Dining",
        image: "/private-dining/solitaire.jpg",
        isLeft: true,
        description: "We are excited to introduce our latest dining concept, Solitaire - Signature Private Dining for up to 8 people, gives you a royal feeling with its high paneled walls, copper and gold adorned décor, a beautiful glass chandelier, royal blue cushioned chairs, and added complimentary benefits.",
        highlight: "This is no mere private room - it's an ultra-exclusive and luxurious experience that will cater to your every need.",
        features: [
            "Private, elegant, and exquisite dining room",
            "Non-alcoholic welcome beverage & unlimited complimentary water",
            "Premium furniture, luxury crockery, and specialized cutlery",
            "Cozy ambiance with soft music and dim lights",
            "Warm/cold face towels & Exclusive butler service",
            "55\" personal smart TV for screenings/presentations",
            "Magazines, newspapers, and complimentary appetizers"
        ],
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSew_9JVCO3zvHdm7hCKHCIYnBI5FaIolngySo0ikvrsfmkKAw/viewform"
    },
    {
        id: 'ten-at-infinity',
        title: "10@Infinity",
        subtitle: "Semi-Private Dining",
        image: "/private-dining/ten-at-infinity.jpg",
        isLeft: false,
        description: "For those looking for a more cropped dining experience in casual surroundings, enjoy 10@Infinity Semi-Private Dining which is perfect for smaller groups of families, friends or colleagues with blush pink chairs and copper adorned white marble table with a modern approach to a metal chandelier.",
        highlight: "Available for up to 10 people with closed doors separating you from the rest, combining privacy with a modern atmosphere.",
        features: [
            "Non-alcoholic welcome beverage",
            "Two complimentary bottles of packaged drinking water",
            "Appetizers included",
            "Complimentary cake for birthdays and anniversaries",
            "43\" personal smart TV for screenings/presentations",
            "Selection of latest magazines"
        ],
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSew_9JVCO3zvHdm7hCKHCIYnBI5FaIolngySo0ikvrsfmkKAw/viewform"
    },
    {
        id: 'infinity',
        title: "Infinity",
        subtitle: "Events & Social Gatherings",
        image: "/private-dining/infinity.jpg",
        isLeft: true,
        description: "When it comes to looking for a venue for corporate events or social gatherings, look no further than Infinity on the first floor which accommodates up to 80 people*. Infinity has a custom-made all-glass wall on one side, with a wide variety of chairs, and sofas available to choose from for your comfort.",
        highlight: "A touch of Copperleaf Elegance makes everything distinctive. Motivated by the belief that a luxury dining experience is essential to a successful celebration.",
        features: [
            "Accommodates up to 80 people",
            "Custom-made all-glass panoramic wall",
            "Versatile seating with premium chairs and sofas",
            "Exquisite dining experience tailored for celebrations",
            "Buffet options available for Private Parties",
            "Ideal for Corporate Events and Social Gatherings"
        ],
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSew_9JVCO3zvHdm7hCKHCIYnBI5FaIolngySo0ikvrsfmkKAw/viewform"
    }
];

export default function PrivateDiningPage() {
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
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Exclusive Experiences</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-6">Private Dining</h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        From intimate signature dining to grand corporate celebrations, discover our curated spaces designed for privacy, luxury, and the ultimate culinary journey.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-40">
                    {diningOptions.map((option, index) => (
                        <motion.section
                            key={option.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col ${option.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                                    <Image
                                        src={option.image}
                                        alt={option.title}
                                        fill
                                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className="space-y-2">
                                    <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-amber-500 font-bold">
                                        {option.subtitle}
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">{option.title}</h2>
                                    <div className="w-16 h-1 bg-amber-500"></div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-gray-300 leading-relaxed font-light text-lg">
                                        {option.description}
                                    </p>
                                    <p className="text-white font-serif italic text-lg border-l-2 border-amber-500/50 pl-6 py-2">
                                        {option.highlight}
                                    </p>

                                    <ul className="grid grid-cols-1 gap-3 pt-4">
                                        {option.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3">
                                                <div className="size-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-gray-400 font-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-8">
                                        <Link
                                            href={option.ctaLink}
                                            target="_blank"
                                            className="inline-flex items-center justify-center px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 rounded-sm group"
                                        >
                                            Book This Experience
                                            <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
