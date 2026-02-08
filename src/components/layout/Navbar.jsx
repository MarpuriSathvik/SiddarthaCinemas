import React, { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { clsx } from 'clsx';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Movies', href: '#movies' },
        { name: 'Coming Soon', href: '#upcoming' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/80 backdrop-blur-md py-3 border-white/10" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <Film className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
                    <span className="text-2xl font-heading font-bold text-white tracking-wide">
                        Siddartha<span className="text-primary">Cinemas</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <Button
                        variant="primary"
                        onClick={() => window.open("https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260209", "_blank")}
                    >
                        Book Tickets
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg text-gray-300 hover:text-primary block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        className="w-full"
                        onClick={() => window.open("https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260209", "_blank")}
                    >
                        Book Tickets
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
