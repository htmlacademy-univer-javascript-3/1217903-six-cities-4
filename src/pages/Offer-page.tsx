import { Navigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { AppRoute, MapType } from '../consts';
import NearPlaces from '../components/Near-places/Near-places';
import { Location } from '../types/location-type';
import Map from '../components/Map/Map';
import PremiumLabel from '../components/Premiumlabel/Premiumlabel';
import OfferRating from '../components/Offer-rating/Offer-rating';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { isOfferLoading } from '../store/action';
import { getOffer, getOfferComments, setNearbyOffers } from '../store/api-actions';
import ReviewsList from '../components/Reviews-list/Reviews-list';
import { cities } from '../mocks/Cities';

function OfferPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const { id: offerId } = useParams();
  const currentOffer = useAppSelector((state) => state.currentOffer);


  useEffect(() => {
    dispatch(isOfferLoading(true));
    dispatch(getOffer(offerId));
    dispatch(getOfferComments(offerId));
    dispatch(setNearbyOffers(offerId));
    dispatch(isOfferLoading(false));
  }, [offerId, dispatch]);

  const currentCity = useAppSelector((state) => state.cityName);
  const points = currentOffer.nearbyOffers.map((offer) => offer.location);
  const currentCityCoords = cities.find((city) => city.name === currentCity as string)?.location;
  const centre: Location = {
    latitude: currentCityCoords?.latitude as number,
    longitude: currentCityCoords?.longitude as number,
    zoom: currentCityCoords?.zoom as number,
  };


  if (currentOffer.offerInfo) {
    const { isFavorite, isPremium, description, goods, host, images, rating, maxAdults, price, title, type, bedrooms } = currentOffer.offerInfo;
    return (
      <div className="page">
        <Header></Header>
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {images.map((image) => (
                  (
                    <div className="offer__image-wrapper" key={image}>
                      <img className="offer__image" src={image} alt="studio" />
                    </div>
                  )
                ))}
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                <PremiumLabel isPremium={isPremium} classnamePrefix='offer' />
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {title}
                  </h1>
                  <button className={`offer__bookmark-button button" ${isFavorite ? 'offer__bookmark-button--active' : ''} type="button`}>
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <OfferRating rating={rating} type='full'>
                  <span className="offer__rating-value rating__value">{rating}</span>
                </OfferRating>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {`${bedrooms} Bedrooms`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    {`Max ${maxAdults} adults`}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&#39;s inside</h2>
                  <ul className="offer__inside-list">
                    {goods.map((good) => (
                      <li className="offer__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src={host.avatar} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">
                      {host.name}
                    </span>
                    <span className="offer__user-status">
                      {host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="offer__description">
                    {description.split('.').map((sentense) => (
                      <p className="offer__text" key={sentense}>
                        {sentense}
                      </p>
                    ))}
                  </div>
                </div>
                {<ReviewsList></ReviewsList>}
              </div>
            </div>
            <Map centre={centre} points={points} type={MapType.OfferMap}></Map>
            <div className="container">
              <NearPlaces nearPlaces={currentOffer.nearbyOffers}></NearPlaces>
            </div>
          </section>
        </main>
      </div>

    );
  }
  else { return <Navigate to={AppRoute.NotFound} /> }
}
export default OfferPage;
