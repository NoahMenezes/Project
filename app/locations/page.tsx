'use client';
import { useState, Suspense, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
    Map,
    MapMarker,
    MarkerContent,
    MarkerPopup,
    MarkerTooltip,
} from "@/components/ui/map";

function LocationsContent() {
    const searchParams = useSearchParams();
    const locParam = searchParams.get('loc');
    const [activeLocation, setActiveLocation] = useState('Porvorim');

    useEffect(() => {
        if (locParam === 'Panaji' || locParam === 'Porvorim') {
            // eslint-disable-next-line
            setActiveLocation(locParam);
        }
    }, [locParam]);

    const locations = {
        Porvorim: {
            title: "Copperleaf Porvorim",
            description: "Copperleaf Porvorim, is a multi-cuisine fine dining restaurant with a bar located on Chogm Road, Porvorim. Copperleaf Porvorim is the first outlet opened in 2016 with 180 seats. We have served more than 1.5 million (15 lacs) happy customers till date. Copperleaf has been awarded 19 awards at the State and National level in the last 6 years.",
            seating: [
                { name: "The Pavilion", detail: "Ground Floor Main Dining" },
                { name: "Pepper", detail: "Mezzanine Floor Elegance" },
                { name: "Mint (Private Dining)", detail: "Exclusivity for 30-35 Pax" },
                { name: "Solaris", detail: "First Floor - Up to 50 Pax" }
            ],
            features: ["Multi-Cuisine", "Full Bar", "Delivery & Takeaway", "Mezzanine Seating"],
            lat: 15.5388808,
            lng: 73.8184801
        },
        Panaji: {
            title: "Copperleaf Panaji",
            description: "Copperleaf Panaji, the second outlet opened in 2021 is located on the outskirts of Panaji on the St. Inez-Taleigao Road. Copperleaf Panaji is one of the biggest 300-seater Fine – Dining Restaurant, with spacious seating, spread across 10,000 sq. ft. of Ground & First Floors.",
            seating: [
                { name: "Cilantro", detail: "Ground Floor Dining" },
                { name: "Citrus", detail: "Bright & Airy Seating" },
                { name: "Bellini Seating Bar", detail: "Signature First Floor Bar" },
                { name: "Infinity Seating Area", detail: "Panoramic First Floor View" },
                { name: "Solitaire Signature", detail: "Private Dining Excellence" }
            ],
            features: [
                "Wheelchair Accessible", "10,000 Sq. Ft.", "International Standard Washrooms",
                "Grab Bars in Washrooms", "Baby Changing Station", "Private Dining Rooms"
            ],
            lat: 15.4821284,
            lng: 73.8200714
        }
    };

    const activeLoc = locations[activeLocation as keyof typeof locations];

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
                    key="background-video"
                >
                    <source src="/fire-mastery.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Presence</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-4">Our Locations</h1>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
                    {Object.keys(locations).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveLocation(key)}
                            className={`text-xl md:text-2xl px-12 py-4 uppercase tracking-[0.2em] transition-all duration-500 rounded-full border border-white/10 ${activeLocation === key
                                ? 'bg-amber-600 border-amber-500 text-white shadow-[0_0_30px_rgba(217,119,6,0.3)]'
                                : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'}`}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto mb-20">
                    <div className="bg-white/5 backdrop-blur-3xl p-8 md:p-16 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight italic">{activeLoc.title}</h2>
                                    <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                                        {activeLoc.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-xs text-amber-500 font-bold uppercase tracking-[0.3em]">Signature Dining Areas</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {activeLoc.seating.map((area, i) => (
                                            <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-sm group hover:border-amber-500/30 transition-all">
                                                <p className="text-white font-bold text-sm tracking-wide group-hover:text-amber-500 transition-colors uppercase">{area.name}</p>
                                                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{area.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-xs text-amber-500 font-bold uppercase tracking-[0.3em]">Premium Amenities</p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeLoc.features.map((feat, i) => (
                                            <span key={i} className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="h-[600px] w-full border border-white/10 rounded-sm overflow-hidden bg-black/40 shadow-2xl relative">
                                    <Map
                                        center={[activeLoc.lng, activeLoc.lat] as [number, number]}
                                        zoom={15}
                                        key={activeLocation}
                                    >
                                        <MapMarker
                                            longitude={activeLoc.lng}
                                            latitude={activeLoc.lat}
                                        >
                                            <MarkerContent>
                                                <div className="size-6 rounded-full border-2 border-white shadow-lg bg-amber-500 animate-pulse" />
                                            </MarkerContent>
                                            <MarkerTooltip>{activeLoc.title}</MarkerTooltip>
                                            <MarkerPopup>
                                                <div className="space-y-2 p-3 bg-black/90 text-white rounded-sm border border-amber-500/20">
                                                    <p className="font-bold text-amber-500 uppercase text-xs tracking-wider">{activeLoc.title}</p>
                                                    <p className="text-[10px] opacity-70 uppercase tracking-widest">
                                                        Visit Us Today
                                                    </p>
                                                </div>
                                            </MarkerPopup>
                                        </MapMarker>
                                    </Map>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${activeLoc.lat},${activeLoc.lng}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-sm hover:bg-amber-500 hover:text-white transition-all duration-300"
                                    >
                                        Get Directions
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="flex-1 text-center py-4 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        Book Table
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default function LocationsPage() {
    return (
        <Suspense fallback={<div className="bg-black min-h-screen"></div>}>
            <LocationsContent />
        </Suspense>
    );
}
