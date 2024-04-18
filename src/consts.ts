export const Settings = {
  cardsCount: 5,
};

export enum AppRoute {
  Main = '/',
  SignIn = '/signIn',
  Favorite = '/favorite',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',

}
