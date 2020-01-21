import React from 'react';
import LocationMap from './location-map';

import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

const TagsContainer = styled.div`
  grid-area: tags;
  padding: 0 1em 1em 0;
  border-bottom: 1px solid ${colors.light};
  @media (max-width: ${widths.sm}) {
    border: 0;
    padding: 0 1em 1em 0;
  }
`;

const DateContainer = styled.div`
  grid-area: date;
  padding: 1em 1em 0 0;
  @media (max-width: ${widths.sm}) {
    border-left: 1px solid ${colors.light};
    padding: 0 0 1em 1em;
  }
`;

const MapContainer = styled.div`
  grid-area: map;
  border-left: 1px solid ${colors.light};
  padding: 0 1em;
  @media (max-width: ${widths.sm}) {
    border: 0;
    border-top: 1px solid ${colors.light};
    padding: 1em 0;
  }
`;
const MetaContainer = styled.aside`
  display: grid;
  grid-template-areas:
    'tags map map map'
    'date map map map';
  margin: 1em 0;
  label {
    display: block;
    font-size: 0.8em;
    color: ${colors.grey};
    letter-spacing: 1.5px;
  }
  p,
  time {
    font-weight: bolder;
  }
  @media (max-width: ${widths.sm}) {
    grid-template-areas:
      'tags date'
      'map map'
      'map map';
    margin-bottom: 1em;
  }
`;

const MetaBox = ({ lat, lon, date, dateType, tags }) => (
  <MetaContainer>
    <TagsContainer>
      <label>TAGS</label>
      <p>{tags.join(', ')}</p>
    </TagsContainer>
    <DateContainer>
      <label>{dateType}</label>
      <time>{date}</time>
    </DateContainer>
    <MapContainer>
      <label>LOCATION</label>
      <LocationMap lat={lat} lon={lon} />
    </MapContainer>
  </MetaContainer>
);

export default MetaBox;
