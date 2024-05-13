import FavoriteOffersList from '../components/Favorite-offer-list/Favorite-offer-list';
import Header from '../components/Header/Header';
import { Offer } from '../types/offer-type';

type FavoritePageProps = {
  favoriteOffers: Offer[];
}

function Favorites(props: FavoritePageProps): JSX.Element {
  return (
    <div className="page">
      <Header></Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteOffersList favoriteOffers={props.favoriteOffers}></FavoriteOffersList>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>

  );
}
export default Favorites;
