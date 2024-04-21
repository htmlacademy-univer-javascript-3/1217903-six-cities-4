import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { mockOffersShort } from './mocks/offers.ts';
import { mockFavoritesOffers } from './mocks/favorites.ts';
import { mockReviews } from './mocks/review.ts'
import { nearPlaces } from './mocks/near-places.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App reviews={mockReviews} nearPlaces={nearPlaces} offersShort={mockOffersShort} favoritesOffers={mockFavoritesOffers} />
  </React.StrictMode>
);
