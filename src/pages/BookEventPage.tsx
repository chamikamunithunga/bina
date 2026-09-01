import React from 'react';
import { BookingWizard } from '../components/booking/BookingWizard';

export const BookEventPage: React.FC = () => {
  return (
    <div className="bg-[#0B0B0E] text-slate-100 min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">
          RESERVE YOUR DATE
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-slate-100 font-normal mb-4">
          Book Your Event Experience
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
          Complete the event specification below to initiate venue sourcing, concept design, and private consultation.
        </p>
      </div>

      <BookingWizard isModal={false} />
    </div>
  );
};
