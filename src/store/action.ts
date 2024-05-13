import { createAction } from '@reduxjs/toolkit';
import { Actions, CitiesName } from '../consts';


export const changeCity = createAction(Actions.change_city, (textContent: CitiesName) => ({
  payload: textContent,
}));

export const filterOffers = createAction(Actions.filter_offers);
