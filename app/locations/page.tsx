'use client';
import { useState, Suspense, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';

import {
    Map,
    MapMarker,
    MarkerContent,
    MarkerPopup,
    MarkerTooltip,
} from "@/components/ui/map";
import { restaurantData } from '@/data/restaurantData';

function LocationsContent() {
    const searchParams = useSearchParams();
    const locParam = searchParams.get('loc');
    const [activeLocation, setActiveLocation] = useState('Porvorim');

    useEffect(() => {
        if (locParam === 'Panaji' || locParam === 'Porvorim') {
            setActiveLocation(locParam);
        }
    }, [locParam]);

    const locations = {
        Porvorim: {
            title: "Copperleaf Porvorim",
            description: "Copperleaf Porvorim, is a multi-cuisine fine dining restaurant with a bar located on Chogm Road, Porvorim. Copperleaf Porvorim is the first outlet opened in 2016 with 180 seats. We have served more than 1.5 million (15 lacs) happy customers till date. Copperleaf has been awarded 19 awards at the State and National level in the last 6 years. The Porvorim outlet has 4 seating areas. The Pavillion is on the ground floor, Pepper on the mezzanine floor with a Private Dining Area – Mint – for 30 to 35 pax. Solaris is a new dining area located on the first floor for up to 50 pax. Porvorim outlet also offers Delivery & Takeaway services.",
            lat: 15.5342,
            lng: 73.8188
        },
        Panaji: {
            title: "Copperleaf Panaji",
            description: "Copperleaf Panaji, the second outlet opened in 2021 is located on the outskirts of Panaji on the St. Inez-Taleigao Road. Copperleaf Panaji is one of the biggest 300-seater Fine – Dining Restaurant, with spacious seating, spread across 10,000 sq. ft. of Ground & First Floors. It has two dining areas called Cilantro and Citrus on the ground floor. On the first floor there is Infinity dining area, Bellini seating bar, 10@Infinity Semi-Private Dining Room and Solitaire Signature Private Dining Room. It is an ideal location for Corporate Lunch / Dinner and all kinds of Celebrations – Birthdays, Anniversaries, Reunions, with a soothing atmosphere for families and groups. The facility includes 5 star Amenities, such as Splendid International Standard Washrooms, Wheelchair Accessible Entrance, Wheelchair Accessible Washrooms, Grab Bars in Washrooms as well as Baby Diaper / Nappy Changing Station. Panaji outlet also offers Delivery & Takeaway services.",
            lat: 15.4821284,
            lng: 73.8200714
        }
    };

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
                    className="w-full h-full object-cover opacity-40"
                    key="background-video"
                >
                    <source src="/fire-mastery.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 px-6 max-w-7xl mx-auto w-full">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-16 tracking-tight">Our Locations</h1>

                <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
                    <button
                        onClick={() => setActiveLocation('Porvorim')}
                        className={`text-xl md:text-2xl px-8 py-4 uppercase tracking-[0.2em] transition-all duration-300 border-b-2 ${activeLocation === 'Porvorim' ? 'border-amber-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        Porvorim
                    </button>
                    <button
                        onClick={() => setActiveLocation('Panaji')}
                        className={`text-xl md:text-2xl px-8 py-4 uppercase tracking-[0.2em] transition-all duration-300 border-b-2 ${activeLocation === 'Panaji' ? 'border-amber-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        Panaji
                    </button>
                </div>

                <div className="max-w-4xl mx-auto mb-20">
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-sm">
                        <h2 className="text-3xl font-serif text-amber-500 mb-6">{locations[activeLocation as keyof typeof locations].title}</h2>
                        <p className="text-lg text-gray-300 leading-relaxed font-light">
                            {locations[activeLocation as keyof typeof locations].description}
                        </p>

                        {activeLocation === 'Panaji' && (
                            <div className="h-[500px] w-full border border-white/10 rounded-sm overflow-hidden bg-black/40 mt-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                                <Map
                                    center={[locations.Panaji.lng, locations.Panaji.lat] as [number, number]}
                                    zoom={15}
                                >
                                    <MapMarker
                                        longitude={locations.Panaji.lng}
                                        latitude={locations.Panaji.lat}
                                    >
                                        <MarkerContent>
                                            <div className="size-5 rounded-full border-2 border-white shadow-lg bg-amber-500 animate-pulse" />
                                        </MarkerContent>
                                        <MarkerTooltip>{locations.Panaji.title}</MarkerTooltip>
                                        <MarkerPopup>
                                            <div className="space-y-1 p-2 bg-black/90 text-white rounded-sm border border-amber-500/20">
                                                <p className="font-medium text-amber-500">{locations.Panaji.title}</p>
                                                <p className="text-xs opacity-70">
                                                    Visit Us in Panaji
                                                </p>
                                            </div>
                                        </MarkerPopup>
                                    </MapMarker>
                                </Map>
                            </div>
                        )}
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
