export enum AppRoute {
  Main = '/',
  login = '/login',
  Favorite = '/favorite',
  Offer = '/offer/:id',
  NotFound = '*',
  Questions = 'Questions',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapType {
  CityMap = 'cities__map',
  OfferMap = 'offer__map',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum CitiesName {
  AMSTERDAM = 'Amsterdam',
  COLOGNE = 'Cologne',
  PARIS = 'Paris',
  DUSSELDORF = 'Dusseldorf',
  BRUSSELS = 'Brussels',
  HAMBURG = 'Hamburg',
}

export enum Actions {
  change_city = 'sixSities/changeCity',
  is_loading_offers = 'sixSities/isLoadingOffers',
  load_offers = 'sixSities/offers/loadOffers',
  filter_offers = 'sixSities/offers/filterOffers',
  clear_error = 'error/clearError',
  set_Error = 'error/setError',
  check_auth = 'auth/checkAuth',
  Log_in = 'auth/login',
  Log_out = 'auth/logout',
  set_authorization_status = 'auth/setAuthorizationStatus',
  load_offer = 'sixSities/offer/loadOffer',
  load_nearby_offers = 'sixSities/offers/loadNearbyOffers',
  load_offer_comments = 'sixSities/offer/loadOfferComments',
  is_loading_offer = 'sixSities/offer/isOfferLoading',
  create_comment = 'sixSities/createComment',
  get_offer = 'sixSities/offer/getOffer',

}

export const SortingTypesArr = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Offers = '/offers/',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}
