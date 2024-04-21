import { Link } from 'react-router-dom';
import { OfferShort } from '../../types/offer-type';
import { AppRoute } from '../../consts';

type OfferProps = {
  offer: OfferShort;
  onHover?: (id: string | null) => void;
  imageWrapperClass?: string;
  articleClass?: string;
}

function Card({offer, onHover, imageWrapperClass = 'cities__image-wrapper',articleClass = 'cities__card'}: OfferProps): JSX.Element {
  return (
    <article
    className={`place-card ${articleClass}`}
      onMouseEnter={() => onHover?.(offer.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', offer.id)} >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place previewImage"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active'
            : ''}`} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default Card;
