import FavoriteOffer from '../Favorite-offer/Favorite-offer.tsx';
import { Offer } from '../../types/offer-type.ts';
import { useState } from 'react';

type FavoriteOffersListProps = {
  favoriteOffers: Offer[];
}

function FavoriteOffersList(props: FavoriteOffersListProps): JSX.Element {

  const [, setActiveOfferId] = useState<number | null>(null);
  const locations = [...new Set(props.favoriteOffers.map((offer) => offer.city.name))];
  return (
    <ul className="favorites__list">
      {locations.map((city) => {
        const offerByCity = props.favoriteOffers.filter((offer) => offer.city.name === city);
        return (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offerByCity.map((offer) => (
                <FavoriteOffer offer={offer} key={offer.id} onHover={setActiveOfferId} />
              ))}
            </div>
          </li>);
      })}
    </ul>
  );

}
export default FavoriteOffersList;
