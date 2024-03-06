// type CardProps = {
//     title: string;
//     isPremium?: boolean;
//     type: 'Room' | 'Apartment';
//     price: number;
//     isLiked?: boolean;
//     rating: 0 | 1 | 2 | 3 | 4 | 5;
//     image: string;
// }
function Card(): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-03.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€180</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
export default Card;

// <article className="cities__card place-card">
//     {props.isPremium &&
//     <div className="place-card__mark">
//         <span>Premium</span>
//     </div>
//     }
//     <div className="cities__image-wrapper place-card__image-wrapper">
//         <a href="#">
//             <img className="place-card__image" src={props.image} width={260} height={200} alt="Place image" />
//         </a>
//     </div>
//     <div className="place-card__info">
//         <div className="place-card__price-wrapper">
//             <div className="place-card__price">
//                 <b className="place-card__price-value">&euro;{props.price}</b>
//                 <span className="place-card__price-text">/&nbsp;night</span>
//             </div>
//             <button className={`place-card__bookmark-button ${props.isLiked ? `place-card__bookmark-button--active` : ``}button`} type="button">
//                 <svg className="place-card__bookmark-icon" width={18} height={19}>
//                     <use xlinkHref="#icon-bookmark" />
//                 </svg>
//                 <span className="visually-hidden">{props.isLiked ? "In bookmarks" : "To bookmarks"}</span>
//             </button>
//         </div>
//         <div className="place-card__rating rating">
//             <div className="place-card__stars rating__stars">
//                 <span style={{ width: `${props.rating / 5 * 100}%` }} />
//                 <span className="visually-hidden">Rating</span>
//             </div>
//         </div>
//         <h2 className="place-card__name">
//             <a href="#">{props.title}</a>
//         </h2>
//         <p className="place-card__type">{props.type}</p>
//     </div>
// </article>
