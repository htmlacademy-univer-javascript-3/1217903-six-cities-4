import { Review } from '../../types/reviews-type';
import { formatDate } from '../../services/utils';
import OfferRating from '../Offer-rating/Offer-rating';
function ReviewsItem({ name, avatar, review, dateTime, rating }: Review): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width={54} height={54} alt={name} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <OfferRating rating={rating} type='review' />
        <p className="reviews__text">
          {review}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{formatDate(dateTime)}</time>
      </div>
    </li>
  );
}
export default ReviewsItem;
