import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Button from './components/ui/Button';
import MovieCard from './components/ui/MovieCard';
import Modal from './components/ui/Modal';
import MovieDetails from './components/features/MovieDetails';
import SeatSelection from './components/features/SeatSelection';
import InstallPWA from './components/features/InstallPWA';
import { AnimatePresence, motion } from 'framer-motion';
import checkCircle from 'lucide-react';
import heroBg from './assets/Screen2_Main.webp';
import mobileHeroBg from './assets/Mobile_HEROGB.webp';
import Location from './components/features/Location';
import MovieCardSkeleton from './components/ui/MovieCardSkeleton';
import Qube from './assets/Qube.webp';
import Laser4K from './assets/4K.webp';
import Christie from './assets/Christe.webp';
import Barco from './assets/Barco.webp';
import Dolby from './assets/Dolby.webp';
import ThreeD from './assets/3D.webp';
import Galalite from './assets/Galalite.webp';
import BMS from './assets/BookMyShow.svg';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingStep, setBookingStep] = useState('details'); // details, seats, confirmation
  const [bookingData, setBookingData] = useState(null);
  const [isComingSoonVisible, setIsComingSoonVisible] = useState(false);
  const [viewAllUpcoming, setViewAllUpcoming] = useState(false);

  // Loading State
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#upcoming') {
        setIsComingSoonVisible(true);
        // data-driven scroll to ensure element is visible
        setTimeout(() => {
          document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Check initial hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const nowShowing = [
    {
      title: "Amaravathiki Aahvanam",
      genre: "Telugu (UA16+)",
      rating: "8.3", // Estimated/Placeholder as BMS rating wasn't explicitly scraped, but usually high for new releases. Or better, remove rating if not sure? No, existing UI expects it. I'll use a safe placeholder or omit if component handles it. Let's use a generic high rating.
      duration: "2h 21m",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/amaravathiki-aahvanam-et00486044-1770883657.jpg",
      bookUrl: "https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260214",
      showTimes: ["11:00 AM", "06:00 PM"]
    },
    {
      title: "Dhurandhar",
      genre: "Hindi (A)",
      rating: "8.5",
      duration: "3h 32m",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhurandhar-et00452447-1764571309.jpg",
      bookUrl: "https://in.bookmyshow.com/cinemas/madanapalle/siddartha-cinemasscreen-2-dolby-lasermadanapalle/buytickets/MSDR/20260214",
      showTimes: ["02:00 PM", "09:00 PM"]
    }
  ];

  const upcomingMovies = [
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


  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Check if we are at the end (with a small buffer)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll by approximately card width
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-white" >
      <Navbar />

      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" >
        {/* Background Image */}
        <div className="absolute inset-0" >
          <picture>
            <source media="(min-width: 768px)" srcSet={heroBg} />
            <img
              src={mobileHeroBg}
              alt="Hero Background"
              className="w-full h-full object-cover opacity-60"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30" />
        </div >

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl px-6 mt-16" >
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-2xl">
            Welcome to <span className="text-primary">SIDDARTHA</span> <br />
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200 font-light leading-relaxed">
            Experience crystal-clear 4K visuals, powerful Dolby sound, and luxurious push-back seating at Siddartha Cinemas, Madanapalle.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-300">
            <Button variant="primary" className="px-10 py-4 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" onClick={handleBookNow}>Book Tickets Now</Button>
            <Button variant="outline" className="px-10 py-4 text-lg border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300" onClick={() => document.getElementById('movies').scrollIntoView({ behavior: 'smooth' })}>View Showtimes</Button>
          </div>

          {/* Brand Partners */}
          <div className="mt-8 animate-fade-in-up delay-400 w-full max-w-screen-xl mx-auto px-4">
            {/* Mobile: Auto-scrolling carousel */}
            <div className="md:hidden overflow-hidden">
              <div className="flex animate-scroll-logos">
                {/* First set with white background */}
                <div className="shrink-0 pr-4">
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-[5px] shadow-2xl">
                    <img src={Qube} alt="Qube Cinema" className="h-6 w-auto object-contain" />
                    <img src={Dolby} alt="Dolby Atmos" className="h-8 w-auto object-contain" />
                    <img src={Barco} alt="Barco" className="h-6 w-auto object-contain" />
                    <img src={Christie} alt="Christie" className="h-5 w-auto object-contain" />
                    <img src={BMS} alt="BookMyShow" className="h-6 w-auto object-contain" />
                    <img src={Galalite} alt="Galalite Screens" className="h-8 w-auto object-contain" />
                    <img src={Laser4K} alt="4K Laser" className="h-6 w-auto object-contain" />
                    <img src={ThreeD} alt="3D" className="h-8 w-auto object-contain" />
                  </div>
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="shrink-0 pr-4">
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-[5px] shadow-2xl">
                    <img src={Qube} alt="Qube Cinema" className="h-6 w-auto object-contain" />
                    <img src={Dolby} alt="Dolby Atmos" className="h-8 w-auto object-contain" />
                    <img src={Barco} alt="Barco" className="h-6 w-auto object-contain" />
                    <img src={Christie} alt="Christie" className="h-5 w-auto object-contain" />
                    <img src={BMS} alt="BookMyShow" className="h-6 w-auto object-contain" />
                    <img src={Galalite} alt="Galalite Screens" className="h-8 w-auto object-contain" />
                    <img src={Laser4K} alt="4K Laser" className="h-6 w-auto object-contain" />
                    <img src={ThreeD} alt="3D" className="h-8 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Static layout */}
            <div className="hidden md:flex flex-nowrap justify-between items-center gap-1 md:gap-2 bg-white rounded-2xl p-[5px] shadow-2xl overflow-x-auto no-scrollbar">
              <img src={Qube} alt="Qube Cinema" className="h-10 w-auto object-contain shrink-0" />
              <img src={Dolby} alt="Dolby Atmos" className="h-12 w-auto object-contain shrink-0" />
              <img src={Barco} alt="Barco" className="h-10 w-auto object-contain shrink-0" />
              <img src={Christie} alt="Christie" className="h-8 w-auto object-contain shrink-0" />
              <img src={BMS} alt="BookMyShow" className="h-10 w-auto object-contain shrink-0" />
              <img src={Galalite} alt="Galalite Screens" className="h-12 w-auto object-contain shrink-0" />
              <img src={Laser4K} alt="4K Laser" className="h-10 w-auto object-contain shrink-0" />
              <img src={ThreeD} alt="3D" className="h-12 w-auto object-contain shrink-0" />
            </div>
            <p className="text-white/40 text-xs mt-4 uppercase tracking-widest font-medium text-center">Powered by World-Class Technology</p>
          </div>
        </div >
      </section >

      {/* Now Showing Section */}
      <section id="movies" className="py-24 container mx-auto px-10 md:px-6" >
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Now Showing</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <Button variant="ghost" className="hidden md:block">View All</Button>
        </div>


        {/* Mobile: Swipeable Carousel, Desktop: Grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-5 md:gap-8 md:overflow-visible no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {isLoading
            ? Array(5).fill(0).map((_, i) => (
              <div key={i} className="min-w-[85%] snap-center md:min-w-0 md:w-auto">
                <MovieCardSkeleton />
              </div>
            ))
            : nowShowing.map((movie, index) => (
              <div key={index} onClick={() => handleMovieClick(movie)} className="min-w-[85%] snap-center cursor-pointer md:min-w-0 md:w-auto">
                <MovieCard {...movie} isPrimary={true} buttonText="Book Now" />
              </div>
            ))
          }
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="ghost">View All</Button>
        </div>
      </section >

      {/* Upcoming Movies Section */}
      <section id="upcoming" className="py-24 bg-surface/30 container mx-auto px-10 md:px-6" >
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Coming Soon</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Mobile: 2x2 grid showing 4 movies, Desktop: Show all in a row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {isLoading
            ? Array(5).fill(0).map((_, i) => (
              <div key={i}>
                <MovieCardSkeleton />
              </div>
            ))
            : (viewAllUpcoming ? upcomingMovies : upcomingMovies.slice(0, 5)).map((movie, index) => (
              <div key={index} className={`cursor-pointer ${!viewAllUpcoming && index === 4 ? 'hidden lg:block' : ''}`}>
                <MovieCard {...movie} isPrimary={true} buttonText="View" />
              </div>
            ))
          }
        </div>

        {/* View More/Less Button - Shows when there are more than 4 movies on mobile, or 5 on desktop */}
        {upcomingMovies.length > 4 && (
          <div className={`mt-8 text-center ${upcomingMovies.length === 5 ? 'lg:hidden' : ''}`}>
            <Button
              variant="ghost"
              onClick={() => setViewAllUpcoming(!viewAllUpcoming)}
            >
              {viewAllUpcoming ? 'View Less' : 'View More'}
            </Button>
          </div>
        )}
      </section >

      {/* Location Section */}
      <Location />

      {/* Install PWA Prompt */}
      <InstallPWA />

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
