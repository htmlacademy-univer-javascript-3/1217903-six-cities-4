import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main-page';
import Favorites from '../../pages/Favorites-page';
import OfferPage from '../../pages/Offer-page';
import { AppRoute, AuthorizationStatus } from '../../consts';
import NotFound from '../../pages/NotFound-page';
import PrivateRoute from '../Private-route/Private-route';
import SignIn from '../../pages/SignIn-page';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/Loading-page';


function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  const offers = useAppSelector((state) => state.filteredOffers);
  return isLoading ? <LoadingPage /> : (
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
          element={<OfferPage nearPlaces={offers} />}
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
