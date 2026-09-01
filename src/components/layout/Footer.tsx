import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Share2, Globe, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, openBookingModal } = useNavigation();

  return (
    <footer className="bg-[#08080B] text-slate-400 border-t border-amber-500/10 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-500/40 p-[2px] bg-[#08080B] shadow-lg shadow-amber-500/10 shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Rapturee Monogram"
                  className="w-full h-full object-cover rounded-full scale-125"
                />
              </div>
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.2em] font-medium text-slate-100 uppercase">
                RAPTUREE
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-light">
              Crafting extraordinary galas, bespoke weddings, and world-class live entertainment across the globe. Experience the magic of flawless event design.
            </p>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-amber-400 hover:border-amber-500/40 transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-amber-400 hover:border-amber-500/40 transition-colors" aria-label="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-amber-400 hover:border-amber-500/40 transition-colors" aria-label="Bespoke Studio">
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-amber-400 font-semibold text-xs tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-amber-300 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-amber-300 transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-amber-300 transition-colors">Contact Us</button>
              </li>
              <li>
                <button onClick={openBookingModal} className="text-amber-400 hover:text-amber-300 transition-colors font-medium">Book Event</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-amber-400 font-semibold text-xs tracking-widest uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('services-corporate')} className="hover:text-amber-300 transition-colors text-left">Corporate Galas &amp; Summits</button>
              </li>
              <li>
                <button onClick={() => navigateTo('services-weddings')} className="hover:text-amber-300 transition-colors text-left">Luxury Weddings</button>
              </li>
              <li>
                <button onClick={() => navigateTo('services-entertainment')} className="hover:text-amber-300 transition-colors text-left">Live Entertainment</button>
              </li>
              <li>
                <button onClick={() => navigateTo('services-gigs')} className="hover:text-amber-300 transition-colors text-left">Private Gigs &amp; Lounges</button>
              </li>
              <li>
                <button onClick={() => navigateTo('services-other')} className="hover:text-amber-300 transition-colors text-left">Bespoke Celebrations</button>
              </li>
            </ul>
          </div>

          {/* Studios */}

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rapturee Luxury Events. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
