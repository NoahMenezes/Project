'use client';
import { motion } from 'framer-motion';
import { restaurantData } from '@/data/restaurantData';

const ShowcaseSection = ({ videoPath, title, subtitle, align = 'center' }: any) => (
    <section className="relative w-full h-[80vh] bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
        {/* Fallback pattern or video */}
        <div className="absolute inset-0 bg-neutral-900" />
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
            <source src={videoPath} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-10%" }} transition={{ duration: 0.8 }}
            className={`relative z-10 max-w-7xl mx-auto px-6 w-full ${align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'}`}
        >
            <div className={`max-w-2xl ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}>
                <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-6">{title}</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">{subtitle}</p>
            </div>
        </motion.div>
    </section>
);

export default function CloseupGalleryVideo() {
    return (
        <div className="bg-black text-white relative z-20">
            <div className="py-32 text-center bg-zinc-950">
                <h3 className="text-xs font-bold text-amber-500 mb-6 tracking-[0.3em] uppercase">{restaurantData.showcase.heading.subtitle}</h3>
                <p className="text-5xl md:text-7xl font-serif tracking-tight text-white max-w-4xl mx-auto leading-none">
                    {restaurantData.showcase.heading.title} <span className="text-amber-500/80 italic block mt-2">{restaurantData.showcase.heading.highlight}</span>
                </p>
            </div>

            {restaurantData.showcase.items.map((item, index) => (
                <ShowcaseSection
                    key={index}
                    videoPath={item.videoPath}
                    title={item.title}
                    subtitle={item.subtitle}
                    align={item.align}
                />
            ))}

            {/* Spotlight CTA */}
            <section className="py-40 bg-zinc-950 text-center px-6">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-4xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-serif text-white mb-12 tracking-tight">{restaurantData.showcase.cta.title}</h2>
                    <button className="px-12 py-5 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-amber-100 transition duration-300">
                        {restaurantData.showcase.cta.button}
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
