import React from 'react';
import styled from '@emotion/styled';

const Map = styled.div`
  height: 200px;
  width: 100%;
  background: pink;
  margin: 1em 0 0;
`;

export default ({ lat, lon, title }) => (
  <Map>
    map goes here with lat: {lat} lon: {lon} <br />
    title: {title}
  </Map>
);
