import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">
                            Siddartha <span className="text-primary">Cinemas</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the magic of cinema with cutting-edge technology and premium comfort. The best destination for movie lovers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#movies" className="text-gray-400 hover:text-primary text-sm transition-colors">Now Showing</a></li>
                            <li><a href="#upcoming" className="text-gray-400 hover:text-primary text-sm transition-colors">Coming Soon</a></li>
                            <li><a href="https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-sm transition-colors">Book Now</a></li>
                            <li><a href="#location" className="text-gray-400 hover:text-primary text-sm transition-colors">Location</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <a
                                    href="https://www.google.com/maps/place/Siddartha+Cinemas+4K+Dolby/@13.5585595,78.497825,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb266744a1ed5ad:0xbdaff84869d4fe0d!8m2!3d13.5585543!4d78.5004053!16s%2Fg%2F11bvt4_x6_?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    Society Colony Main Rd, Marpuri Street, Madanapalle, Andhra Pradesh 517325, India
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+919440272557" className="hover:text-primary transition-colors">+91 94402 72557</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:siddarthacinemas@gmail.com" className="hover:text-primary transition-colors">siddarthacinemas@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/siddarthacinemas_madanapalle/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/SiddarthaCinemas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Siddartha Cinemas. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
