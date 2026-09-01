import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import type { PageId } from '../../types';

interface Slide {
  id: number;
  image: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  highlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryRoute: PageId;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 0,
    image: '/images/hero/hero-wedding.jpg',
    category: 'BESPOKE DESTINATION WEDDINGS',
    titleLine1: 'Experience.',
    titleLine2: 'Celebrate.',
    highlight: 'Remember.',
    description:
      'Rapturee orchestrates world-class luxury galas, bespoke beachfront weddings, and immersive entertainment experiences designed to leave an indelible mark.',
    primaryCta: 'PLAN YOUR EVENT',
    secondaryCta: 'DISCOVER WEDDINGS',
    secondaryRoute: 'services-weddings',
  },
  {
    id: 1,
    image: '/images/hero/hero-corporate.jpg',
    category: 'HIGH-IMPACT CORPORATE GALAS',
    titleLine1: 'Connect.',
    titleLine2: 'Collaborate.',
    highlight: 'Elevate.',
    description:
      'Transforming high-impact corporate summits, award galas, and executive retreats into grand, unforgettable milestones of excellence.',
    primaryCta: 'PLAN YOUR EVENT',
    secondaryCta: 'EXPLORE CORPORATE',
    secondaryRoute: 'services-corporate',
  },
  {
    id: 2,
    image: '/images/hero/hero-concert.jpg',
    category: 'ARENA & FESTIVAL PRODUCTIONS',
    titleLine1: 'Vibrant.',
    titleLine2: 'Electrifying.',
    highlight: 'Unmatched.',
    description:
      'Powering world-class concert tours, festival mainstages, and live soundscapes with state-of-the-art lighting and acoustic artistry.',
    primaryCta: 'PLAN YOUR EVENT',
    secondaryCta: 'VIEW ENTERTAINMENT',
    secondaryRoute: 'services-entertainment',
  },
  {
    id: 3,
    image: '/images/hero/hero-acoustic.jpg',
    category: 'INTIMATE & BESPOKE NIGHTS',
    titleLine1: 'Soulful.',
    titleLine2: 'Magical.',
    highlight: 'Unforgettable.',
    description:
      'Curating serene starlit gatherings, intimate acoustic sessions, and private cultural showcases crafted with passion and precision.',
    primaryCta: 'PLAN YOUR EVENT',
    secondaryCta: 'BOOK AN EVENT',
    secondaryRoute: 'book',
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export const HeroSlider: React.FC = () => {
  const { navigateTo, openBookingModal } = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<number>(1); // 1 = next, -1 = prev

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNext();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  const currentSlide = HERO_SLIDES[currentIndex];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 6, ease: 'easeOut' },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.02,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.6 },
      },
    }),
  };

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 pb-20 overflow-hidden select-none bg-[#0B0B0E]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Sliding + Custom Gradient Shading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.category}
              className="w-full h-full object-cover object-center filter contrast-105 saturate-110 transform scale-105 transition-transform duration-[6000ms] ease-out"
            />
          </motion.div>
        </AnimatePresence>

        {/* --------------------------------------------------------------------- */}
        {/* SHADING OVERLAYS - LUXURY DARK VIGNETTE & MULTI-LAYERED SHADOWS        */}
        {/* --------------------------------------------------------------------- */}
        {/* 1. Left to Right Gradient Shading for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/95 via-[#0B0B0E]/75 via-40% to-[#0B0B0E]/25 z-10 pointer-events-none" />

        {/* 2. Top to Bottom Gradient Shading for Navbar & Footer Seamlessness */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/80 via-transparent to-[#0B0B0E] z-10 pointer-events-none" />

        {/* 3. Subtle Ambient Vignette Border */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(11,11,14,0.6)_100%)] z-10 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 w-full pt-8 sm:pt-16">
        <div className="max-w-2xl">
          {/* Animated Category Tagline */}
          <motion.div
            key={`cat-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
              {currentSlide.category}
            </span>
          </motion.div>

          {/* Main Slide Title */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl font-normal text-slate-100 leading-[1.05] tracking-tight mb-6"
          >
            {currentSlide.titleLine1}
            <br />
            {currentSlide.titleLine2}
            <br />
            <span className="text-amber-400 drop-shadow-[0_4px_24px_rgba(251,191,36,0.3)]">
              {currentSlide.highlight}
            </span>
          </motion.h1>

          {/* Line Accent with Diamond Dot */}
          <motion.div
            key={`accent-${currentIndex}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="origin-left flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-amber-500/80" />
            <div className="w-2 h-2 rotate-45 bg-amber-400" />
          </motion.div>

          {/* Animated Subtext Description */}
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-200 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-xl drop-shadow"
          >
            {currentSlide.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            key={`cta-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={openBookingModal}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-md transition-all duration-300 text-xs tracking-wider uppercase shadow-xl shadow-amber-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{currentSlide.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo(currentSlide.secondaryRoute)}
              className="border border-amber-500/50 hover:border-amber-400 text-slate-100 hover:text-amber-300 px-8 py-4 rounded-md transition-all duration-300 text-xs tracking-wider uppercase bg-[#0B0B0E]/50 backdrop-blur-md hover:bg-amber-500/10 cursor-pointer"
            >
              {currentSlide.secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* SLIDER NAVIGATION CONTROLS & THUMBNAIL INDICATORS                     */}
      {/* --------------------------------------------------------------------- */}
      {/* Left/Right Arrow Buttons */}
      <div className="absolute right-6 sm:right-12 bottom-12 sm:bottom-16 z-30 flex items-center gap-3">
        <button
          onClick={goToPrev}
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full bg-[#0B0B0E]/70 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 flex items-center justify-center backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? 'Play Slider' : 'Pause Slider'}
          className="w-10 h-10 rounded-full bg-[#0B0B0E]/70 border border-amber-500/20 text-slate-300 hover:text-amber-400 transition-all duration-300 flex items-center justify-center backdrop-blur-md cursor-pointer"
        >
          {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4" />}
        </button>

        <button
          onClick={goToNext}
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full bg-[#0B0B0E]/70 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 flex items-center justify-center backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Horizontal Slide Navigation Dots & Titles */}
      <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-10 z-30 flex items-center gap-3 sm:gap-6">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className="group flex flex-col items-start gap-1 cursor-pointer transition-all"
            >
              {/* Top Progress Bar for active slide */}
              <div className="w-16 sm:w-28 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                {isActive && (
                  <motion.div
                    key={`progress-${idx}-${isPaused}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: isPaused ? 0 : SLIDE_DURATION / 1000,
                      ease: 'linear',
                    }}
                    className="h-full bg-amber-400"
                  />
                )}
                {!isActive && (
                  <div className="h-full bg-transparent group-hover:bg-amber-500/40 transition-colors" />
                )}
              </div>

              {/* Number and Label */}
              <div className="hidden sm:flex items-center gap-2 pt-1 text-[11px]">
                <span
                  className={`font-mono ${
                    isActive ? 'text-amber-400 font-bold' : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                >
                  0{idx + 1}
                </span>
                <span
                  className={`uppercase tracking-wider truncate max-w-[100px] ${
                    isActive ? 'text-slate-200 font-semibold' : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                >
                  {slide.category.split(' ')[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
