import { CitiesName } from '../consts.js';
import {store} from '../store/index.js';
import { Offer } from './offer-type.js';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type StateType = {
  cityName: CitiesName ;
  offers: Offer[];
  filteredOffers: Offer[];
  isLoading: boolean;
  error: string | null;
}
