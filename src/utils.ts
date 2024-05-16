import { Offer, SortingTypes } from './types/offer-type';

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(
    new Date(date)
  );

export const sortOffers = (offersToSort: Offer[], type: SortingTypes) => {
  switch (type) {
    case 'Price: low to high':
      return [...offersToSort].sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return [...offersToSort].sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return [...offersToSort].sort((a, b) => b.rating - a.rating);
    case 'Popular':
    default:
      return offersToSort;
  }
};
