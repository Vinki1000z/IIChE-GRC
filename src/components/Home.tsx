import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import iiche_logo from './Images/iiche-Logo.png';
import iitg_logo from './Images/iitg-Logo.png';
import { Mail, Instagram, Linkedin, Youtube,MapPin } from 'lucide-react';
export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = [
        {
            title: "Indian Institute of Chemical Engineers",
            location: "Chandigarh, India",
            img: iiche_logo
        },
        {
            title: "Indian Institute of Technology Chandigarh",
            location: "Assam, India",
            img: iitg_logo
        }
    ];

    const bgImage = "https://images.shiksha.com/mediadata/images/1557746835phpD5Qz2C.jpeg";

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-[80vh]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />

                <div className="absolute inset-0 bg-black/40">
                    <div className="container mx-auto h-full flex flex-col justify-center items-center px-4">
                        {/* Animated Logo */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={content[currentIndex].img}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.8 }}
                                className="mb-6"
                            >
                                <img
                                    src={content[currentIndex].img}
                                    alt={content[currentIndex].title}
                                    className="w-24 h-24 object-contain rounded-lg shadow-lg"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Animated Title */}
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={content[currentIndex].title}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 bg-black/30 px-6 py-3 rounded"
                            >
                                {content[currentIndex].title}
                            </motion.h1>
                        </AnimatePresence>

                        {/* Animated Location */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={content[currentIndex].location}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.8 }}
                                className="flex items-center space-x-2 bg-sky-500/90 text-white text-xl px-6 py-2 rounded"
                            >
                                <MapPin className="w-5 h-5" />
                                <span>{content[currentIndex].location}</span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 space-y-6">

                <div className="bg-sky-50 p-4" data-aos="fade-up">
                    <h1 className="text-sky-800 text-2xl font-medium">Indian Institute of Chemical Engineers</h1>
                </div>

                <div className="space-y-4" >
                    <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
                        Indian Institute of Chemical Engineers (IIChE) is the apex professional body of Chemical Engineers in India. It was established in 1947 by Dr. H. L. Roy, a pioneer of chemical engineering education in India, along with a few other stalwarts. The Institute has emerged as a national platform overseeing the interest of the academia, research scholar and the industry in the multifarious fields of chemical engineering and allied sciences and has developed a distinct profile of its own which is ever-changing. Today, it has around 15,000 members. The activities of IIChE are spread across the country through its 40 regional centers and 58 Student Chapters, apart from the HQ located at the Jadavpur University campus in Kolkata. The present president of IIChE is Professor V K Srivastava. IIChE professionals from Academia, research institutes and industry work for the well being of the society, through application of chemical engineering. The Institute is recognized by the Department of Science and Technology (DST), Government of India, as a Scientific and Industrial Research Organization. The Annual Session of the Institute, popularly known as the Chemical Engineering Congress (CHEMCON), is the most important event in the calender of the IIChE.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 space-y-6">
                <div className="bg-sky-50 p-4" data-aos="fade-up">
                    <h1 className="text-sky-800 text-2xl font-medium">Chandigarh Regional Centre (GRC)</h1>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
                        It is one of the most active regional centres of IIChE, HQ of which is located in the Department of Chemical Engineering, IIT Chandigarh. GRC is involved in the benefit of chemical engineers in North-eastern states through organizing meetings, conferences and seminars, arranging workshops and plant visits, refresher courses and counseling sessions, promoting research, confer awards and prizes, guiding chemical engineering students in their carrer planning, and initiating activities for the betterment of the social, technical and professional standards of their members.
                    </p>
                </div>
            </div>
        </div>
    );
}
