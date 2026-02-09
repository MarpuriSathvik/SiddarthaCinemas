import React from 'react';
import { Star, Clock, Calendar, Share2 } from 'lucide-react';
import Button from './Button';

const MovieCard = ({ title, genre, rating, duration, image, releaseDate, bookUrl, buttonText, isPrimary, showTimes }) => {

    const handleShare = async (e) => {
        e.stopPropagation();
        const shareData = {
            title: `Watch ${title} at Siddartha Cinemas`,
            text: `Check out ${title} (${genre}) at Siddartha Cinemas, Madanapalle!`,
            url: window.location.href, // Or construct a specific URL if routing is set up
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <div className="group relative bg-surface rounded-xl overflow-hidden shadow-lg border border-white/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
            {/* Image Overlay */}
            <div className="relative aspect-[3/4] md:aspect-[2/3] overflow-hidden">
                <img
                    src={image || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Top Actions: Rating & Share */}
                <div className="absolute top-3 left-0 right-0 px-3 flex justify-between items-start">
                    {/* Rating Badge */}
                    {rating ? (
                        <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
                            <Star className="w-3 h-3 text-primary fill-primary" />
                            <span className="text-xs font-bold text-white">{rating}</span>
                        </div>
                    ) : (
                        <div></div> // Spacer if no rating
                    )}

                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        className="bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-white/10 hover:bg-primary hover:text-black hover:border-primary transition-colors text-white"
                        aria-label="Share Movie"
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-1 truncate">{title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">{genre}</p>

                <div className="flex flex-col gap-2 text-xs text-gray-500 mb-3 md:mb-4">
                    <div className="flex items-center gap-4">
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
                </div>

                {showTimes && (
                    <div className="mb-3 md:mb-4">
                        <p className="text-sm md:text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Showtimes</p>
                        <div className="flex flex-wrap gap-2">
                            {showTimes.map((time, index) => (
                                <span key={index} className="text-sm md:text-xs bg-white/5 border border-white/10 px-3 py-1.5 md:px-2 md:py-1 rounded text-gray-300 hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                                    {time}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <Button
                    variant={isPrimary ? "primary" : "outline"}
                    className="w-full text-sm md:text-base font-bold py-2.5 md:py-3"
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
