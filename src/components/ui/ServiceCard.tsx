import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  delay = 0,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col bg-[#121218]/80 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-amber-500/10"
    >
      {/* Image Container with Smooth Zoom */}
      <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-transparent opacity-80" />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col items-center text-center flex-1">
        {/* Title */}
        <h3 className="text-amber-400 font-semibold tracking-wider text-sm sm:text-base uppercase mb-2 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>

        {/* Small Golden Divider Line matching Screenshot 3/4/5 */}
        <div className="w-8 h-[2px] bg-amber-500/60 mb-4 group-hover:w-12 transition-all duration-300" />

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
