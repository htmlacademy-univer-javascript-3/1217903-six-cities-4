import { CitiesName } from '../consts.js';
import {store} from '../store/index.js';
import { Offer } from './offer-type.js';
import { ReviewData, ReviewType } from './reviews-type.js';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type StateType = {
  cityName: CitiesName ;
  offers: Offer[];
  filteredOffers: Offer[];
  isLoading: boolean;
  error: string | null;
  authorizationStatus: string;
  currentOffer: {
    offerInfo: Offer | null;
    comments: ReviewType[];
    nearbyOffers: Offer[];
    isOfferLoading: boolean;
    curCommen: ReviewData | null;
  };
}
