import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Map from '../map';

import { colors, widths } from '../../../constants';

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
  span {
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

const Meta = ({
  lat, lon, date, dateType, tags,
}) => (
  <MetaContainer>
    {tags.length ? (
      <TagsContainer>
        <span>TAGS</span>
        <p>{tags.join(', ')}</p>
      </TagsContainer>
    ) : null}
    <DateContainer>
      <span>{dateType}</span>
      <time>{date}</time>
    </DateContainer>
    <MapContainer>
      <span>LOCATION</span>
      <Map lat={lat} lon={lon} />
    </MapContainer>
  </MetaContainer>
);

Meta.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  dateType: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Meta.defaultProps = {
  tags: [],
};

export default Meta;
