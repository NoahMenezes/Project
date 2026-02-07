'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function EliteClubPage() {
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Background Pattern/Overlay */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 to-transparent"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 px-6 max-w-5xl mx-auto w-full mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 tracking-[0.3em] font-bold text-xs uppercase mb-4 block">Loyalty Membership Program</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Copperleaf Elite Club</h1>

                    <div className="bg-amber-600/10 border border-amber-600/20 p-6 rounded-sm mb-8 max-w-3xl mx-auto">
                        <p className="text-amber-400 font-bold tracking-wide text-sm">
                            NOTE: We are currently NOT accepting BLUE Membership requests till further notice. If you are an existing BLUE Member and your membership is still active, kindly continue to use the benefits. But, if you are an existing BLUE Member and your membership is about to expire or already expired, then kindly contact our team. Kindly ensure you renew your memberships on or before the expiration date.
                        </p>
                    </div>

                    <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                        Copperleaf Elite Club is a loyalty membership program offered by Copperleaf. It is designed to reward our most loyal customers with exclusive benefits and perks.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <BenefitCard
                        title="WELCOME REWARDS"
                        description="Copperleaf Elite Club members can earn up to 5000* bonus points when they sign up. This is a great way to get a head start on earning points and unlocking exclusive benefits! Sign up today and start enjoying the benefits of Copperleaf Elite Club!"
                    />
                    <BenefitCard
                        title="CASHBACK"
                        description="Copperleaf Elite Club members can earn cashback on their purchases at Copperleaf. You can earn up to 50%* cashback. This cashback can be redeemed for discounts on future meals at Copperleaf outlets. The cashback benefit is a great way to save money on your meals at Copperleaf."
                    />
                    <BenefitCard
                        title="F&B DISCOUNTS"
                        description="Copperleaf Elite Club members can enjoy exclusive discounts on food and beverages at Copperleaf. Members can get up to 25%* discount on their entire bill. The food and beverage discounts benefit is a great way to save money on your meals at Copperleaf."
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white/5 backdrop-blur-md p-10 border border-white/10 rounded-sm mb-20"
                >
                    <h2 className="text-3xl font-serif text-white mb-6">OTHER BENEFITS</h2>
                    <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                        Points Redemption, Birthday Incentive, Anniversary Incentive, Table Allocation Priority, 10@Infinity Premise Charge Waive Off*, Solitaire Signature Private Dining Premise Charge Waive Off*, Special Invitation for in-house Events and so on.
                    </p>
                    <p className="text-lg text-amber-500 italic">
                        If you are a regular customer of Copperleaf, then we highly recommend joining the Copperleaf Elite Club Loyalty Membership Program. You can earn exclusive benefits and perks that will make your dining experience even more enjoyable.
                    </p>
                </motion.div>

                {/* Form Embedding */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-full h-[800px] border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe2m9eptyRyn2nDCdRHBhvAx8_eI5pAQtcFXmqN6dbImkcwvA/viewform?embedded=true"
                        className="w-full h-full border-none"
                        title="Elite Club Membership Form"
                    >
                        Loading…
                    </iframe>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}

function BenefitCard({ title, description }: { title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-amber-600/50 transition-colors"
        >
            <h3 className="text-amber-500 font-bold tracking-[0.2em] text-sm uppercase mb-6">{title}</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}
