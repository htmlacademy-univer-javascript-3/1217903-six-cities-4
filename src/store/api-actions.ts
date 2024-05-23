import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, TIMEOUT_SHOW_ERROR } from '../consts';
import { Offer } from '../types/offer-type';
import { AppDispatch, State } from '../types/state-type';
import { filterOffers, loadOffers, isLoading, setError} from './action';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'sixSities/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const getOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isLoading(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(isLoading(false));
    dispatch(loadOffers(data));
    dispatch(filterOffers());
  },
);
