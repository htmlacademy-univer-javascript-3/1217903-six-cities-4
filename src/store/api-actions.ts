import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, Actions, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts';
import { Offer } from '../types/offer-type';
import { AppDispatch, State } from '../types/state-type';
import { filterOffers, loadOffers, isLoading, setError, setAuthorizationStatus, loadOffer, loadOfferComments, createComment, loadNearbyOffers } from './action';
import { store } from './';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-type';
import { UserType } from '../types/user-type';
import { ReviewData, ReviewType } from '../types/reviews-type';

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
  Actions.load_offers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(isLoading(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
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
      await api.get(APIRoute.Login);
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
    const { data: { token } } = await api.post<UserType>(APIRoute.Login, { email, password });
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
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const getOffer = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.load_offer,
  async (offerId, { dispatch, extra: api }) => {

    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));

  },
);

export const getOfferComments = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.load_offer_comments,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadOfferComments(data));
  },
);

export const setNearbyOffers = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.load_nearby_offers,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearbyOffers(data));
  },
);

export const postComment = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.create_comment,
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewData>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(createComment(data));
  },
);
