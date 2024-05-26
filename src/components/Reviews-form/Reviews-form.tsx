import { FormEvent, useState } from 'react';
import RatingInput from '../Rating-input/Rating-input';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffer, postComment } from '../../store/api-actions';

function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const currentOfferId = currentOffer ? currentOffer.offerInfo?.id : undefined;
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (comment && rating) {
      const review = {id: currentOfferId, comment: comment, rating: rating};
      dispatch(postComment(review)).unwrap().then(() => {
        dispatch(getOffer(currentOffer?.offerInfo?.id));
      });
    }
    setComment('');
    setRating(NaN);
  };
  return (
    <form className="reviews__form form" onSubmit={handleSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingInput onRateChange={handleRatingChange} rating={rating}></RatingInput>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
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
      <p>Your review rating: { }</p>
      <p>Your review description: {}</p>
    </form>
  );
}

export default ReviewForm;
