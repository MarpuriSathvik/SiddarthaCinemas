import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-24 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in-up">Find Us</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                        Visit <span className="text-primary">Siddartha</span> Cinemas
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto animate-fade-in-up delay-200"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map Container */}
                    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 animate-fade-in-up delay-300 relative group">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none z-10"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.625433582193!2d78.5004053!3d13.558554299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb266744a1ed5ad%3A0xbdaff84869d4fe0d!2sSiddartha%20Cinemas%204K%20Dolby!5e0!3m2!1sen!2sus!4v1770578586545!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Siddartha Cinemas Location"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-10 animate-fade-in-up delay-400">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Experience the best of cinema at our state-of-the-art facility. We are conveniently located in the heart of Madanapalle, easily accessible from all parts of the city.
                        </p>

                        <div className="grid gap-6">
                            <a
                                href="https://www.google.com/maps/place/Siddartha+Cinemas+4K+Dolby/@13.5585595,78.497825,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb266744a1ed5ad:0xbdaff84869d4fe0d!8m2!3d13.5585543!4d78.5004053!16s%2Fg%2F11bvt4_x6_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-6 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-colors group cursor-pointer"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Our Location</h4>
                                    <p className="text-gray-400 text-sm">Siddartha Cinemas, Marpuri street Rd, Madanapalle</p>
                                </div>
                            </a>

                            <a
                                href="tel:+919440272557"
                                className="flex items-start gap-4 p-6 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-colors group cursor-pointer"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Contact Us</h4>
                                    <p className="text-gray-400 text-sm">+91 94402 72557</p>
                                </div>
                            </a>
                        </div>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=Siddartha+Cinemas+4K+Dolby,Society+Colony+Main+Rd,Marpuri+Street,Madanapalle,Andhra+Pradesh+517325" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
