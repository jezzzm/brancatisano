import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colors } from '../../../constants';

const StyledMarker = styled.span`
  color: ${colors.secondary};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  font-size: 4em;
  transform: translate(-50%, -50%);
  display: block;
  position: absolute;
`;

const Marker = ({ icon }) => <StyledMarker>{icon}</StyledMarker>;

Marker.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Marker;
