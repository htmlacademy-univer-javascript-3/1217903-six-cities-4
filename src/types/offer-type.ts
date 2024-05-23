import { City } from './city-type';
import { Host } from './host-type';
import { Location } from './location-type';

export type Offer = {
  id: string;
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

export type SortingTypes = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';
