export type PageId = 
  | 'home'
  | 'services-corporate'
  | 'services-weddings'
  | 'services-entertainment'
  | 'services-gigs'
  | 'services-other'
  | 'about'
  | 'contact'
  | 'book';

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  pageId: PageId;
  title: string;
  subtitle: string;
  breadcrumb: string;
  description: string;
  heroImage: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  features: ServiceFeature[];
  longDescription?: string;
  galleryImages?: string[];
  stats?: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  event: string;
  rating: number;
  avatar?: string;
}

export interface EventBookingForm {
  eventType: string;
  guestCount: string;
  eventDate: string;
  locationPreference: string;
  budgetRange: string;
  fullName: string;
  email: string;
  phone: string;
  additionalDetails: string;
}
