import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import type { PageId } from '../../types';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, openBookingModal } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceSubItems: { label: string; page: PageId }[] = [
    { label: 'Corporate Galas & Summits', page: 'services-corporate' },
    { label: 'Luxury Weddings', page: 'services-weddings' },
    { label: 'Entertainment', page: 'services-entertainment' },
    { label: 'Gigs', page: 'services-gigs' },
    { label: 'Other Events', page: 'services-other' },
  ];

  const isServiceActive = currentPage.startsWith('services-');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0E]/90 backdrop-blur-md py-4 shadow-xl border-b border-amber-500/10'
          : 'bg-gradient-to-b from-[#0B0B0E]/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-500/40 p-[2px] bg-[#0B0B0E] shadow-lg shadow-amber-500/10 shrink-0 group-hover:border-amber-400 transition-colors">
            <img
              src="/images/logo.jpg"
              alt="Rapturee Monogram"
              className="w-full h-full object-cover rounded-full scale-125 group-hover:scale-135 transition-transform duration-300"
            />
          </div>
          <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.2em] font-medium text-slate-100 uppercase group-hover:text-amber-300 transition-colors">
            RAPTUREE
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase text-slate-300">
          {/* HOME */}
          <button
            onClick={() => navigateTo('home')}
            className={`relative py-1 transition-colors hover:text-amber-400 ${
              currentPage === 'home' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            HOME
            {currentPage === 'home' && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
              />
            )}
          </button>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => navigateTo('services-corporate')}
              className={`flex items-center gap-1.5 py-1 transition-colors hover:text-amber-400 ${
                isServiceActive ? 'text-amber-400 font-bold' : ''
              }`}
            >
              SERVICES
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-amber-400' : ''}`} />
              {isServiceActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
                />
              )}
            </button>

            {/* Dropdown Menu - matching Screenshot 2 */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 pt-2 z-50"
                >
                  <div className="bg-[#121218]/95 backdrop-blur-xl border border-amber-500/20 rounded-xl p-2 shadow-2xl shadow-black/80 divide-y divide-slate-800/50">
                    {serviceSubItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => {
                          navigateTo(item.page);
                          setIsServicesOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-xs tracking-normal font-normal transition-all duration-200 flex items-center justify-between rounded-lg hover:bg-amber-500/10 hover:text-amber-300 ${
                          currentPage === item.page ? 'text-amber-400 font-medium bg-amber-500/10' : 'text-slate-200'
                        }`}
                      >
                        <span>{item.label}</span>
                        {currentPage === item.page && <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ABOUT US */}
          <button
            onClick={() => navigateTo('about')}
            className={`relative py-1 transition-colors hover:text-amber-400 ${
              currentPage === 'about' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            ABOUT US
            {currentPage === 'about' && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
              />
            )}
          </button>

          {/* CONTACT */}
          <button
            onClick={() => navigateTo('contact')}
            className={`relative py-1 transition-colors hover:text-amber-400 ${
              currentPage === 'contact' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            CONTACT
            {currentPage === 'contact' && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
              />
            )}
          </button>

          {/* BOOK EVENT CTA */}
          <button
            onClick={openBookingModal}
            className="border border-amber-500/60 hover:border-amber-400 text-amber-400 hover:text-amber-300 px-5 py-2 rounded-md hover:bg-amber-500/10 transition-all duration-300 font-medium tracking-[0.1em]"
          >
            BOOK EVENT
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-amber-400 p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0B0E]/98 border-b border-amber-500/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-sm uppercase tracking-wider font-medium">
              <button
                onClick={() => {
                  navigateTo('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'home' ? 'text-amber-400 font-bold' : 'text-slate-300'}`}
              >
                Home
              </button>

              <div className="py-2 border-y border-slate-800">
                <div className="text-amber-400 text-xs font-semibold tracking-widest mb-3">SERVICES</div>
                <div className="flex flex-col gap-2.5 pl-3">
                  {serviceSubItems.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => {
                        navigateTo(item.page);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-xs tracking-normal font-light transition-colors ${
                        currentPage === item.page ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  navigateTo('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'about' ? 'text-amber-400 font-bold' : 'text-slate-300'}`}
              >
                About Us
              </button>

              <button
                onClick={() => {
                  navigateTo('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'contact' ? 'text-amber-400 font-bold' : 'text-slate-300'}`}
              >
                Contact
              </button>

              <button
                onClick={() => {
                  openBookingModal();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 px-6 rounded-lg text-center shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>BOOK EVENT</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
