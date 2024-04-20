import Header from '../components/Header/Header.tsx';
import OffersList from '../components/Offer-list/Offer-list.tsx';
import { OffersShort } from '../types/offer-type.ts';
import Map from '../components/Map/Map.tsx';
import { Location } from '../types/location-type.ts';

type MainProps = {
  offers: OffersShort;
}
function Main(props: MainProps): JSX.Element {
  const points = props.offers.map((offer) => offer.location);
  const centre: Location = {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12,
  };
  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList offers={props.offers} ></OffersList>
            <div className="cities__right-section">
              <Map centre={centre} points={points} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
