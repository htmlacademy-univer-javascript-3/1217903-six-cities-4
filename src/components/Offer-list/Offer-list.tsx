import Card from '../Offer/Offer.tsx';
import { Offer } from '../../types/offer-type.ts';
import { useState } from 'react';
import { CitiesName } from '../../consts.ts';

type OffersListProps = {
  offers: Offer[];
  currentCity: CitiesName;
}

function OffersList(props: OffersListProps): JSX.Element {

  const [, setHoverOfferId] = useState<number | null>(null);
  const hendleHoverCard = (id: number | null) => setHoverOfferId(id);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{props.offers.length} places to stay in {props.currentCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {props.offers.map((offer) => (
          <Card offer={offer} key={offer.id} onHover={hendleHoverCard} />))}
      </div>
    </section>
  );

}

export default OffersList;
