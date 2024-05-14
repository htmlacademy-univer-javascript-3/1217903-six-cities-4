import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main-page';
import Favorites from '../../pages/Favorites-page';
import OfferPage from '../../pages/Offer-page';
import { AppRoute, AuthorizationStatus } from '../../consts';
import NotFound from '../../pages/NotFound-page';
import PrivateRoute from '../Private-route/Private-route';
import SignIn from '../../pages/SignIn-page';
import { Review } from '../../types/reviews-type';
import { useAppSelector } from '../../hooks';
type AppProps = {
  reviews: Review[];
};

function App(props: AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.Favorite}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorites favoriteOffers={offers}></Favorites></PrivateRoute>}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage nearPlaces={offers} reviews={props.reviews} />}
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
