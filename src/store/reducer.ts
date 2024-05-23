import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterOffers, isLoading, loadOffers, setError } from './action';
import { CitiesName } from '../consts';
import { StateType } from '../types/state-type';

const initialState: StateType = {
  offers: [],
  cityName: CitiesName.PARIS,
  filteredOffers: [],
  isLoading: false,
  error: null,
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
    });
});

export default reducer;
