import { useAppSelector } from '../../hooks';
import ReviewForm from '../Reviews-form/Reviews-form';
import ReviewsItem from '../Reviews-item/Reviews-item';


function ReviewsList(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentOfferComments = useAppSelector((state) => state.currentOffer.comments);
  const reviews = currentOfferComments.slice().sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime())).slice(0, 10);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.user.name}
            {...review}
          />
        ))}
      </ul>
      {authorizationStatus === 'AUTH' && <ReviewForm />}
    </section>
  );
}

export default ReviewsList;
