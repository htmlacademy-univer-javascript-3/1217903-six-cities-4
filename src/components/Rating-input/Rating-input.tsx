import { Fragment } from 'react';

const rates = [
  { value: 1, title: 'terribly' },
  { value: 2, title: 'badly' },
  { value: 3, title: 'not bad' },
  { value: 4, title: 'good' },
  { value: 5, title: 'perfect' }

];

type RatingInputProps = {
  rating: number;
  onRateChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

function RatingInput({rating, onRateChange}: RatingInputProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        rates.map(({ value, title }) => {
          const id = `${value}-stars`;
          return (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={id}
                type="radio"
                checked= {value === rating}
                onChange={onRateChange}
              />
              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );

}

export default RatingInput;
