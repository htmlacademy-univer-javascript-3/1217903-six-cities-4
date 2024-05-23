import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
// import { mockOffers } from '../mocks/offers';
import { AppRoute, MapType } from '../consts';
// import ReviewsList from '../components/Reviews-list/Reviews-list';
import NearPlaces from '../components/Near-places/Near-places';
import { Offer } from '../types/offer-type';
import { Location } from '../types/location-type';
import Map from '../components/Map/Map';
// import { Review } from '../types/reviews-type';
import PremiumLabel from '../components/Premiumlabel/Premiumlabel';
import OfferRating from '../components/Offer-rating/Offer-rating';

type OfferPageProps = {
  // reviews: Review[];
  nearPlaces: Offer[];
}
function OfferPage(props: OfferPageProps): JSX.Element {
  const points = props.nearPlaces.map((offer) => offer.location);
  const centre: Location = {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12,
  };
  const { id } = useParams();
  const offer = props.nearPlaces.find((el) => el.id === id);
  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  return (
    <div className="page">
      <Header></Header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumLabel isPremium={offer.isPremium} classnamePrefix='offer' />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <OfferRating rating={offer.rating} type='full'>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </OfferRating>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">`&nbsp;`night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&#39;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              {/* <ReviewsList reviews={props.reviews}></ReviewsList> */}
            </div>
          </div>
          <Map centre={centre} points={points} type={MapType.OfferMap}></Map>
          <div className="container">
            <NearPlaces nearPlaces={props.nearPlaces}></NearPlaces>
          </div>
        </section>
      </main>
    </div>

  );
}
export default OfferPage;
