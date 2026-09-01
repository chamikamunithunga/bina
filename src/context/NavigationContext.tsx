import React, { createContext, useContext, useState, useEffect } from 'react';
import type { PageId } from '../types';

interface NavigationContextType {
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
  isBookingOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const pageToHashMap: Record<PageId, string> = {
  'home': '#home',
  'services-corporate': '#corporate-galas-summits',
  'services-weddings': '#luxury-weddings',
  'services-entertainment': '#entertainment',
  'services-gigs': '#gigs',
  'services-other': '#other-events',
  'about': '#about-us',
  'contact': '#contact',
  'book': '#book-event',
};

const hashToPageMap: Record<string, PageId> = {
  '#home': 'home',
  '#corporate-galas-summits': 'services-corporate',
  '#luxury-weddings': 'services-weddings',
  '#entertainment': 'services-entertainment',
  '#gigs': 'services-gigs',
  '#other-events': 'services-other',
  '#about-us': 'about',
  '#contact': 'contact',
  '#book-event': 'book',
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hashToPageMap[hash]) {
        setCurrentPage(hashToPageMap[hash]);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const hash = pageToHashMap[page];
    if (hash) {
      window.history.pushState(null, '', hash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        isBookingOpen,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
