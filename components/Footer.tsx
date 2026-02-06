'use client';
import { restaurantData } from '@/data/restaurantData';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <h2 className="text-3xl font-serif font-bold tracking-widest mb-12">{restaurantData.footer.brand.name}</h2>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
                    <div className="space-y-4">
                        <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-6">{restaurantData.footer.address.title}</h5>
                        <p className="text-gray-400 font-light leading-relaxed">
                            {restaurantData.footer.address.lines.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-6">{restaurantData.footer.hours.title}</h5>
                        <p className="text-gray-400 font-light leading-relaxed">
                            {restaurantData.footer.hours.lines.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-6">{restaurantData.footer.contact.title}</h5>
                        <p className="text-gray-400 font-light leading-relaxed">
                            {restaurantData.footer.contact.lines.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-8" />

                <p className="text-gray-600 text-xs tracking-widest uppercase">
                    {restaurantData.footer.copyright}
                </p>
            </div>
        </footer>
    );
}
