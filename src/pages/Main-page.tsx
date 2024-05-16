import Header from '../components/Header/Header.tsx';
import OffersList from '../components/Offer-list/Offer-list.tsx';
import { Offer } from '../types/offer-type.ts';
import Map from '../components/Map/Map.tsx';
import { Location } from '../types/location-type.ts';
import { MapType } from '../consts.ts';
import { useAppSelector } from '../hooks/index.ts';
import { CitiesList } from '../components/Cities-list/Cities-list.tsx';
import { cities } from '../mocks/Cities.ts';

type MainProps = {
  offers: Offer[];
}
function Main(props: MainProps): JSX.Element {
  const currentCity = useAppSelector((state)=>state.city);
  const points = props.offers.map((offer) => offer.location);
  const currentCityCoords = cities.find(city => city.name === currentCity)?.location;
  const centre: Location = {
    latitude: currentCityCoords?.latitude as number,
    longitude: currentCityCoords?.longitude as number,
    zoom: currentCityCoords?.zoom as number,
  };

  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <main className="page__main page__main--index">
        <CitiesList currentCity={currentCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList currentCity={currentCity} offers={props.offers} ></OffersList>
            <div className="cities__right-section">
              <Map centre={centre} points={points} type={MapType.CityMap}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
