'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function FBDataDeletionPage() {
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Subtle background */}
            <div className="fixed inset-0 z-0 bg-black">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/edible-art.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-3xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-sm shadow-2xl"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Platform Integration</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-8">FB Data Deletion Instructions</h1>
                    <div className="w-16 h-1 bg-amber-500 mb-12"></div>

                    <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed space-y-8">
                        <section className="space-y-6">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">How to remove your data</h2>
                            <p className="text-lg">
                                Copperleaf uses a Facebook login app to authenticate our users on Copperleaf App. Copperleaf does not save your personal data on our server.
                            </p>
                            <p>
                                According to Facebook policy, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL.
                            </p>
                            <p>If you want to delete your activities for Copperleaf's Facebook login app, you can remove your information by following these steps:</p>
                        </section>

                        <section className="space-y-4 bg-white/5 p-8 rounded-sm border border-white/10">
                            {[
                                'Go to your Facebook Account&rsquo;s &ldquo;Settings & Privacy&rdquo;.',
                                'Click “Settings”',
                                'Then click “Security and Login”.',
                                'Look for “Apps and Websites” and you will see all of the apps and websites you have linked with your Facebook account.',
                                'Search and Click “Copperleaf” in the search bar.',
                                'Scroll and click “Remove”.'
                            ].map((step, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 shrink-0"></div>
                                    <span className="text-sm md:text-base">{step}</span>
                                </div>
                            ))}
                        </section>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
