import { ReviewType } from '../../types/reviews-type';
import { formatDate } from '../../services/utils';
import OfferRating from '../Offer-rating/Offer-rating';
function ReviewsItem({ user, rating, comment, date }: ReviewType): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt={user.name} />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <OfferRating rating={rating} type='review' />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate(date)}</time>
      </div>
    </li>
  );
}
export default ReviewsItem;
