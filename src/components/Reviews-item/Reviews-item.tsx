import { Fragment } from 'react';

function ReviewsItem({ name, avatar, review, dateTime, rating }: ReviewsProps): JSX.Element {

  return (
    <Fragment>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatar} width={54} height={54} alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: '80%' }} />
              <span className="visually-hidden">{rating}</span>
            </div>
          </div>
          <p className="reviews__text">
            {review}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{dateTime}</time>
        </div>
      </li>
    </Fragment>
  );
}
export default ReviewsItem;