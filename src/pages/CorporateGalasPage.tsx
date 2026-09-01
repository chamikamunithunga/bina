import React from 'react';
import { SERVICES_DATA } from '../data/eventsData';
import { PageHeader } from '../components/layout/PageHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';
import { CheckCircle2 } from 'lucide-react';

export const CorporateGalasPage: React.FC = () => {
  const data = SERVICES_DATA['corporate-galas'];
  const { openBookingModal } = useNavigation();

  return (
    <div className="bg-[#0B0B0E] text-slate-100 min-h-screen">
      {/* Page Hero matching Screenshot 3 */}
      <PageHeader
        breadcrumb={data.breadcrumb}
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        heroImage={data.heroImage}
        primaryCtaText={data.primaryCtaText}
        secondaryCtaText={data.secondaryCtaText}
      />

      {/* 3 Featured Cards Section matching Screenshot 3 */}
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

      {/* Corporate Capabilities Overview */}
      <section className="py-16 bg-[#0E0E14] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                  ENTERPRISE CAPABILITIES
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-slate-100">
                  Elevating Corporate Gatherings into Brand Milestones
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Whether hosting a global leadership summit for 2,000 delegates or an intimate board dinner for 30 executives, Rapturee manages every facet with military precision and luxury artistry.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Bespoke Stage Architecture & High-Definition AV Production',
                    'Keynote Speaker & Executive Talent Management',
                    'VIP Hospitality, Luxury Transportation & Concierge Services',
                    'Immersive Gala Branding & Custom Culinary Engineering',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border border-amber-500/20 aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                      alt="Corporate Summit Stage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden border border-amber-500/20 aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                      alt="Gala Dining Hall"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-slate-100">
            Host Your Next Corporate Summit with Rapturee
          </h3>
          <p className="text-slate-400 text-sm">
            Contact our corporate events desk for custom venue sourcing, proposals, and production timelines.
          </p>
          <button
            onClick={openBookingModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-md text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20"
          >
            PLAN YOUR CORPORATE EVENT →
          </button>
        </div>
      </section>
    </div>
  );
};
