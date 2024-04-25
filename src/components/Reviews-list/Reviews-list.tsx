import { Review } from '../../types/reviews-type';
import ReviewForm from '../Reviews-form/Reviews-form';
import ReviewsItem from '../Reviews-item/Reviews-item';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.name}
            {...review}
          />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewsList;
