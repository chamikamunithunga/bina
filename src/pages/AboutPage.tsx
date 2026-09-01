import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';
import { ShieldCheck, Award, Globe, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openBookingModal, navigateTo } = useNavigation();

  return (
    <div className="bg-[#0B0B0E] text-slate-100 min-h-screen pt-24 pb-24 overflow-hidden">
      {/* ========================================================================= */}
      {/* HERO SECTION MATCHING USER SCREENSHOT                                     */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center pt-12 pb-20 overflow-hidden">
        {/* Warm candlelit outdoor starlit background image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/hero/hero-acoustic.jpg"
            alt="Rapturee Luxury Evening Atmosphere"
            className="w-full h-full object-cover object-right filter contrast-110 saturate-120"
          />
          {/* Deep dark gradient shading overlay: dark black on left, fading to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/95 via-45% to-[#0B0B0E]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E] via-transparent to-[#0B0B0E]" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <ScrollReveal direction="down">
              {/* Badge line with dashes on both sides */}
              <div className="flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                <div className="w-6 h-[1.5px] bg-amber-500" />
                <span>ABOUT US</span>
                <div className="w-6 h-[1.5px] bg-amber-500" />
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-luxury text-5xl sm:text-7xl font-normal text-slate-100 leading-[1.1] tracking-tight mb-8">
                The Right Experience.<br />
                The Right Quality.<br />
                <span className="text-amber-400">The Right Value.</span>
              </h1>

              {/* Line Accent with Diamond Dot */}
              <div className="flex items-center gap-3 mb-8 max-w-md">
                <div className="w-16 h-[2px] bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rotate-45 bg-amber-400" />
                <div className="w-24 h-[1px] bg-amber-500/40" />
              </div>

              {/* Body Text Paragraphs matching screenshot */}
              <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-xl">
                <p>
                  We believe every event deserves the right balance of quality, creativity, and cost.
                </p>
                <p>
                  We work closely with our clients to understand their vision, requirements, and budget, delivering solutions that provide exceptional value without compromising on service.
                </p>
                <p>
                  From intimate gatherings and corporate functions to large-scale celebrations and stage productions, our wide range of event services allows us to tailor every aspect to suit your occasion.
                </p>
                <p>
                  Whether you are looking for a practical, budget-friendly solution or a premium, fully customized experience, we offer flexible options to match your needs.
                </p>
              </div>

              {/* CTA Action */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={openBookingModal}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-md transition-all duration-300 text-xs tracking-wider uppercase shadow-xl shadow-amber-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>PLAN YOUR EVENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className="border border-amber-500/50 hover:border-amber-400 text-slate-100 hover:text-amber-300 px-8 py-4 rounded-md transition-all duration-300 text-xs tracking-wider uppercase bg-[#0B0B0E]/50 backdrop-blur-md hover:bg-amber-500/10 cursor-pointer"
                >
                  GET IN TOUCH
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR STANDARDS & VALUES                                                    */}
      {/* ========================================================================= */}
      <section className="bg-[#0E0E14] border-y border-amber-500/10 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
                OUR PROMISE
              </span>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl text-slate-100">
                What Sets Rapturee Apart
              </h2>
              <div className="w-12 h-[2px] bg-amber-500 mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-[#121218] p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-slate-100">Unmatched Quality</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    Every element—from floral architecture to sound engineering—is hand-selected and meticulously tested for absolute perfection.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-[#121218] p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-slate-100">Transparent Value</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    We provide complete financial clarity and flexible options so you get maximum artistic and technical value within your budget.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-[#121218] p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-slate-100">End-to-End Production</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    From initial concept blueprinting to stage tear-down, our dedicated event directors handle every single operational detail.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
