import { FormEvent, useState } from 'react';
import RatingInput from '../Rating-input/Rating-input';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffer, postComment } from '../../store/api-actions';

function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const [message, setMessage] = useState(false);
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const currentOfferId = currentOffer?.offerInfo?.id;

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (comment.length < 30 || comment.length > 300) {
      setMessage(true);
      return;
    }

    setMessage(false);

    if (comment && rating && comment.length >= 30 && comment.length <= 300) {
      const review = { id: currentOfferId as string, comment, rating };
      dispatch(postComment(review)).unwrap().then(() => {
        dispatch(getOffer(currentOfferId));
      });
      setComment('');
      setRating(NaN);
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingInput onRateChange={handleRatingChange} rating={rating} />
      {message && <span>The comment must be at least 30 and no more than 300 characters</span>}
      <textarea
        value={comment}
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
