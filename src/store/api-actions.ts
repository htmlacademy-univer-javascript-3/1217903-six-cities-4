import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Actions, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts';
import { Offer } from '../types/offer-type';
import { AppDispatch, State } from '../types/state-type';
import { filterOffers, loadOffers, isLoading, setError, setAuthorizationStatus } from './action';
import { store } from './';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-type';
import { UserData } from '../types/uder-data';

export const clearErrorAction = createAsyncThunk(
  Actions.clear_error,
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
  Actions.get_offers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(isLoading(true));
    const { data } = await api.get<Offer[]>(AppRoute.Offers);
    dispatch(isLoading(false));
    dispatch(loadOffers(data));
    dispatch(filterOffers());
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.check_auth,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(AppRoute.login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const logIn = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.Log_in,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(AppRoute.login, { email, password });
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  Actions.Log_out,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(AppRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);
