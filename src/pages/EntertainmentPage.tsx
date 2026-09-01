import React from 'react';
import { SERVICES_DATA } from '../data/eventsData';
import { PageHeader } from '../components/layout/PageHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';
import { Music, Radio, Volume2, Mic } from 'lucide-react';

export const EntertainmentPage: React.FC = () => {
  const data = SERVICES_DATA['entertainment'];
  const { openBookingModal } = useNavigation();

  return (
    <div className="bg-[#0B0B0E] text-slate-100 min-h-screen">
      {/* Page Header matching Screenshot 5 */}
      <PageHeader
        breadcrumb={data.breadcrumb}
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImage={data.heroImage}
        primaryCtaText={data.primaryCtaText}
        secondaryCtaText={data.secondaryCtaText}
      />

      {/* 3 Featured Cards Section matching Screenshot 5 */}
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

      {/* Production Roster Overview */}
      <section className="py-20 bg-[#0E0E14] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                  WORLD-CLASS PRODUCTION
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-slate-100">
                  Global Talent Roster &amp; Stage Design
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Rapturee curates A-list musical acts, orchestral ensembles, international DJs, and theatrical performance art. We manage licensing, rider requirements, acoustics, and laser scenography.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-amber-400" />
                    <span>Global Headline Artists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-amber-400" />
                    <span>Festival-Grade Sound &amp; AV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-amber-400" />
                    <span>Custom Acoustic Mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-amber-400" />
                    <span>Orchestral &amp; DJ Curation</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[16/9] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
                  alt="Live Concert Stage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent opacity-60" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-slate-100">
            Book World-Class Live Entertainment
          </h3>
          <p className="text-slate-400 text-sm font-light">
            Discuss artist availability, stage requirements, and custom setlists with our entertainment curators.
          </p>
          <button
            onClick={openBookingModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-md text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20"
          >
            PLAN YOUR ENTERTAINMENT →
          </button>
        </div>
      </section>
    </div>
  );
};
