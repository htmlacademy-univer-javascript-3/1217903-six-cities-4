import { OffersShort } from "../../types/offer-type";
import Card from "../Offer/Offer";

type NearPlacesProps = {
	nearPlaces: OffersShort;
}

function NearPlaces({ nearPlaces }: NearPlacesProps): JSX.Element {
	return (<section className="near-places places">
		<h2 className="near-places__title">Other places in the neighbourhood</h2>
		<div className="near-places__list places__list">
			{
				nearPlaces.map((nearPlace) =>
					<Card
						key={nearPlace.id}
						offer={nearPlace}
					></Card>
				)
			}
		</div>
	</section>);
}
export default NearPlaces;