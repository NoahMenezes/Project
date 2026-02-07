import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PremiumModal from '@/components/PremiumModal';

export default function EliteClubPage() {
    const [showModal, setShowModal] = useState(false);
    const [loadCount, setLoadCount] = useState(0);

    const handleIframeLoad = () => {
        setLoadCount(prev => prev + 1);
        if (loadCount > 0) {
            setShowModal(true);
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
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/fire-mastery.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 px-6 max-w-5xl mx-auto w-full mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 tracking-[0.3em] font-bold text-xs uppercase mb-4 block">Loyalty Membership Program</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight">Copperleaf Elite Club</h1>

                    <div className="bg-amber-600/10 backdrop-blur-md border border-amber-600/30 p-8 rounded-sm mb-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
                        <p className="text-amber-400 font-bold tracking-wide text-sm leading-relaxed">
                            NOTE: We are currently NOT accepting BLUE Membership requests till further notice. If you are an existing BLUE Member and your membership is still active, kindly continue to use the benefits.
                        </p>
                        <p className="text-amber-400/80 text-xs mt-4 leading-relaxed font-light">
                            If your membership is about to expire or already expired, kindly contact our team. Please ensure you renew your memberships on or before the expiration date to maintain your status.
                        </p>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                        Copperleaf Elite Club is our premier loyalty program designed to reward our most cherished guests with a world of exclusive benefits, prioritized service, and unparalleled perks.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    <BenefitCard
                        title="WELCOME REWARDS"
                        description="New members can earn up to 5,000* bonus points upon successful enrolment. This serves as a warm invitation to begin your elevated culinary journey with us, instantly unlocking a head start towards your first redemption."
                    />
                    <BenefitCard
                        title="CASHBACK BENEFITS"
                        description="Earn substantial cashback on every purchase across all Copperleaf outlets. With tiers offering up to 50%* cashback, your dining experiences translate into meaningful savings for your future visits."
                    />
                    <BenefitCard
                        title="F&B DISCOUNTS"
                        description="Enjoy curated discounts on food and beverages. Elite members receive up to 25%* off their total bill, ensuring that every meal—from casual lunches to festive dinners—is both exquisite and exceptional in value."
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-3xl p-10 md:p-16 border border-white/10 rounded-sm mb-24 shadow-2xl"
                >
                    <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-amber-500 font-bold mb-6">
                        Tiered Privilege
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight italic">Other Exclusive Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 font-light leading-relaxed">
                                Membership extends far beyond simple points. Enjoy dedicated Table Allocation Priority, seamless Points Redemption, and special incentives for your Birthdays and Anniversaries.
                            </p>
                            <p className="text-lg text-gray-300 font-light leading-relaxed">
                                Elite members also enjoy a Premise Charge Waive Off* for our 10@Infinity semi-private space and Solitaire Signature Private Dining, along with invitations to exclusive in-house events.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-xl text-amber-500 italic font-medium leading-relaxed border-l-2 border-amber-500 pl-8">
                                "If you are a regular guest, joining the Elite Club is the definitive way to enhance your Copperleaf experience with a touch of royal hospitality."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Form Embedding */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full h-[900px] border border-white/10 rounded-sm bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl p-1"
                >
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe2m9eptyRyn2nDCdRHBhvAx8_eI5pAQtcFXmqN6dbImkcwvA/viewform?embedded=true"
                        onLoad={handleIframeLoad}
                        className="w-full h-full border-none"
                        title="Elite Club Membership Form"
                    >
                        Loading…
                    </iframe>
                </motion.div>
            </div>

            <Footer />

            <PremiumModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Application Received"
                message="Thank you for your interest in the Copperleaf Elite Club. Your application has been successfully submitted. Our membership team will review your details and reach out to you within 48 hours."
            />
        </main>
    );
}

function BenefitCard({ title, description }: { title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-sm hover:border-amber-500/50 transition-all duration-500 group shadow-lg"
        >
            <div className="w-8 h-8 rounded-full border border-amber-500/20 flex items-center justify-center mb-8 group-hover:bg-amber-500/10 transition-colors">
                <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
            </div>
            <h3 className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase mb-6">{title}</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}
