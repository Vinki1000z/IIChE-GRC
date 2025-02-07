import { Mail, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';
export default function Footer() {
    return (
        <>

            {/* footer */}
            <footer className="bg-gray-900 text-white pt-8" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Subscribe Column */}
                    <div className="space-y-4">
                        <h2 className="text-purple-400 text-xl font-semibold">Subscribe to IIChE</h2>
                        <p className="text-gray-300">Receive Important Updates and Newsletter</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="bg-transparent border-b border-gray-600 px-2 py-1 flex-grow focus:outline-none focus:border-purple-400"
                            />
                            <button className="bg-purple-600 px-4 py-1 rounded hover:bg-purple-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex gap-6 pt-4">
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Us Column */}
                    <div className="space-y-4 ">
                        <h2 className="text-purple-400 text-xl font-semibold">Contact Us</h2>
                        <p className="text-gray-300">
                            Indian Institute of Chemical Engineers,Dr SS Bhatnagar University Chandigarh
                        </p>
                        <div className="pt-4">
                            <img
                                src="/api/placeholder/400/200"
                                alt="Location Map"
                                className="rounded-lg w-full max-w-sm"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Mail size={16} />
                            <span>Mail us at :- ssbuicet.pu@gmail.com</span>
                        </div>
                    </div>

                    {/* Important Links Column */}
                    <div className="space-y-4">
                        <h2 className="text-purple-400 text-xl font-semibold">Important Links</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Industrial Visit
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Educational Visit
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Invited Talk
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Workshops
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Other Events
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Contact Us
                                </a>
                            </div>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Notice
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → Gallery
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-purple-400">
                                    → NewsLetters
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-800">
                    <div className="flex justify-between items-center">
                        {/* <span className="text-gray-400">IGNITEX SOLUTIONS PVT. LTD.</span> */}
                        <span className="text-gray-400 flex items-center gap-1">
                            Made with <span className="text-red-500">❤</span> IIChE 2024
                        </span>
                    </div>
                </div>
            </footer>
            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            >
                ↑
            </button>
        </>
             
    )
}