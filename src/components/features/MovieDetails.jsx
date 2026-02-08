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
                        <span>{movie.releaseDate || 'Now Showing'}</span>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                    {movie.description || "Embark on a cinematic journey with this critically acclaimed masterpiece. Featuring stunning visuals and a gripping storyline, this is a movie experience you won't want to miss."}
                </p>

                <div className="space-y-4">
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm">Cast & Crew</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                                <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${i + movie.title.length}`} alt="Cast" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs text-gray-400 whitespace-nowrap">Actor Name</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <Button variant="primary" className="flex-1 py-3 text-lg" onClick={onBookNow}>Book Tickets</Button>
                    <Button variant="outline" className="flex-1 py-3 text-lg flex items-center justify-center gap-2">
                        <Play className="w-4 h-4 fill-current" /> Watch Trailer
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
