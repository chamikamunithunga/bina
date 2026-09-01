import React from 'react';
import { SERVICES_DATA } from '../data/eventsData';
import { PageHeader } from '../components/layout/PageHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';
import { Heart, Sparkles, MapPin } from 'lucide-react';

export const LuxuryWeddingsPage: React.FC = () => {
  const data = SERVICES_DATA['luxury-weddings'];
  const { openBookingModal } = useNavigation();

  return (
    <div className="bg-[#0B0B0E] text-slate-100 min-h-screen">
      {/* Page Header matching Screenshot 4 */}
      <PageHeader
        breadcrumb={data.breadcrumb}
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImage={data.heroImage}
        primaryCtaText={data.primaryCtaText}
        secondaryCtaText={data.secondaryCtaText}
      />

      {/* 3 Featured Cards Section matching Screenshot 4 */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.features.map((feature, idx) => (
            <ServiceCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={idx * 0.15}
              onClick={openBookingModal}
            />
          ))}
        </div>
      </section>

      {/* Wedding Artistry Showcase */}
      <section className="py-20 bg-[#0E0E14] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
                DESTINATION &amp; BESPOKE WEDDINGS
              </span>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-slate-100">
                Orchestrating Pure Romance
              </h2>
              <div className="w-12 h-[2px] bg-amber-500 mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-[#13131A] p-8 rounded-xl border border-amber-500/20 space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl text-slate-100">Destination Scouting</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  From historic Tuscan châteaux and French Riviera villas to private Caribbean islands.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-[#13131A] p-8 rounded-xl border border-amber-500/20 space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl text-slate-100">Floral &amp; Scenography</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Custom ceiling installations, candlelight pathways, and architectural botanical design.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-[#13131A] p-8 rounded-xl border border-amber-500/20 space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl text-slate-100">Full Concierge Care</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Dedicated guest concierge, luxury travel logistics, tasting sessions, and weekend itineraries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-slate-100">
            Begin Your Wedding Journey with Rapturee
          </h3>
          <p className="text-slate-400 text-sm font-light">
            Schedule a private consultation with our principal wedding designers.
          </p>
          <button
            onClick={openBookingModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-md text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20"
          >
            PLAN YOUR WEDDING →
          </button>
        </div>
      </section>
    </div>
  );
};
