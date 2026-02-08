import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';
import Button from './Button';

const MovieCard = ({ title, genre, rating, duration, image, releaseDate, bookUrl, buttonText, isPrimary }) => {
    return (
        <div className="group relative bg-surface rounded-xl overflow-hidden shadow-lg border border-white/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
            {/* Image Overlay */}
            <div className="relative aspect-[2/3] overflow-hidden">
                <img
                    src={image || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Rating Badge */}
                {rating && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
                        <Star className="w-3 h-3 text-primary fill-primary" />
                        <span className="text-xs font-bold text-white">{rating}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-xl font-heading font-bold text-white mb-1 truncate">{title}</h3>
                <p className="text-gray-400 text-sm mb-3">{genre}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    {duration && (
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{duration}</span>
                        </div>
                    )}
                    {releaseDate && (
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{releaseDate}</span>
                        </div>
                    )}
                </div>

                <Button
                    variant={isPrimary ? "primary" : "outline"}
                    className="w-full text-sm py-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (bookUrl) {
                            window.open(bookUrl, "_blank");
                        }
                    }}
                    disabled={!bookUrl}
                >
                    {buttonText || (bookUrl ? "Book Now" : "Coming Soon")}
                </Button>
            </div>
        </div>
    );
};

export default MovieCard;
