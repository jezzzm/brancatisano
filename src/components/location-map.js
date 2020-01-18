import React from 'react';
import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';

const Map = styled.div`
  height: 200px;
  width: 100%;
  margin: 1em 0 0;
`;

export default ({ lat, lon, title }) => (
  <Map>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{
        lat: lat,
        lng: lon,
      }}
      defaultZoom={12}
    ></GoogleMapReact>
  </Map>
);
