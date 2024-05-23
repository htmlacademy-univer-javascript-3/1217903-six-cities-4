export enum AppRoute {
  Main = '/',
  login = '/login',
  Favorite = '/favorite',
  Offer = '/offer/:id',
  NotFound = '*',
  Offers = '/offers',
  Questions = 'Questions',
  Logout = '/logout',
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
  filter_offers = 'sixSities/offers/filterOffers',
  is_loading = 'sixSities/isLoading',
  set_Error = 'error/setError',
  load_offers = 'sixSities/offers/loadOffers',
  set_authorization_status = 'auth/setAuthorizationStatus',
  clear_error = 'error/clearError',
  get_offers = 'sixSities/offers/getOffers',
  check_auth = 'auth/checkAuth',
  Log_in = 'auth/login',
  Log_out = 'auth/logout'
}

export const SortingTypesArr = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];


export const TIMEOUT_SHOW_ERROR = 2000;


