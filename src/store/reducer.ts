import { createReducer } from '@reduxjs/toolkit';
import { changeCity, createComment, filterOffers, isLoading, isOfferLoading, loadNearbyOffers, loadOffer, loadOfferComments, loadOffers, setAuthorizationStatus, setError } from './action';
import { AuthorizationStatus, CitiesName } from '../consts';
import { StateType } from '../types/state-type';

const initialState: StateType = {
  offers: [],
  cityName: CitiesName.PARIS,
  filteredOffers: [],
  isLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentOffer: {
    offerInfo: null,
    comments: [],
    nearbyOffers: [],
    isOfferLoading: false,
    curCommen: null,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.cityName as string);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(isLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer.offerInfo = action.payload;
    })
    .addCase(isOfferLoading, (state, action) => {
      state.currentOffer.isOfferLoading = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentOffer.comments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.currentOffer.nearbyOffers = action.payload;
    })
    .addCase(createComment, (state, action) => {
      state.currentOffer.curCommen = action.payload;
    });
});

export default reducer;
