import React from 'react';
import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';
import { colors } from '../../constants';

const Map = styled.div`
  height: 200px;
  width: 100%;
  margin: 1em 0 0;
`;
const StyledMarker = styled.span`
  color: ${colors.secondary};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  font-size: 4em;
`;

const Marker = ({ icon }) => <StyledMarker>{icon}</StyledMarker>;

export default ({ lat, lon }) => (
  <Map>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{
        lat: lat,
        lng: lon,
      }}
      defaultZoom={12}
    >
      <Marker icon="&#10540;" lat={lat} lng={lon} />
    </GoogleMapReact>
  </Map>
);
