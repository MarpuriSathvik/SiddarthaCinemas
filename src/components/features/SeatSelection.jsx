import React, { useState } from 'react';
import { clsx } from 'clsx';
import Button from '../ui/Button';

const SeatSelection = ({ movie, onBack, onConfirm }) => {
    const rows = 8;
    const cols = 10;
    const pricePerSeat = 250; // INR

    // Generate mock seat data
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [occupiedSeats] = useState(() => {
        const occupied = new Set();
        for (let i = 0; i < 15; i++) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * cols);
            occupied.add(`${r}-${c}`);
        }
        return occupied;
    });

    const handleSeatClick = (r, c) => {
        const seatId = `${r}-${c}`;
        if (occupiedSeats.has(seatId)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const totalPrice = selectedSeats.length * pricePerSeat;

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <button onClick={onBack} className="text-gray-400 hover:text-white text-sm underline">
                    &larr; Back to Movie
                </button>
                <span className="text-white font-bold">{movie.title}</span>
            </div>

            <div className="flex-1 overflow-y-auto mb-6">
                {/* Screen */}
                <div className="w-full flex justify-center mb-10 perspective-1000">
                    <div className="w-3/4 h-16 bg-gradient-to-b from-white/20 to-transparent transform rotate-x-12 rounded-t-full shadow-[0_10px_30px_rgba(255,255,255,0.1)] border-t border-white/30 flex items-end justify-center pb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Screen</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 mb-8 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-t-lg bg-gray-700/50 border border-white/10" />
                        <span>Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-t-lg bg-primary shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                        <span>Selected</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-t-lg bg-white/10 cursor-not-allowed" />
                        <span>Sold</span>
                    </div>
                </div>

                {/* Seats Grid */}
                <div className="flex flex-col gap-3 items-center">
                    {Array.from({ length: rows }).map((_, r) => (
                        <div key={r} className="flex gap-2 sm:gap-4">
                            {Array.from({ length: cols }).map((_, c) => {
                                const seatId = `${r}-${c}`;
                                const isSelected = selectedSeats.includes(seatId);
                                const isOccupied = occupiedSeats.has(seatId);

                                return (
                                    <button
                                        key={seatId}
                                        disabled={isOccupied}
                                        onClick={() => handleSeatClick(r, c)}
                                        className={clsx(
                                            "w-6 h-6 sm:w-8 sm:h-8 rounded-t-lg transition-all duration-200 text-[10px] flex items-center justify-center relative group",
                                            isOccupied
                                                ? "bg-white/10 cursor-not-allowed text-transparent"
                                                : isSelected
                                                    ? "bg-primary text-black font-bold shadow-[0_0_15px_rgba(251,191,36,0.8)] scale-110 z-10"
                                                    : "bg-gray-700/50 border border-white/10 hover:bg-primary/50 hover:border-primary"
                                        )}
                                    >
                                        <span className={clsx("opacity-0 group-hover:opacity-100 transition-opacity", isSelected && "opacity-100")}>
                                            {String.fromCharCode(65 + r)}{c + 1}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary Bar */}
            <div className="mt-auto bg-surface/50 border-t border-white/10 p-4 -mx-6 -mb-6 flex justify-between items-center">
                <div>
                    <span className="text-gray-400 text-sm block">Total Price</span>
                    <span className="text-2xl font-bold text-white">₹{totalPrice}</span>
                    <span className="text-xs text-gray-500 ml-2">({selectedSeats.length} seats)</span>
                </div>
                <Button
                    disabled={selectedSeats.length === 0}
                    className={clsx("px-8", selectedSeats.length === 0 && "opacity-50 cursor-not-allowed grayscale")}
                    onClick={() => onConfirm(selectedSeats)}
                >
                    Confirm Booking
                </Button>
            </div>
        </div>
    );
};

export default SeatSelection;
