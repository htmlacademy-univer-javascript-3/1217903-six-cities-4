import { createAction } from '@reduxjs/toolkit';
import { Actions, CitiesName } from '../consts';
import { Offer } from '../types/offer-type';


export const changeCity = createAction(Actions.change_city, (textContent: CitiesName) => ({
  payload: textContent,
}));
export const loadOffers = createAction<Offer[]>(Actions.load_offers);
export const filterOffers = createAction(Actions.filter_offers);
export const isLoading = createAction<boolean>(Actions.is_loading);
export const setError = createAction<string | null>(Actions.set_Error);
