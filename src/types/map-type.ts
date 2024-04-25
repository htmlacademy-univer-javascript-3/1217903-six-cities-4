import { MapType } from '../consts';
import { Location } from './location-type';

export type MapProps = {
    centre: Location;
    points: Location[];
    type: MapType;
  };

export type PointType = {
    title: string;
    latitude: number;
    longitude: number;
};

export type PointTypes = PointType[];
