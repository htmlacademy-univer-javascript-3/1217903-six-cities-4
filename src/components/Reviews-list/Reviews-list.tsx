import { ReviewsProps } from '../../types/reviews-type';
import ReviewForm from '../Reviews-form/Reviews-form';
import ReviewsItem from '../Reviews-item/Reviews-item';

type ReviewsListProps = {
  reviews: ReviewsProps[];
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
            key={review.rating + review.name}
            name={review.name}
            avatar={review.avatar}
            review={review.review}
            dateTime={review.dateTime}
            rating={review.rating}
          >
          </ReviewsItem>
        ))}
        ;
      </ul>
      <ReviewForm></ReviewForm>
    </section>
  );
}
export default ReviewsList;
