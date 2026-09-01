import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ScrollReveal } from '../ui/ScrollReveal';

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumb,
  title,
  subtitle,
  description,
  heroImage,
  primaryCtaText = 'PLAN YOUR EVENT →',
  secondaryCtaText = 'DISCOVER OUR SERVICES',
}) => {
  const { openBookingModal, navigateTo } = useNavigation();

  return (
    <div className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0B0B0E]">
      {/* Background Image Container with Luxury Gradient Overlays matching Screenshots 3/4/5 */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter contrast-105"
        />
        {/* Left Dark Gradient for Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/90 to-transparent" />
        {/* Bottom Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-[#0B0B0E]/60" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          {/* Breadcrumb matching Screenshot 3/4/5 */}
          <ScrollReveal direction="down" delay={0.1}>
            <div className="text-amber-500/90 text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              <span>{breadcrumb}</span>
            </div>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-slate-100 leading-[1.1] mb-4">
              {title}
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-amber-400 font-serif-luxury italic text-xl sm:text-2xl mb-6">
              {subtitle}
            </p>
          </ScrollReveal>

          {/* Main Description */}
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-10 max-w-xl">
              {description}
            </p>
          </ScrollReveal>

          {/* Action Buttons matching Screenshot 3/4/5 */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={openBookingModal}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-7 py-3.5 rounded-md transition-all duration-300 text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
              >
                {primaryCtaText}
              </button>

              <button
                onClick={() => navigateTo('services-corporate')}
                className="border border-amber-500/40 hover:border-amber-400 text-slate-200 hover:text-amber-300 px-7 py-3.5 rounded-md transition-all duration-300 text-xs tracking-wider uppercase bg-[#121218]/40 backdrop-blur-sm"
              >
                {secondaryCtaText}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
