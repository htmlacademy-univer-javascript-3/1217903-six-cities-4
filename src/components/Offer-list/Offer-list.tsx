import Card from '../Offer/Offer.tsx';
import { Offer, SortingTypes } from '../../types/offer-type.ts';
import { useState } from 'react';
import { CitiesName } from '../../consts.ts';
import Sorting from '../Sorting/Sorting.tsx';
import { sortOffers } from '../../services/utils.ts';

type OffersListProps = {
  offers: Offer[];
  currentCity: CitiesName;
}

function OffersList(props: OffersListProps): JSX.Element {

  const [, setHoverOfferId] = useState<string | null>(null);
  const [sortingType, setSortingType] = useState<SortingTypes>('Popular');
  const hendleHoverCard = (id: string | null) => setHoverOfferId(id);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{props.offers.length} places to stay in {props.currentCity}</b>
      <Sorting sortingType={sortingType} onChangeSortingType={(type) => setSortingType(type as SortingTypes)}></Sorting>
      <div className="cities__places-list places__list tabs__content">
        {sortOffers(props.offers, sortingType).map((offer) => (
          <Card offer={offer} key={offer.id} onHover={hendleHoverCard} />))}
      </div>
    </section>
  );

}

export default OffersList;
