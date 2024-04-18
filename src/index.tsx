import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { mockOffersShort } from './mocks/offers.ts';
import { mockFavoritesOffers } from './mocks/favorites.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersShort={mockOffersShort} favoritesOffers={mockFavoritesOffers} />
  </React.StrictMode>
);
