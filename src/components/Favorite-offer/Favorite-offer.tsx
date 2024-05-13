import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer-type';
import { AppRoute } from '../../consts';
import PremiumLabel from '../Premiumlabel/Premiumlabel';
import OfferRating from '../Offer-rating/Offer-rating';

type FavoriteOfferProps = {
  offer: Offer;
  onHover: (id: number | null) => void;
}

function FavoriteOffer(props: FavoriteOfferProps): JSX.Element {
  return (
    <article
      className="favorites__card place-card"
      onMouseEnter={() => props.onHover(props.offer.id)}
      onMouseLeave={() => props.onHover(null)}
    >
      <PremiumLabel isPremium={props.offer.isPremium} classnamePrefix='place-card' />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer.replace(':id', `${props.offer.id}`)}>
          <img
            className="place-card__image"
            src={props.offer.previewImage}
            width="150"
            height="110"
            alt="Place previewImage"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${props.offer.isFavorite ? 'place-card__bookmark-button--active'
            : ''}`} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{props.offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <OfferRating rating={props.offer.rating} type='card' />
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', `${props.offer.id}`)}>{props.offer.title}</Link>
        </h2>
        <p className="place-card__type">{props.offer.type}</p>
      </div>
    </article>
  );
}
export default FavoriteOffer;
