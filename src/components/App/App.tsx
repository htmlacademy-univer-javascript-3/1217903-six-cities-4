import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main-page';
import Favorites from '../../pages/Favorites-page';
import OfferPage from '../../pages/Offer-page';
import { AppRoute } from '../../consts';
import NotFound from '../../pages/NotFound-page';
import PrivateRoute from '../Private-route/Private-route';
import Login from '../../pages/Login-page';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/Loading-page';
import HistoryRouter from '../history-router';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  const offers = useAppSelector((state) => state.filteredOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (isLoading) ? <LoadingPage /> : (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers} />}
        />
        <Route
          path={AppRoute.login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorite}
          element={<PrivateRoute><Favorites favoriteOffers={favoriteOffers}></Favorites></PrivateRoute>}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
