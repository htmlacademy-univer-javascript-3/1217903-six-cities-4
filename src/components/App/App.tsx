import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Login from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import Offer from '../../pages/Offer';
import {AppRoute, AuthorizationStatus} from '../../consts';
import NotFound from '../../pages/NotFound';
import PrivateRoute from '../Private-route/Private-route';
type AppProps = {
  cardsCount: number;
};

function App({ cardsCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main cardsCount={cardsCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorite}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites /></PrivateRoute>}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
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
