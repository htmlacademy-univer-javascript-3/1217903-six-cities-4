import ReviewsItem from "../Reviews-item/Reviews-item";

type ReviewsListProps = {
  reviews: ReviewsProps[];
}
function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewsItem
          key={review.name + review.dateTime}
          name={review.name}
          avatar={review.avatar}
          review={review.review}
          dateTime={review.dateTime}
          rating={review.rating}
        ></ReviewsItem>
      )}
    </ul>
  );
}
export default ReviewsList;