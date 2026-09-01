import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Mail, Phone, Send, Lock, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative bg-[#0B0B0E] text-slate-100 min-h-screen pt-28 pb-24 overflow-hidden">
      {/* Warm candlelit dining background image with dark vignette shading */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/images/features/tailored-experiences.jpg"
          alt="Rapturee Candlelit Event Atmosphere"
          className="w-full h-full object-cover filter contrast-110 saturate-120"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/85 to-[#0B0B0E]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E] via-transparent to-[#0B0B0E]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: GET IN TOUCH & PROPOSAL INFORMATION                          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-8 pt-4">
            <ScrollReveal direction="down">
              {/* Badge line */}
              <div className="flex items-center gap-2.5 text-amber-500 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                <div className="w-6 h-[1.5px] bg-amber-500" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-luxury text-4xl sm:text-6xl text-slate-100 font-normal leading-[1.12] tracking-tight mb-6">
                Plan your next
                <br />
                <span className="text-amber-400">unforgettable event</span>
              </h1>

              {/* Diamond accent line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-amber-500/80" />
                <div className="w-2 h-2 rotate-45 bg-amber-400" />
              </div>

              {/* Body text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-xl">
                Share the details of your upcoming event, including your vision, requirements, and tentative date. Our experienced event professionals will carefully assess your needs and develop a high-quality, bespoke proposal tailored to your expectations, delivered at your convenience.
              </p>

              {/* Contact methods */}
              <div className="space-y-6 pt-2">
                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="mailto:hello@rapturee.com"
                      className="text-slate-100 hover:text-amber-400 font-medium text-base transition-colors block"
                    >
                      hello@rapturee.com
                    </a>
                    <span className="text-xs text-slate-400 font-light">
                      We'll get back to you within <span className="text-amber-400 font-normal">24 hours.</span>
                    </span>
                  </div>
                </div>

                {/* WhatsApp / Phone Contact */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="https://wa.me/94771234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-100 hover:text-amber-400 font-medium text-base transition-colors block"
                    >
                      +94 77 123 4567
                    </a>
                    <span className="text-xs text-slate-400 font-light">
                      Chat with us on <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">WhatsApp.</a>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: EVENT PROPOSAL REQUEST FORM                                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left">
              <div className="bg-[#0C0C10]/90 border border-amber-500/30 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6 relative">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-amber-400 mx-auto animate-bounce" />
                    <h3 className="font-serif-luxury text-3xl text-slate-100">Proposal Requested</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto font-light leading-relaxed">
                      Thank you for submitting your event details. A senior event director will review your requirements and deliver a bespoke proposal within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs uppercase tracking-widest text-amber-400 underline font-semibold pt-6 hover:text-amber-300"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name / Organization */}
                    <div>
                      <label className="text-xs text-slate-300 font-medium mb-2 block">
                        Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name or company"
                        className="w-full bg-[#07070A] border border-slate-800 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:border-amber-500/80 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-xs text-slate-300 font-medium mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#07070A] border border-slate-800 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:border-amber-500/80 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label className="text-xs text-slate-300 font-medium mb-2 block">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Your contact number"
                        className="w-full bg-[#07070A] border border-slate-800 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:border-amber-500/80 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="text-xs text-slate-300 font-medium mb-2 block">
                        Event Type
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#07070A] border border-slate-800 rounded-lg px-4 py-3.5 text-sm text-slate-100 focus:border-amber-500/80 focus:outline-none transition-colors appearance-none cursor-pointer">
                          <option>Corporate Gala &amp; Award Night</option>
                          <option>Luxury Wedding Gala</option>
                          <option>Live Concert &amp; Festival</option>
                          <option>Private Gig &amp; Secret Session</option>
                          <option>Other Bespoke Event</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-amber-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <label className="text-xs text-slate-300 font-medium mb-2 block">
                        Event Details
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your event vision, date, location, and guest count..."
                        className="w-full bg-[#07070A] border border-slate-800 rounded-lg px-4 py-3.5 text-sm text-slate-100 placeholder-slate-600 focus:border-amber-500/80 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-semibold py-4 rounded-xl text-sm transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <span>Request Event Proposal</span>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {/* Security note */}
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-2">
                      <Lock className="w-3.5 h-3.5 text-amber-500/80" />
                      <span>Your information is secure and will never be shared.</span>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
