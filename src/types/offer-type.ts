import { City } from './city-type';
import { Host } from './host-type';
import { Location } from './location-type';

export type Offer = {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number;
  bedrooms: number;
  maxAdults: number;
  amenities: string[];
  host: Host;
  city: City;
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  images: string[];
  rating: number;
};
