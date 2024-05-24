import { createAction } from '@reduxjs/toolkit';
import { Actions, AuthorizationStatus, CitiesName } from '../consts';
import { Offer } from '../types/offer-type';
import { ReviewData, ReviewType } from '../types/reviews-type';


export const changeCity = createAction(Actions.change_city, (textContent: CitiesName) => ({
  payload: textContent,
}));
export const loadOffers = createAction<Offer[]>(Actions.load_offers);
export const filterOffers = createAction(Actions.filter_offers);
export const isLoading = createAction<boolean>(Actions.is_loading_offers);
export const setError = createAction<string | null>(Actions.set_Error);
export const setAuthorizationStatus = createAction<AuthorizationStatus>(Actions.set_authorization_status);
export const loadOffer = createAction<Offer>(Actions.load_offer);
export const loadNearbyOffers = createAction<Offer[]>(Actions.load_nearby_offers);
export const loadOfferComments = createAction<ReviewType[]>(Actions.load_offer_comments);
export const isOfferLoading = createAction<boolean>(Actions.is_loading_offer);
export const createComment = createAction<ReviewData>(Actions.create_comment);
