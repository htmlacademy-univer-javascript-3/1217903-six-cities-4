import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main-page';
import Favorites from '../../pages/Favorites-page';
import Offer from '../../pages/Offer-page';
import { AppRoute, AuthorizationStatus } from '../../consts';
import NotFound from '../../pages/NotFound-page';
import PrivateRoute from '../Private-route/Private-route';
import { OffersDetailed, OffersShort } from '../../types/offer-type'
import SignIn from '../../pages/SignIn-page';
type AppProps = {
  cardsCount: number;
  offersShort: OffersShort;
  offersDetailed: OffersDetailed;
  favoritesOffers: OffersShort;
};

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={props.offersShort} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.Favorite}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorites favoriteOffers={props.favoritesOffers}></Favorites></PrivateRoute>}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer /*offersDetailed={props.offersDetailed}*/ />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
