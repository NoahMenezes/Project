'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const founders = [
    {
        name: "Shreekant V. Pai Bir",
        title: "DIRECTOR / CHAIRMAN",
        bio: "A retired SBI banker, has been in the hospitality business in the initial years but he found his connect with the restaurant industry and has been in this sector for the last 20+ years. He is the father and mainly a guide to Sachin Pai Bir & Vishwanath Pai Bir. He is an alumnus of Bombay University.",
        image: "/about/shreekant.jpg"
    },
    {
        name: "Sachin S. Pai Bir",
        title: "DIRECTOR / CEO",
        bio: "Copperleaf is the brainchild of Sachin S. Pai Bir, who despite graduating as a Master of Engineering (ME) found his true calling in the Restaurant & Hotel industry and is passionately involved in it for the last 20+ years. He is the pioneer in setting trends in the restaurant industry & tirelessly transforming the Hospitality Industry. He is an alumnus of Goa College of Engineering (GEC) affiliated to Goa University.",
        image: "/about/sachin.jpg"
    },
    {
        name: "Vishwanath S. Pai Bir",
        title: "DIRECTOR / COO",
        bio: "Vishwanath is an engineer by profession with a Master of Science in IT Project Management from the United States. He has a wealth of experience in the IT industry, from startups to large corporations. Vishwanath was indirectly involved in the business since its inception, but after 11 years in the US, he decided to leave his six-figure IT job to focus on the business full-time. He is an alumnus of Goa College of Engineering (GEC), which is affiliated with Goa University.",
        image: "/about/vishwanath.jpg"
    }
];

const values = [
    {
        title: "FINE DINING",
        description: "We offer truly five star experience with Multi-Cuisine, delicious food, exceptional ambience, and excellent service."
    },
    {
        title: "EXOTIC FLAVOURS",
        description: "Consistency in Quality without compromising on taste, texture, garnishing, and quantity."
    },
    {
        title: "CULINARY VISION",
        description: "Customer Oriented Approach by accommodating custom requests and fulfilling them with utmost care and attention."
    }
];

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen relative font-rajdhani flex flex-col">
            <Navbar />

            {/* Background Video */}
            <div className="fixed inset-0 z-0 text-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex-grow pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Legacy</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">Who are we?</h1>

                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
                        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic border-l-4 border-amber-500 pl-8 mb-10">
                            VISHWAMUKTA is a multi-business venture comprising of Hotels, Restaurants, Real Estate, Educational, and IT businesses.
                        </p>
                        <div className="text-lg text-gray-400 font-light leading-relaxed text-left space-y-6">
                            <p>
                                VM was founded by Shreekant V. Pai Bir, Sachin S. Pai Bir, and Vishwanath S. Pai Bir in 2002 to venture into the hospitality business. The business was started with the management of Hotel Blessings in Panaji, Goa and now comprises of Copperleaf Multi-Cuisine Fine Dining Restaurant located at Porvorim and Panaji, Omkar Developers, VMPL, VME, and Megalon.
                            </p>
                            <p>
                                Copperleaf, Goa’s Favourite Restaurant, opened its first outlet in Porvorim in 2016 and its second outlet in Panaji in 2021. Since its inception, we have been privileged to serve more than 1.3+ million (13+ lacs) customers. Our mission is to celebrate the abundance of flavors as family and friends gather to enjoy a great meal together.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Mission & Philosophy */}
                <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight italic">Behind the Scenes</h2>
                        <div className="w-20 h-1 bg-amber-500"></div>
                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                            <p>
                                Our stewards are trained to guide you through a choice of vegetarian or non-vegetarian options and the various levels of spices, while our kitchens blend rich culinary instincts seamlessly to dish out a one-of-a-kind dining experience for you, every time!
                            </p>
                            <p>
                                The team at Copperleaf give it their best to serve perfection at your table every time your order comes in. We promise to tantalize your taste buds with our delicious food and create a feast for your eyes and senses.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] border border-white/10 rounded-sm overflow-hidden"
                    >
                        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                            <source src="/fire-mastery.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <p className="text-3xl md:text-4xl font-serif font-bold text-white text-center italic drop-shadow-2xl">
                                "Celebrating the abundance of flavors"
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Executive Team */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">FOUNDERS</h2>
                        <p className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs">Executive Team</p>
                        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6"></div>
                        <p className="text-gray-400 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
                            VISHWAMUKTA Group is guided by Mr. Shreekant V. Pai Bir and led by Mr. Sachin S. Pai Bir & Mr. Vishwanath S. Pai Bir. Our team of more than 200+ people in Goa works with a common ideology to transform the Hospitality Industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden flex flex-col group"
                            >
                                <div className="h-[400px] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                                        <h3 className="text-2xl font-serif font-bold text-white">{founder.name}</h3>
                                        <p className="text-amber-500 text-xs font-bold tracking-widest mt-1 uppercase">{founder.title}</p>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow">
                                    <p className="text-gray-400 font-light leading-relaxed text-sm italic">
                                        "{founder.bio}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* What makes us different */}
                <section className="mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 italic">The Copperleaf Promise</h2>
                        <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-sm hover:border-amber-500/30 transition-all duration-500 group relative"
                            >
                                <div className="w-12 h-12 rounded-full border border-amber-500/20 flex items-center justify-center mb-8 group-hover:bg-amber-500/10 transition-all">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                </div>
                                <h4 className="text-amber-500 font-bold tracking-[0.2em] text-sm uppercase mb-6">{value.title}</h4>
                                <p className="text-gray-300 font-light leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Discover Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-white/5 backdrop-blur-md p-16 border border-white/5 rounded-sm shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] -mr-32 -mt-32" />

                    <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">DISCOVER</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight italic">Unforgettable Memories</h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                        Relish the famous Copperleaf Fish Thali and enjoy traditional Goan food alongside a global palette of flavors. So that each of our preparations becomes an experience for you to cherish.
                    </p>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
