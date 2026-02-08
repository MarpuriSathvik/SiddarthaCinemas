import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Button from './components/ui/Button';
import MovieCard from './components/ui/MovieCard';
import Modal from './components/ui/Modal';
import MovieDetails from './components/features/MovieDetails';
import SeatSelection from './components/features/SeatSelection';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingStep, setBookingStep] = useState('details'); // details, seats, confirmation
  const [bookingData, setBookingData] = useState(null);

  const nowShowing = [
    {
      title: "Erracheera",
      genre: "Telugu (A)",
      rating: "8.5",
      duration: "2h 15m",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/erracheera-et00368861-1693827536.jpg",
      description: "A gripping tale of mystery and suspense.",
      bookUrl: "https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260209"
    },
    {
      title: "One/4",
      genre: "Telugu (UA16+)",
      rating: "8.2",
      duration: "2h 10m",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/one-4-et00483309-1769237936.jpg",
      description: "An action-packed thriller that keeps you on the edge of your seat.",
      bookUrl: "https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260209"
    },
    {
      title: "Sumathi Sathakam",
      genre: "Telugu (UA13+)",
      rating: "9.1",
      duration: "2h 25m",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sumathi-sathakam-et00482790-1769493591.jpg",
      description: "A heartwarming family drama with a powerful message.",
      bookUrl: "https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260209"
    }
  ];

  const upcomingMovies = [
    {
      title: "Funky",
      genre: "Comedy / Drama",
      releaseDate: "February 13, 2026",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/funky-et00424011-1762494325.jpg",
      bookUrl: "https://in.bookmyshow.com/movies/madanapalle/funky/ET00424011"
    },
    {
      title: "Dhurandhar: The Revenge",
      genre: "Action / Drama",
      releaseDate: "March 19, 2026",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhurandhar-the-revenge-et00478890-1770096576.jpg",
      bookUrl: "https://in.bookmyshow.com/movies/madanapalle/dhurandhar-the-revenge/ET00478890"
    },
    {
      title: "Toxic: A Fairy Tale for Grown-ups",
      genre: "Action / Drama",
      releaseDate: "March 19, 2026",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/toxic-a-fairy-tale-for-grown-ups-et00378770-1767955073.jpg",
      bookUrl: "https://in.bookmyshow.com/movies/madanapalle/toxic-a-fairy-tale-for-grown-ups/ET00378770"
    },
    {
      title: "Ustaad Bhagat Singh",
      genre: "Action / Drama",
      releaseDate: "March 26, 2026",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ustaad-bhagat-singh-et00339939-1770271355.jpg",
      bookUrl: "https://in.bookmyshow.com/movies/madanapalle/ustaad-bhagat-singh/ET00339939"
    },
    {
      title: "The Paradise",
      genre: "Action / Drama",
      releaseDate: "Coming Soon (2026)",
      image: "https://m.media-amazon.com/images/M/MV5BMGIwZDkyZjItNmQ5YS00Y2E5LTk4NjctZThmNmExYzQ4NTVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      bookUrl: "https://in.bookmyshow.com/movies/madanapalle/the-paradise/ET00436621"
    },
    {
      title: "Peddi",
      genre: "Action / Drama",
      releaseDate: "April 30, 2026",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00439772-rmcufafwek-portrait.jpg",
      bookUrl: "https://in.bookmyshow.com/movies/madanapalle/peddi/ET00439772"
    }
  ].sort((a, b) => {
    // Custom sort logic to handle "Coming Soon" correctly (put it last)
    if (a.releaseDate.includes("Coming Soon")) return 1;
    if (b.releaseDate.includes("Coming Soon")) return -1;
    return new Date(a.releaseDate) - new Date(b.releaseDate);
  });

  /* ... skipping to the render part ... */

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {upcomingMovies.map((movie, index) => (
      <div key={index} className="cursor-pointer">
        <MovieCard {...movie} buttonText="View" />
      </div>
    ))}
  </div>

  const BOOK_TICKET_URL = "https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260209";

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setBookingStep('details');
    setBookingData(null);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setBookingStep('details');
  };

  const handleBookNow = () => {
    const url = selectedMovie?.bookUrl || BOOK_TICKET_URL;
    window.open(url, '_blank');
  };

  const handleConfirmBooking = (seats) => {
    setBookingData({ movie: selectedMovie, seats });
    setBookingStep('confirmation');
  };

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-white" >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" >
        {/* Background Image */}
        <div className="absolute inset-0" >
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div >

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6 mt-16" >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Coming Soon</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Cinematic</span> Experience
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Immerse yourself in crystal clear 4K visuals and earth-shattering Dolby Atmos sound at Siddartha Cinemas.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Button variant="primary" className="px-8 py-4 text-lg" onClick={handleBookNow}>Book Tickets Now</Button>
            <Button variant="outline" className="px-8 py-4 text-lg">View Showtimes</Button>
          </div>
        </div >
      </section >

      {/* Now Showing Section */}
      <section id="movies" className="py-24 container mx-auto px-6" >
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Now Showing</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <Button variant="ghost" className="hidden md:block">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nowShowing.map((movie, index) => (
            <div key={index} onClick={() => handleMovieClick(movie)} className="cursor-pointer">
              <MovieCard {...movie} isPrimary={true} buttonText="Book Now" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="ghost">View All</Button>
        </div>
      </section >

      {/* Upcoming Movies Section */}
      <section id="upcoming" className="py-24 bg-surface/30 container mx-auto px-6" >
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Coming Soon</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingMovies.map((movie, index) => (
            <div key={index} className="cursor-pointer">
              <MovieCard {...movie} buttonText="View" />
            </div>
          ))}
        </div>
      </section >

      {/* Amenities Mockup */}
      <section className="py-24 bg-surface/50 border-y border-white/5 relative overflow-hidden" >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Technology</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Unmatched Visuals & Sound</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We define the gold standard of movie-watching. Featuring the latest 4K Laser Projection and immersive Dolby Atmos audio, every seat in the house is the best seat.
              </p>
              <ul className="space-y-3 mb-8">
                {['4K Laser Projection', 'Dolby Atmos Sound', 'Premium Recliner Seats', 'Gourmet Concessions'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="primary">Learn More</Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1517604931442-710c8ef5ad25?auto=format&fit=crop&q=80&w=800"
                alt="Cinema Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section >

      <Footer />

      {/* Movie Details Modal */}
      <Modal
        isOpen={!!selectedMovie}
        onClose={handleCloseModal}
        title={bookingStep === 'seats' ? 'Select Seats' : (bookingStep === 'confirmation' ? 'Booking Confirmed' : 'Movie Details')}
      >
        <AnimatePresence mode="wait">
          {bookingStep === 'details' && selectedMovie && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <MovieDetails movie={selectedMovie} onBookNow={handleBookNow} />
            </motion.div>
          )}

          {bookingStep === 'seats' && selectedMovie && (
            <motion.div
              key="seats"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SeatSelection
                movie={selectedMovie}
                onBack={() => setBookingStep('details')}
                onConfirm={handleConfirmBooking}
              />
            </motion.div>
          )}

          {bookingStep === 'confirmation' && bookingData && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                Your tickets for <strong className="text-white">{bookingData.movie.title}</strong> have been booked successfully.
              </p>
              <div className="bg-surface p-6 rounded-lg border border-white/10 w-full max-w-sm mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Seats</span>
                  <span className="font-bold text-white">{bookingData.seats.length}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-400">Total Amount</span>
                  <span className="font-bold text-primary">₹{bookingData.seats.length * 250}</span>
                </div>
                <div className="text-xs text-center text-gray-500">Booking ID: #SC-{Math.floor(Math.random() * 10000)}</div>
              </div>
              <Button variant="primary" onClick={handleCloseModal}>Back to Home</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>

    </div >
  );
}

export default App;
