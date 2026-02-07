'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ARPrivacyPolicyPage() {
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Subtle background */}
            <div className="fixed inset-0 z-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-sm shadow-2xl"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Application Policy</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-8">Copperleaf AR Menu App Privacy Policy</h1>
                    <div className="w-16 h-1 bg-amber-500 mb-12"></div>

                    <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed space-y-8">
                        <section>
                            <p className="text-lg font-medium text-white mb-4">Your privacy is critically important to us.</p>
                            <p>
                                This privacy policy applies to the Copperleaf AR Menu app (hereby referred to as "Application") for mobile devices that was created by Megalon Software Pvt. Ltd. (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Information Collection and Use</h2>
                            <p>The Application collects information when you download and use it. This information may include information such as:</p>
                            <ul className="list-none space-y-3 p-0">
                                {[
                                    "Your device's Internet Protocol address (e.g. IP address)",
                                    "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages",
                                    "The time spent on the Application",
                                    "The operating system you use on your mobile device",
                                    "Your camera feed only for AR rendering and tracking. No images or videos are recorded, stored, or shared.",
                                    "Caches 3D models, textures, and AR assets locally on your device for smoother performance. No personal files are accessed, collected, or uploaded."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>The Application does not gather precise information about the location of your mobile device.</p>
                            <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Third Party Access</h2>
                            <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
                            <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
                            <ul className="flex flex-wrap gap-4 list-none p-0">
                                <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Google Play Services</a></li>
                                <li><a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Unity</a></li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Opt-Out Rights</h2>
                            <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Data Retention Policy</h2>
                            <p>The Service Provider will retain User Provided data for as long as you use the Application. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <span className="text-amber-500">info@megalon.in</span> and they will respond in a reasonable time.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Children</h2>
                            <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Security</h2>
                            <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Changes</h2>
                            <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. This privacy policy is effective as of <span className="text-white font-medium">2025-08-27</span>.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Your Consent</h2>
                            <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
                        </section>

                        <section className="pt-8 border-t border-white/10">
                            <h2 className="text-xl font-serif font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h2>
                            <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at:</p>
                            <p className="text-amber-500 font-bold text-lg">info@megalon.in</p>
                        </section>

                        <p className="text-[10px] text-gray-500 uppercase tracking-widest pt-8">
                            This privacy policy page was generated by App Privacy Policy Generator
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
