import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

const StyledMap = styled.div`
  height: 200px;
  width: 100%;
  margin: 1em 0 0;
`;

const Map = ({ lat, lon }) => (
  <StyledMap>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{
        lat,
        lng: lon,
      }}
      defaultZoom={12}
    >
      <Marker icon="&#10540;" lat={lat} lng={lon} />
    </GoogleMapReact>
  </StyledMap>
);

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default Map;
