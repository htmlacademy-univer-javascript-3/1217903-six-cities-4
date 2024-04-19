import { Location } from './location-type';
import { Offers } from './offer-type';

export type MapProps = {
    location: Location;
    offers: Offers;
    specialOfferId: string | null;
    type: string;
};

export type PointType = {
    title: string;
    latitude: number;
    longitude: number;
};

export type PointTypes = PointType[];
