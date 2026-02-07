'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const jobs = [
    {
        title: "Front of House",
        roles: ["Restaurant Manager", "Host/Hostess", "Head Steward", "Service Steward"],
        description: "Be the face of Copperleaf. We look for individuals with exceptional communication skills, a warm personality, and a passion for guest satisfaction."
    },
    {
        title: "Culinary Team",
        roles: ["Executive Chef", "Sous Chef", "Chef De Partie", "Commi I / II / III"],
        description: "Join our award-winning kitchen. We need creative minds and disciplined hands to maintain our signature multi-cuisine standards."
    },
    {
        title: "Hospitality & Management",
        roles: ["HR Executive", "Accountant", "Operations Manager", "Public Relations"],
        description: "Support our growing group behind the scenes. Ideal for professionals looking to build or grow their career in the hospitality corporate sector."
    }
];

export default function CareersPage() {
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
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Join Our Family</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">Careers</h1>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12">
                        At Copperleaf, we don't just offer jobs; we offer careers. We are looking for passionate, driven, and hospitable individuals to join Goa&apos;s most cherished restaurant brand.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://wa.me/919175018461?text=Hi+Copperleaf+HR!+I'm+interested+in+applying+for+a+career+opportunity+at+Copperleaf.+Please+let+me+know+the+available+openings."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 rounded-sm shadow-xl shadow-emerald-900/20 flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.92c1.516.903 3.036 1.373 4.632 1.373 5.338 0 9.682-4.344 9.682-9.686.001-5.341-4.344-9.685-9.686-9.685-5.341 0-9.684 4.344-9.684 9.685 0 1.696.471 3.328 1.364 4.757l-.993 3.633 3.687-.938zm12.42-7.391c-.328-.164-1.939-.956-2.239-1.065-.301-.109-.519-.164-.737.164-.219.328-.847 1.065-1.039 1.284-.191.218-.383.246-.71.082-.328-.164-1.383-.51-2.634-1.627-.973-.867-1.63-1.939-1.821-2.266-.191-.328-.021-.506.143-.669.148-.147.328-.383.492-.574.164-.191.219-.328.328-.546.109-.219.055-.409-.027-.574-.082-.164-.737-1.774-1.011-2.429-.267-.641-.539-.554-.737-.564-.191-.01-.409-.011-.628-.011-.219 0-.573.082-.874.409-.301.328-1.147 1.119-1.147 2.729 0 1.61 1.174 3.166 1.338 3.384.164.218 2.31 3.527 5.596 4.949.782.339 1.391.541 1.866.691.786.25 1.5.215 2.064.13.629-.094 1.939-.792 2.212-1.556.273-.765.273-1.419.191-1.557-.082-.138-.3-.219-.628-.383z" /></svg>
                            WhatsApp HR
                        </a>
                        <a
                            href="tel:+919175018461"
                            className="px-10 py-4 bg-white/5 border border-white/20 hover:bg-white hover:text-black text-white text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 rounded-sm"
                        >
                            Call HR Team
                        </a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-3xl p-10 border border-white/10 rounded-sm shadow-2xl hover:border-amber-500/50 transition-all duration-500 flex flex-col"
                        >
                            <h3 className="text-2xl font-serif font-bold text-amber-500 mb-6 uppercase tracking-tight">{job.title}</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                                {job.description}
                            </p>

                            <div className="space-y-3 pb-8 mb-8 border-b border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Key Roles</p>
                                <ul className="space-y-2">
                                    {job.roles.map((role, rIndex) => (
                                        <li key={rIndex} className="text-xs text-white/80 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/919175018461?text=Hi+Copperleaf+HR!+I'm+interested+in+applying+for+a+${encodeURIComponent(job.title)}+role.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center py-3 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-500/20 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm"
                            >
                                Apply Now
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-20 bg-amber-600/10 border border-amber-600/30 rounded-sm text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Didn&apos;t find what you&apos;re looking for?</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 font-light leading-relaxed mb-10">
                        We are always growing and looking for exceptional talent. If you believe you have what it takes to be a part of Copperleaf, send us your resume and we&apos;ll keep you in our talent pool for future opportunities.
                    </p>
                    <a
                        href="https://wa.me/919527828637?text=Hi!+I'm+interested+in+a+career+at+Copperleaf+and+would+like+to+send+my+CV+for+review."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-4 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-sm"
                    >
                        Send Your CV
                    </a>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
