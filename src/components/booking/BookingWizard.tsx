import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { X, CheckCircle, Calendar, Users, DollarSign, MapPin, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import type { EventBookingForm } from '../../types';

export const BookingWizard: React.FC<{ isModal?: boolean }> = ({ isModal = true }) => {
  const { closeBookingModal } = useNavigation();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<EventBookingForm>({
    eventType: 'Luxury Weddings',
    guestCount: '100 - 250 Guests',
    eventDate: '',
    locationPreference: 'Beachfront & Coastal Resort',
    budgetRange: '$50,000 - $100,000',
    fullName: '',
    email: '',
    phone: '',
    additionalDetails: '',
  });

  const eventTypes = [
    { id: 'Luxury Weddings', title: 'Luxury Weddings', desc: 'Bespoke romantic celebrations & destination weddings' },
    { id: 'Corporate Galas', title: 'Corporate Galas & Summits', desc: 'High-impact executive gatherings & award galas' },
    { id: 'Entertainment', title: 'Live Entertainment & Concerts', desc: 'Stage productions, artist rosters & festival galas' },
    { id: 'Private Gigs', title: 'Private Gigs & Lounges', desc: 'Intimate acoustic sessions & rooftop lounge vibes' },
    { id: 'Other Events', title: 'Bespoke Celebrations', desc: 'Fashion shows, art unveilings & milestone galas' },
  ];

  const guestCounts = ['Under 50 Guests', '50 - 150 Guests', '150 - 300 Guests', '300 - 500 Guests', '500+ Executive Guests'];

  const venues = [
    'Beachfront & Coastal Villa',
    'Historic Castle & Manor',
    'Modern Metropolitan Ballroom',
    'Private Estate & Gardens',
    'Rooftop Lounge & Sky Bar',
  ];

  const budgets = ['$25,000 - $50,000', '$50,000 - $100,000', '$100,000 - $250,000', '$250,000+ Unlimited Bespoke'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    if (isModal) closeBookingModal();
  };

  const content = (
    <div className="bg-[#121218] text-slate-100 rounded-2xl border border-amber-500/30 overflow-hidden shadow-2xl max-w-2xl w-full mx-auto relative">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-slate-900 via-[#181824] to-slate-900 px-6 sm:px-8 py-6 border-b border-amber-500/20 flex items-center justify-between">
        <div>
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Event Planning Engine
          </span>
          <h2 className="font-serif-luxury text-2xl font-normal text-slate-100">
            {isSubmitted ? 'Booking Consultation Confirmed' : `Step ${step} of 3: ${step === 1 ? 'Select Experience' : step === 2 ? 'Event Specifications' : 'Contact Details'}`}
          </h2>
        </div>
        {isModal && (
          <button
            onClick={closeBookingModal}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif-luxury text-3xl text-slate-100 mb-2">Thank You, {formData.fullName || 'Valued Guest'}!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your consultation request for <span className="text-amber-400 font-semibold">{formData.eventType}</span> has been received. Our senior event director will contact you within 4 hours.
              </p>
            </div>

            <div className="bg-[#1A1A24] p-5 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Event Type:</span>
                <span className="text-slate-200 font-medium">{formData.eventType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Target Date:</span>
                <span className="text-slate-200 font-medium">{formData.eventDate || 'To be finalized'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Guest Count:</span>
                <span className="text-slate-200 font-medium">{formData.guestCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Budget Allocation:</span>
                <span className="text-amber-400 font-semibold">{formData.budgetRange}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3 rounded-lg text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
            >
              Done &amp; Return
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1: EVENT TYPE */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <label className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                    Select Your Vision:
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {eventTypes.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setFormData({ ...formData, eventType: item.id })}
                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                          formData.eventType === item.id
                            ? 'bg-amber-500/10 border-amber-500 text-slate-100 shadow-md shadow-amber-500/10'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                          formData.eventType === item.id ? 'border-amber-400 bg-amber-500' : 'border-slate-600'
                        }`}>
                          {formData.eventType === item.id && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-slate-100">{item.title}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SPECIFICATIONS */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  {/* Guest Count */}
                  <div>
                    <label className="text-xs uppercase font-semibold text-amber-400 tracking-wider flex items-center gap-1.5 mb-2">
                      <Users className="w-3.5 h-3.5" /> Estimated Guests
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    >
                      {guestCounts.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Venue Style */}
                  <div>
                    <label className="text-xs uppercase font-semibold text-amber-400 tracking-wider flex items-center gap-1.5 mb-2">
                      <MapPin className="w-3.5 h-3.5" /> Preferred Venue Setting
                    </label>
                    <select
                      value={formData.locationPreference}
                      onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    >
                      {venues.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {/* Target Date */}
                  <div>
                    <label className="text-xs uppercase font-semibold text-amber-400 tracking-wider flex items-center gap-1.5 mb-2">
                      <Calendar className="w-3.5 h-3.5" /> Target Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  {/* Budget Allocation */}
                  <div>
                    <label className="text-xs uppercase font-semibold text-amber-400 tracking-wider flex items-center gap-1.5 mb-2">
                      <DollarSign className="w-3.5 h-3.5" /> Estimated Budget Allocation
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-slate-400 hover:text-slate-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACT & SUBMISSION */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs uppercase font-semibold text-slate-300 mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-semibold text-slate-300 mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase font-semibold text-slate-300 mb-1.5 block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-semibold text-slate-300 mb-1.5 block">Special Design Requests</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your vision, theme ideas, or specific artists..."
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-slate-400 hover:text-slate-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
                    >
                      Request Consultation <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        {content}
      </div>
    );
  }

  return content;
};
