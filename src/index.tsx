import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
// import { mockReviews } from './mocks/review.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { getOffers } from './store/api-actions.ts';
import Error from './components/Error/Error.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(getOffers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error/>
      <App />
    </Provider>
  </React.StrictMode>
);
