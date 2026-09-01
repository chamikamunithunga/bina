import React from 'react';
import { SERVICES_DATA } from '../data/eventsData';
import { PageHeader } from '../components/layout/PageHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { useNavigation } from '../context/NavigationContext';

export const OtherEventsPage: React.FC = () => {
  const data = SERVICES_DATA['other-events'];
  const { openBookingModal } = useNavigation();

  return (
    <div className="bg-[#0B0B0E] text-slate-100 min-h-screen">
      <PageHeader
        breadcrumb={data.breadcrumb}
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImage={data.heroImage}
        primaryCtaText={data.primaryCtaText}
        secondaryCtaText={data.secondaryCtaText}
      />

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

      <section className="py-20 text-center bg-[#0E0E14] border-t border-amber-500/10">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-slate-100">
            Have a Unique Event Vision?
          </h3>
          <p className="text-slate-400 text-sm font-light">
            Our creative directors excel at turning ambitious, unconventional concepts into breathtaking realities.
          </p>
          <button
            onClick={openBookingModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-md text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20"
          >
            DISCUSS YOUR VISION →
          </button>
        </div>
      </section>
    </div>
  );
};
