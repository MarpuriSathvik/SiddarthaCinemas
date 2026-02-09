import React from 'react';
import { Clock, Star, Calendar, Play } from 'lucide-react';
import Button from '../ui/Button';

const MovieDetails = ({ movie, onBookNow }) => {
    if (!movie) return null;

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {/* Poster */}
            <div className="md:col-span-1">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3]">
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
                <div>
                    <h2 className="text-4xl font-heading font-bold text-white mb-2">{movie.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="px-2 py-1 bg-white/10 rounded text-white">{movie.rating} ★</span>
                        <span>{movie.duration}</span>
                        <span>{movie.genre}</span>
                        <span className="text-primary font-semibold">{movie.releaseDate || 'Now Showing'}</span>
                    </div>
                </div>

                <div className="pt-4">
                    <Button variant="primary" className="w-full py-3 text-lg font-bold" onClick={onBookNow}>Book Tickets</Button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
