'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h4 className="font-space font-bold text-white mb-4">{restaurantData.footer.brand.name}</h4>
                        <p className="text-gray-400 text-sm">{restaurantData.footer.brand.description}</p>
                    </div>
                    <div>
                        <h5 className="font-rajdhani font-bold text-white mb-4">{restaurantData.footer.address.title}</h5>
                        <p className="text-gray-400 text-sm">{restaurantData.footer.address.lines.map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                    </div>
                    <div>
                        <h5 className="font-rajdhani font-bold text-white mb-4">{restaurantData.footer.hours.title}</h5>
                        <p className="text-gray-400 text-sm">{restaurantData.footer.hours.lines.map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                    </div>
                    <div>
                        <h5 className="font-rajdhani font-bold text-white mb-4">{restaurantData.footer.contact.title}</h5>
                        <p className="text-gray-400 text-sm">{restaurantData.footer.contact.lines.map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm font-space">
                    {restaurantData.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
