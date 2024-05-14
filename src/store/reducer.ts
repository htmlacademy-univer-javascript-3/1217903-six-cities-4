import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterOffers } from './action';
import { CitiesName } from '../consts';
import { mockOffers } from '../mocks/offers';

const start_city_name = 'Paris';

const initialState = {
  city: CitiesName.PARIS,
  offers: mockOffers.filter((offer) => offer.city.name === start_city_name),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.offers = mockOffers.filter((offer) => offer.city.name === state.city as string);
    });
});

export { reducer };
