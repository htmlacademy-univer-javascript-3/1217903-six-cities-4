import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { Settings } from './consts.ts';
import { mockOffersShort } from './mocks/offers.ts'; 
import {mockFavoritesOffers} from './mocks/favorites.ts'
import { mockOffersDetailed } from './mocks/offers-detailed.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsCount={Settings.cardsCount} offersShort={mockOffersShort} favoritesOffers={mockFavoritesOffers} offersDetailed={mockOffersDetailed}/>
  </React.StrictMode>
);
