import { Fragment } from 'react';
import { CitiesName } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { changeCity, filterOffers } from '../../store/action';

type CitiesListProps = {
  currentCity: string;
}

export function CitiesList({ currentCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityClick = (city: CitiesName) => {
    dispatch(changeCity(city));
    dispatch(filterOffers());
  };

  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.entries(CitiesName).map(([key, value]) => (
              <li key={key} className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${value as string === currentCity ? 'tabs__item--active' : ''}`}
                  href="#" onClick={() => handleCityClick(value)}
                >
                  <span>{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div >
    </Fragment >

  );
}
