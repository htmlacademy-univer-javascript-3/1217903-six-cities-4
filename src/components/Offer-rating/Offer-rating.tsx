type OfferRatingprops = {
  rating: number;
  type: 'full' | 'card' | 'review';
  children?: JSX.Element;
}

const typeRatingClassName = {
  full: 'offer__rating rating',
  card: 'place-card__rating rating',
  review: 'reviews__rating rating',
};

const typeStarClassName = {
  full: 'offer__stars rating__stars',
  card: 'place-card__stars rating__stars',
  review: 'reviews__stars rating__stars',
};

function OfferRating({ rating, type, children }: OfferRatingprops) {
  const width = `${Math.round(rating * 20)}%`;
  const ratingClassName = typeRatingClassName[type];
  const starClassName = typeStarClassName[type];
  return (
    <div className={ratingClassName}>
      <div className={starClassName}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default OfferRating;
