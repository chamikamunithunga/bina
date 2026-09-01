import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ArrowRight, Star, Award, ShieldCheck, Globe, Sparkles } from 'lucide-react';
import { SERVICES_DATA, TESTIMONIALS } from '../data/eventsData';
import { HeroSlider } from '../components/home/HeroSlider';

export const HomePage: React.FC = () => {
  const { navigateTo, openBookingModal } = useNavigation();

  return (
    <div className="bg-[#0B0B0E] text-slate-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* HERO SECTION WITH DYNAMIC SLIDING IMAGES & LUXURY SHADING OVERLAYS         */}
      {/* ========================================================================= */}
      <HeroSlider />


      {/* ========================================================================= */}
      {/* STATS HIGHLIGHT BAR */}
      {/* ========================================================================= */}
      <section className="bg-[#0e0e13] border-y border-amber-500/10 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-amber-400 font-semibold mb-2">500+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Unforgettable Events</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-amber-400 font-semibold mb-2">35</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Global Destinations</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-amber-400 font-semibold mb-2">99.8%</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Perfection Score</div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-amber-400 font-semibold mb-2">5+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Years of Artistry</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORE SERVICES SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <ScrollReveal direction="up">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              OUR SPECIALISATIONS
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-slate-100 font-normal">
              Curated Event Portfolio
            </h2>
            <div className="w-12 h-[2px] bg-amber-500 mx-auto mt-4" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Corporate Galas */}
          <ScrollReveal direction="up" delay={0.1}>
            <div
              onClick={() => navigateTo('services-corporate')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#13131A] border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 shadow-xl hover:shadow-amber-500/10 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={SERVICES_DATA['corporate-galas'].heroImage}
                  alt="Corporate Galas &amp; Summits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif-luxury text-2xl text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                  Corporate Galas &amp; Summits
                </h3>
                <p className="text-amber-400 text-xs uppercase tracking-wider mb-4 font-semibold">
                  Where business meets experience.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  Transforming high-impact corporate summits and gala evenings into experiences worth remembering.
                </p>
                <div className="mt-auto flex items-center text-xs font-semibold text-amber-400 gap-2 group-hover:gap-3 transition-all">
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Luxury Weddings */}
          <ScrollReveal direction="up" delay={0.2}>
            <div
              onClick={() => navigateTo('services-weddings')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#13131A] border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 shadow-xl hover:shadow-amber-500/10 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={SERVICES_DATA['luxury-weddings'].heroImage}
                  alt="Luxury Weddings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif-luxury text-2xl text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                  Luxury Weddings
                </h3>
                <p className="text-amber-400 text-xs uppercase tracking-wider mb-4 font-semibold">
                  Your story. Our canvas.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  Bespoke romantic celebrations crafted with elegance, creativity and meticulous planning.
                </p>
                <div className="mt-auto flex items-center text-xs font-semibold text-amber-400 gap-2 group-hover:gap-3 transition-all">
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Entertainment */}
          <ScrollReveal direction="up" delay={0.3}>
            <div
              onClick={() => navigateTo('services-entertainment')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#13131A] border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 shadow-xl hover:shadow-amber-500/10 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={SERVICES_DATA['entertainment'].heroImage}
                  alt="Live Entertainment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif-luxury text-2xl text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                  Live Entertainment
                </h3>
                <p className="text-amber-400 text-xs uppercase tracking-wider mb-4 font-semibold">
                  Turn an occasion into an experience.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  Connecting people with world-class performances, concerts, and cultural showcases.
                </p>
                <div className="mt-auto flex items-center text-xs font-semibold text-amber-400 gap-2 group-hover:gap-3 transition-all">
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHILOSOPHY / BANNER */}
      {/* ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#08080B] border-y border-amber-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase block">
                THE RAPTUREE STANDARD
              </span>
              <h2 className="font-serif-luxury text-4xl sm:text-6xl text-slate-100 leading-tight">
                Crafted with Precision.<br />Inspired by Passion.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed font-light">
                At Rapturee, we believe that extraordinary events don’t just happen—they are designed, sculpted, and orchestrated down to the finest detail. From lighting temperature and acoustic resonance to custom floral architecture and high-touch hospitality.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>White-Glove Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Award-Winning Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>International Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Bespoke Entertainment Roster</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Rapturee Luxury Table Setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent opacity-60" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              PRAISE &amp; RECOGNITION
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-slate-100 font-normal">
              What Our Clients Say
            </h2>
            <div className="w-12 h-[2px] bg-amber-500 mx-auto mt-4" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal key={t.id} direction="up" delay={idx * 0.15}>
              <div className="bg-[#121218] p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <h4 className="font-serif-luxury text-lg text-slate-100 font-medium">{t.author}</h4>
                  <p className="text-xs text-amber-400 font-semibold">{t.role}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0e0e13] to-[#08080B] border-t border-amber-500/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <ScrollReveal direction="up">
            <h2 className="font-serif-luxury text-4xl sm:text-6xl text-slate-100">
              Ready to Craft Your Unforgettable Moment?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto font-light">
              Speak with our senior event directors today to turn your vision into an extraordinary experience.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={openBookingModal}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-9 py-4 rounded-md text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-500/25 hover:scale-105"
              >
                BOOK EVENT NOW →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
