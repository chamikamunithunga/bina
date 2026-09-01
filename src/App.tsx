import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BookingWizard } from './components/booking/BookingWizard';
import { HomePage } from './pages/HomePage';
import { CorporateGalasPage } from './pages/CorporateGalasPage';
import { LuxuryWeddingsPage } from './pages/LuxuryWeddingsPage';
import { EntertainmentPage } from './pages/EntertainmentPage';
import { GigsPage } from './pages/GigsPage';
import { OtherEventsPage } from './pages/OtherEventsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookEventPage } from './pages/BookEventPage';
import { AnimatePresence, motion } from 'framer-motion';

const MainContent: React.FC = () => {
  const { currentPage, isBookingOpen } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services-corporate':
        return <CorporateGalasPage />;
      case 'services-weddings':
        return <LuxuryWeddingsPage />;
      case 'services-entertainment':
        return <EntertainmentPage />;
      case 'services-gigs':
        return <GigsPage />;
      case 'services-other':
        return <OtherEventsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'book':
        return <BookEventPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0E] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Dynamic Page Content with Smooth Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Booking Modal Overlay */}
      {isBookingOpen && <BookingWizard isModal={true} />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  );
}

export default App;
