import { OffersShort } from '../types/offer-type';
import {points} from './points';

export const mockOffersShort: OffersShort = [
  {
    id: '855b1827-2e5f-4da3-a835-7a4b7886608b',
    title: 'House in countryside',
    type: 'hotel',
    price: 318,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: points[0].latitude,
        longitude: points[0].longitude,
        zoom: 13
      }
    },
    location: {
      latitude: points[0].latitude,
      longitude: points[0].longitude,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'eec84aed-846d-4f09-91f6-a5f2392ff001',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 497,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: points[1].latitude,
        longitude: points[1].longitude,
        zoom: 13
      }
    },
    location: {
      latitude: points[1].latitude,
      longitude: points[1].longitude,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.3
  }, {
    id: '33fd94fc-eca8-40dc-8d48-cc803a4c75bd',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 174,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: points[2].latitude,
        longitude:points[2].longitude,
        zoom: 16
      }
    },
    location: {
      latitude: points[2].latitude,
      longitude: points[2].longitude,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.9
  },
  {
    id: '9302bd59-d28a-4c95-b8cd-b59cf32cf8fc',
    title: 'Tile House',
    type: 'room',
    price: 173,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: points[3].latitude,
        longitude: points[3].longitude,
        zoom: 13
      }
    },
    location: {
      latitude: points[3].latitude,
      longitude: points[3].longitude,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6
  },
  {
    id: '78535fc6-3e08-40c8-9029-90fa0c044596',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 450,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.1
  }
];
