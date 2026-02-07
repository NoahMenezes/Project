'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const awards = [
    {
        year: "2023",
        title: "Best Seafood Experience (Goa)",
        organization: "Food Connoisseurs India Awards (West)",
        issuer: "Industry Live",
        description: "Awarded for exceptional culinary standards and authentic Goan seafood excellence."
    },
    {
        year: "2022",
        title: "Businessman of the Year",
        organization: "Sachin S. Pai Bir",
        issuer: "Incredible Goa",
        description: "Excellence in Restaurant Business - recognizing visionary leadership in the hospitality sector."
    },
    {
        year: "2022",
        title: "New Restaurant of the Year",
        organization: "Business Goa",
        issuer: "Business Goa Awards",
        description: "Honored as the most promising new dining destination in the state."
    },
    {
        year: "2021",
        title: "Best of the Best",
        organization: "Tripadvisor Travellers' Choice",
        issuer: "Tripadvisor",
        description: "Recognized among the top 1% of restaurants worldwide based on guest reviews."
    },
    {
        year: "2021",
        title: "Best Restaurant of the Year (West)",
        organization: "Food Connoisseurs India Awards",
        issuer: "Industry Live",
        description: "Celebrating the finest dining experience in the Western region of India."
    },
    {
        year: "2021",
        title: "Best Goan Cuisine Restaurant",
        organization: "Food Connoisseurs India Awards",
        issuer: "Industry Live",
        description: "Recognized for preserving and elevating authentic Goan flavors with culinary mastery."
    },
    {
        year: "2021",
        title: "Best Multi-Cuisine Casual Dining",
        organization: "Times Food Awards",
        issuer: "Times Group",
        description: "Awarded for excellence in variety, taste, and the ultimate casual dining experience."
    },
    {
        year: "2020",
        title: "Travellers' Choice",
        organization: "Tripadvisor",
        issuer: "Tripadvisor",
        description: "A testament to our consistent high ratings and positive reviews from global travellers."
    },
    {
        year: "2020",
        title: "Goa Winner",
        organization: "Times Food Awards",
        issuer: "Times Group",
        description: "Crowned as the premier dining destination in Goa for outstanding food and service."
    },
    {
        year: "2020",
        title: "Iconic Multi-Cuisine Restaurant",
        organization: "Times Food Delivery Icons",
        issuer: "Times Group",
        description: "Recognized for excellence in multi-cuisine offerings and reliable delivery standards."
    },
    {
        year: "2019",
        title: "Best Coastal Cuisine",
        organization: "Franchise India Restaurant Awards",
        issuer: "Franchise India",
        description: "Honored for excellence in coastal flavors and traditional culinary authenticity."
    },
    {
        year: "2019",
        title: "Iconic Seafood Restaurant",
        organization: "Times Hospitality Icons",
        issuer: "Times Group",
        description: "Recognized as a landmark destination for premium seafood in the region."
    },
    {
        year: "2018",
        title: "Goa State Best Brand Awards",
        organization: "Brand Leadership Award",
        issuer: "World CSR Day and CMO Asia",
        description: "Recognized for outstanding brand leadership and commitment to excellence."
    },
    {
        year: "2017",
        title: "Award for Corporate Excellence",
        organization: "Best in Indian Cuisine",
        issuer: "Business Goa",
        description: "Recognized for superior standards in Indian fine dining and corporate hospitality."
    },
    {
        year: "2017",
        title: "Goa Pride Award Winner",
        organization: "The Best Goan Fish Thali",
        issuer: "92.7 BIG FM",
        description: "Voted as the ultimate destination for the most authentic and loved Goan Fish Thali."
    },
    {
        year: "2017",
        title: "Most Popular Restaurant",
        organization: "Times Food Awards Goa Winner",
        issuer: "Times Food",
        description: "Voted as the state's most popular dining destination for its exceptional food and service."
    },
    {
        year: "2019",
        title: "Certificate of Excellence",
        organization: "Tripadvisor",
        issuer: "Tripadvisor",
        description: "Awarded for consistently delivering a superior customer experience and high-quality service."
    },
    {
        year: "2019",
        title: "50 Best Restaurants & Bars",
        organization: "Best Restaurant",
        issuer: "CEO Insights",
        description: "Recognized as one of the 50 best dining and bar establishments for quality and innovation."
    },
    {
        year: "2019",
        title: "Excellence in Hotel Industry",
        organization: "Gomantak Excellence Awards",
        issuer: "Gomantak",
        description: "Celebrating outstanding contributions and excellence within the Goa hospitality sector."
    },
    {
        year: "2018",
        title: "Certificate of Excellence",
        organization: "Tripadvisor",
        issuer: "Tripadvisor",
        description: "Honored for maintaining exceptional service standards and positive guest feedback."
    },
    {
        year: "2017",
        title: "Certificate of Excellence",
        organization: "Tripadvisor",
        issuer: "Tripadvisor",
        description: "Recognized early in our journey for commitment to hospitality and dining excellence."
    }
];

export default function AccoladesPage() {
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
                    className="text-center mb-20"
                >
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Journey of Excellence</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">Accolades</h1>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">
                        Since our inception in 2016, Copperleaf has been honored with numerous prestigious awards that reflect our commitment to culinary innovation and hospitality excellence. Each award represents our unwavering dedication to providing an "Ultimate Dining Experience."
                    </p>
                    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg font-light leading-relaxed">
                        From being recognized as the best seafood destination to winning multi-cuisine casual dining honors, our journey is a testament to the passion of our culinary team and the loyalty of our patrons across Goa and beyond.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-black border border-white/10 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-500 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
                        >
                            {/* Subtle hover overlay */}
                            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="mb-8 relative z-10">
                                <div className="w-32 h-32 rounded-full border-2 border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 bg-black">
                                    <div className="text-amber-500 text-4xl font-serif font-bold">{award.year}</div>
                                </div>
                                <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight relative z-10">
                                {award.title}
                            </h3>
                            <div className="text-amber-500 text-sm font-bold tracking-[0.1em] uppercase mb-4 relative z-10">
                                {award.organization}
                            </div>
                            <p className="text-gray-400 font-light text-sm leading-relaxed flex-grow relative z-10">
                                {award.description}
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/5 w-full relative z-10">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Issued by</span>
                                <div className="text-xs font-bold text-gray-300 mt-1">{award.issuer}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
