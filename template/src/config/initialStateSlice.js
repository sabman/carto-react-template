import { POSITRON } from 'lib/basemaps';

export const initialState = {
  viewState: {
    latitude: 31.802892,
    longitude: -103.007813,
    zoom: 2,
    pitch: 0,
    bearing: 0,
    dragRotate: false,
  },
  basemap: POSITRON,
  credentials: {
    username: 'public',
    apiKey: 'default_public',
    serverUrlTemplate: 'https://{user}.carto.com',
  },
  googleApiKey: '', // only required when using a Google Basemap
};

export const oauthInitialState = {
  oauthApp: {
    clientId: '0m4N2QdVnJ48', // cra-carto oauth app (@carto public user)
    scopes: [
      'user:profile', // to load avatar photo
      'datasets:metadata', // to list all your datasets,
      'dataservices:geocoding', // to use geocoding through Data Services API
      'dataservices:isolines', // to launch isochrones or isodistances through Data Services API
    ],
    authorizeEndPoint: 'https://carto.com/oauth2/authorize', // only valid if keeping https://localhost:3000/oauthCallback
  },
  token: null,
  userInfo: null,
};