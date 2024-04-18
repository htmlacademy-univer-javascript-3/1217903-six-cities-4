import { City } from "./city-type";
import { Host } from './host-type';
import { Location } from './location-type'

export type OfferShort = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite?: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
}

export type OffersShort = OfferShort[];

export type OfferDetailed = Omit<OfferShort, 'previewImage'> & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
}

export type OffersDetailed = OfferDetailed[];

export type Offer = {
    shortInfo: OfferShort;
    detailedInfo: OfferDetailed;
};

export type Offers = Offer[];
